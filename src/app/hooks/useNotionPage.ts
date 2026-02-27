"use client";

import { useEffect, useState } from "react";
import type { NotionBlock, NotionPageMetadata } from "../../types/notion";

/* ============================================
   useNotionPage Hook
   Fetches page metadata + blocks from /api/blocks.
   Shared by Blocks and Blogs page components.
   ============================================ */

interface UseNotionPageReturn {
  metadata: NotionPageMetadata | null;
  blockData: NotionBlock[];
  error: string | null;
  isLoading: boolean;
}

export function useNotionPage(pageId: string | undefined): UseNotionPageReturn {
  const [metadata, setMetadata] = useState<NotionPageMetadata | null>(null);
  const [blockData, setBlockData] = useState<NotionBlock[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!pageId) return;

    const fetchBlockData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/blocks?pageId=${pageId}`);
        const data = await res.json();
        if (res.ok) {
          setMetadata(data.metadata);
          setBlockData(data.blocks);
        } else {
          setError(data.error);
        }
      } catch {
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlockData();
  }, [pageId]);

  return { metadata, blockData, error, isLoading };
}
