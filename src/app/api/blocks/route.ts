import { NextResponse, type NextRequest } from "next/server";
import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

/* ---- Password check ---- */

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const PROJECT_PASSWORD = process.env.PROJECT_PASSWORD;

  if (password === PROJECT_PASSWORD) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json(
    { success: false, message: "Incorrect password" },
    { status: 401 }
  );
}

/* ---- Notion client ---- */

const notion = new Client({ auth: process.env.NOTION_API_KEY });

/* ---- Helpers ---- */

interface PageMetadata {
  title: string;
  coverImage?: string | null;
  icon?: string | null;
  properties: PageObjectResponse["properties"];
}

const getPageMetadata = async (pageId: string): Promise<PageMetadata> => {
  const response = (await notion.pages.retrieve({
    page_id: pageId,
  })) as PageObjectResponse;

  const titleProperty = response.properties?.Project;
  let title = "Untitled";
  if (titleProperty?.type === "title" && titleProperty.title.length > 0) {
    title = titleProperty.title[0].plain_text;
  }

  return {
    title,
    coverImage:
      response.cover?.type === "external"
        ? response.cover.external.url
        : response.cover?.type === "file"
          ? response.cover.file.url
          : null,
    icon: response.icon?.type === "emoji" ? response.icon.emoji : null,
    properties: response.properties,
  };
};

interface BlockWithChildren extends BlockObjectResponse {
  children?: BlockWithChildren[];
}

const getChildBlock = async (blockId: string): Promise<BlockWithChildren[]> => {
  const allBlocks: BlockObjectResponse[] = [];
  let cursor: string | undefined = undefined;

  /* Paginate through all children (Notion returns max 100 per call) */
  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });
    allBlocks.push(...(response.results as BlockObjectResponse[]));
    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
  } while (cursor);

  /* Recursively fetch nested children */
  const childBlocks = await Promise.all(
    allBlocks.map(async (block) => {
      if (block.has_children) {
        const children = await getChildBlock(block.id);
        return { ...block, children } as BlockWithChildren;
      }
      return block as BlockWithChildren;
    })
  );

  return childBlocks;
};

/* ---- GET handler ---- */

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pageId = searchParams.get("pageId");

  if (!pageId) {
    return NextResponse.json({ error: "pageId is needed" }, { status: 400 });
  }

  try {
    const [metadata, blocks] = await Promise.all([
      getPageMetadata(pageId),
      getChildBlock(pageId),
    ]);

    const response = NextResponse.json({ metadata, blocks }, { status: 200 });

    /* Cache for 60s, serve stale for 5min while revalidating */
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=300"
    );

    return response;
  } catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Notion" },
      { status: 500 }
    );
  }
}
