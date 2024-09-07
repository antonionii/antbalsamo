import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GET() {
  const pageId = '6b1bc9b868234ef5bb5effe45d6d68bc';
  console.log(pageId);

  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    console.log(response);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Notion:", error);

    return NextResponse.json({ error: 'Failed to fetch data from Notion' }, { status: 500 });
  }
}
