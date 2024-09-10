import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const getChildBlock = async (blockId) => {
  try {
    const response = await notion.blocks.children.list({ block_id: blockId });

    const childBlock = await Promise.all(
      response.results.map(async (block) => {
        if(block.has_children) {
          const children = await getChildBlock(block.id);
          return { ...block, children };
        }
        return block;
      })
    );
    return childBlock;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

const getPageMetadata = async (pageId) => {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  } catch (error) {
    console.error('Error fetching meta page data', error);
    throw error;
  }
};
const extractPageMetadata = (pageData) => {
  const titleProperty = pageData.properties.title.title[0]?.content || 'Untitled';
  const coverImage = pageData.cover?.external?.url || pageData.cover?.file?.url;
  const icon = pageData = pageData.icon?.emoji || pageData.icon?.file?.url || pageData.icon?.external?.url;
  const createdTime = pageData.created_time;
  const lastEditedTime = pageData.last_edited_time;

  return {
    title: titleProperty,
    coverImage,
    icon,
    createdTime,
    lastEditedTime,
  };
};

export async function GET() {
  // const pageId = 'b69d5dda5fe4413e81b875916cb2a923';
  // const pageId = '80e79e864f4f4c57b029a0b3439b4889';
  const pageId = 'a8fe00e4af834fd9a82b97606ef882df';
  //const pageId = 'b14475b3-8ed2-4071-b255-9372ca762821'
  console.log('Notion API Key:', process.env.NOTION_API_KEY);
  try {
    const pageBlock = await getChildBlock(pageId);
    const pageMetadata = await getPageMetadata(pageId);
    const metadata = extractPageMetadata(pageMetadata);

    if (!pageBlock || pageBlock.length === 0) {
      return NextResponse.json({ error: 'Block not found'}, { status: 404});
    }

    return NextResponse.json({blocks:pageBlock, metadata}, { status:200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from Notion'}, { status: 500 });
  }
}

  
//   try {
//     const response = await notion.blocks.children.list({
//       block_id: pageId,
//     });

//     if (!response.results || response.results.length === 0) {
//       return NextResponse.json({ error: 'No block data found' }, { status: 404 });
//     }

//     return NextResponse.json(response.results, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching data from Notion:', error);
//     return NextResponse.json({ error: 'Failed to fetch data from Notion' }, { status: 500 });
//   }
// }
