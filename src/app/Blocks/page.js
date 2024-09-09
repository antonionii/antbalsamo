"use client";
import React, { useEffect, useState } from "react";

const Blocks = () => {
  const [blockData, setBlockData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockData = async () => {
      try {
        const response = await fetch("/api/block");
        const data = await response.json();
        if (response.ok) {
          setBlockData(data);
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

  return (
    // <div>{ blockData.length === 0 ? (
    //     <h4>Loading...</h4> ) : (
    //         blockData.map((block) => {
    //             switch (block.type) {
    //                 case 'paragraph':
    //                     return <p key={block.id}>{block.paragraph.rich_text[0]?.plain_text}</p>;
    //                 case 'heading_1':
    //                     return <h1 key={block.id}>{block.heading_1.rich_text[0]?.plain_text}</h1>;
    //                 default:
    //                     return null;
    //             }
    //         })
    //     )};
    <div>dsdd</div>
        
    //</div>
  );
};

export default Blocks;
