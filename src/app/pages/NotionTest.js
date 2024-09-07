import { NotionAPI } from 'notion-client'
import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'


const notion = new NotionAPI()

const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')


const NotionTest = ({ recordMap }) => (
  <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
)

/*
const NotionTest =  ({ blockMap }) => (
  <div style={{ maxWidth: 768 }}>
    <NotionRenderer blockMap={blockMap} />
  </div>
); */

export default NotionTest;



