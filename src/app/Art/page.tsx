"use client";

import React, { useEffect, useState } from "react";

interface NotionPageData {
  created_time: string;
  last_edited_time: string;
}

const Articles: React.FC = () => {
  const [pageData, setPageData] = useState<NotionPageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch("/api/notion");
        const data = await response.json();
        if (response.ok) {
          setPageData(data);
        } else {
          setError(data.error);
        }
      } catch {
        setError("Failed to fetch data from Notion");
      }
    };

    fetchPageData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Notion Page Data</h1>
      {pageData ? (
        <div>
          <p>Page created on: {new Date(pageData.created_time).toLocaleString()}</p>
          <p>Last edited on: {new Date(pageData.last_edited_time).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Articles;
