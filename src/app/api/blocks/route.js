import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const getPageMetadata = async (pageId) => {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    console.log('Page metadata response:', response);
    return {
      title: response.properties.title.title[0]?.text.content,
      coverImage: response.cover?.external?.url || response.cover?.file?.url,
      icon: response.icon?.emoji || null,
      createdTime: response.created_time,
      lastEditedTime: response.last_edited_time
    };
  } catch (error) {
    console.error('Error fetching page metadata:', error);
    throw error;
  }
};

const getChildBlock = async (blockId) => {
  try {
    let allChildren = [];
    let nextCursor = undefined;
    do {
      const response = await notion.blocks.children.list({ block_id: blockId, start_cursor: nextCursor });
      allChildren = allChildren.concat(response.results);
      nextCursor = response.next_cursor;
    } while (nextCursor);
    
    const childBlock = await Promise.all(
      allChildren.map(async (block) => {
        if (block.has_children) {
          const children = await getChildBlock(block.id);
          return { ...block, children };
        }
        return block;
      })
    );
    return childBlock;
  } catch (error) {
    console.error('Error fetching block data:', error);
    throw error;
  }
};


export async function GET() {
  // const pageId = 'a8fe00e4af834fd9a82b97606ef882df'; 
  const pageId = url.searchParams.get('pageId');

  try {
    const [metadata, blocks] = await Promise.all([
      getPageMetadata(pageId),
      getChildBlock(pageId)
    ]);

    return NextResponse.json({ metadata, blocks }, { status: 200 });
  } catch (error) {
    console.error('Error in GET route:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Notion' }, { status: 500 });
  }
}
