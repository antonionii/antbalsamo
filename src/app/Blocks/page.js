"use client";
import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const Blocks = () => {

  const [metadata, setMetadata] = useState(null);
  const [blockData, setBlockData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockData = async () => {
      try {
        const response = await fetch("/api/blocks");
        const data = await response.json();
        if (response.ok) {
          setMetadata(data.metadata);
          setBlockData(data.blocks);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError("Failed to fetch data from Notion");
      }
    };

    fetchBlockData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const renderLinkText = (richTextArray) =>
    richTextArray.map((text, index) => {
      const link = text.text?.href || text.text?.link;

      return link ? (
        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
          {text.text.content}
        </a>
      ) : (
        <span key={index}>{text.text.content}</span>
      );
    });
  const nestBlock = (block) => {
    switch (block.type) {
      



        case 'paragraph':
        //  return <p key={block.id}>{block.paragraph.rich_text[0]?.plain_text}</p>;
        // return block.paragraph.rich_text?.map((text, index) => (
        //   <div key={index} className="paragraph">
        //     {text.text.link.url && text.text.href ? (
        //       <a href={text.text.link.url} target="_blank" rel="noopener noreferrer">
        //         {text.text.content}
        //       </a> ) : (
        //         text.text.plain_text
        //     )}
        //   </div>
        // ));
        return renderLinkText(block.paragraph.rich_text);


      case 'heading_1':
        // return <h1 key={block.id}>{block.heading_1.rich_text[0]?.plain_text}</h1>;
        // return block.heading_1.rich_text?.map((text, index) => (
        //   <div key={index} className="heading_1">
        //     {text.linkR ? (
        //       <a href={text.linkR} target="_blank" rel="noopener noreferrer">
        //         {text.text.content}
        //       </a> ) : (
        //         text.text.plain_text
        //     )}
        //     <h1>{text.plain_text}</h1>
        //   </div>
        // ));
        return <h1>{renderLinkText(block.heading_1.rich_text)}</h1>;

      case 'heading_2':
        // return <h2 key={block.id}>{block.heading_2.rich_text[0]?.plain_text}</h2>;
        // return block.heading_2.rich_text?.map((text, index) => (
        //   <div key={index} className="heading_2">
        //     <h2>{text.plain_text}</h2>
        //   </div>
        // ));
        return <h2>{renderLinkText(block.heading_2.rich_text)}</h2>;

        case 'heading_3':
        // return <h3 key={block.id}>{block.heading_2.rich_text[0]?.plain_text}</h2>;
        // return block.heading_3.rich_text?.map((text, index) => (
        //   <div key={index} className="heading_3">
        //     <h3>{text.plain_text}</h2>
        //   </div>
        // ));
        return <h3>{renderLinkText(block.heading_3.rich_text)}</h3>;
        

        case 'image': {
        const imageFile = block.image.type === 'external' ? block.image.external.url : block.image.file.url
          return (
            <div key={block.id}>
              <img src={imageFile} alt="image file" style={{ maxWidth: '100%'}} />
            </div>
          )
        };
        // return block.heading_2.rich_text.map((image, index) => (
        //   <div key={index} className="image">
        //     <h2>{image.file}</h2>
        //   </div>
        // ));
      case 'callout':
        // return block.callout.rich_text?.map((text, index) => (
        //   <div key={index} className="callout">
        //     <p>{text.plain_text}</p>
        //   </div>
        // )); 
        return renderLinkText(block.callout.rich_text);

      case 'bulleted_list_item':
        // return block.bulleted_list_item.rich_text?.map((text, index) => (
        //   <div key={index} className="bulleted_list_item">
        //     <p>{text.plain_text}</p>
        //   </div>
        // ));
        return <ul>
          <li>{  renderLinkText(block.bulleted_list_item.rich_text)}</li>
        </ul>

        default:
          return null;
    }
  };

  const nestBlockChild = (block) => {
    return (
      <div key={block.id}>
        {nestBlock(block)}
        {block.children && block.children.map(nestBlockChild)}
      </div>
    );
  };

  return (
    <div>

<div>
  {metadata ? (
    <div>
      <h1>{metadata.title}</h1>
      {metadata.coverImage && (
        <img src={metadata.coverImage} alt="cover image" style={{ maxWidth: '100%' }} />
      )}
      {metadata?.icon && <div>{metadata.icon}</div>}
      <p>Created on: {metadata.createdTime}</p>
      <p> Last edited on: {metadata.lastEditedTime}</p>
    </div>
  ) : (
    <h4> Loading metadata...</h4>
  )}
    </div>
      {blockData.length === 0 ? (
        <h4>Loading...</h4>
      ) : (
        blockData.map(nestBlockChild)
      )}
    </div>
  );

  // return (
  //   <div>
  //     {blockData.length === 0 ? (
  //       <h4>Loading...</h4>
  //     ) : (
  //       blockData.map((block) => {
  //         switch (block.type) {
  //           case 'paragraph':
  //             return <p key={block.id}>{block.paragraph.rich_text[0]?.plain_text}</p>;
  //           case 'heading_1':
  //             return <h1 key={block.id}>{block.heading_1.rich_text[0]?.plain_text}fgdffd</h1>;
  //           // case 'callout':
  //           //   return block.callout.rich_text.map(text => (
  //           //     <p key={text.id}>{text.plain_text}ggfgffd</p>
  //           //   ))
  //           // case 'callout':
  //           //   return <p key={block.id}>{block.paragraph.rich_text}</p>
  //           default:
  //             return null;
  //         }
  //       })
  //     )}
  //   </div>
  // );
};

export default Blocks;
