import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GET() {
  const pageId = '80e79e864f4f4c57b029a0b3439b4889';
  console.log(pageId);

  try {
    const response = await notion.blocks.children.list({block_id: pageId});
    console.log(response);

     return NextResponse.json(response.results, { status: 200 });
    //return NextResponse.json(response.results)
  } catch (error) {
    console.error("Error fetching data from Notion:", error);

    return NextResponse.json({ error: 'Failed to fetch data from Notion' }, { status: 500 });
  }
}
