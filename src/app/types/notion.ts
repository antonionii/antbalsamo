/* ============================================
   NOTION API TYPES
   Describes the shape of data returned by the
   Notion SDK and our /api/blocks endpoint.
   ============================================ */

/** A single span of styled text inside any Notion block. */
export interface NotionRichText {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    code: boolean;
    color: string;
    background_color?: string;
  };
}

/** Image source — either hosted by Notion or an external URL. */
export interface NotionImageSource {
  type: "file" | "external";
  file?: { url: string };
  external?: { url: string };
  caption?: NotionRichText[];
}

/** Callout block content. */
export interface NotionCallout {
  rich_text: NotionRichText[];
  icon?: { emoji: string } | null;
  color: string;
}

/** Union of every block type we render. */
export interface NotionBlock {
  id: string;
  type:
    | "paragraph"
    | "heading_1"
    | "heading_2"
    | "heading_3"
    | "image"
    | "callout"
    | "bulleted_list_item";
  has_children: boolean;
  children?: NotionBlock[];
  paragraph?: { rich_text: NotionRichText[] };
  heading_1?: { rich_text: NotionRichText[] };
  heading_2?: { rich_text: NotionRichText[] };
  heading_3?: { rich_text: NotionRichText[] };
  image?: NotionImageSource;
  callout?: NotionCallout;
  bulleted_list_item?: { rich_text: NotionRichText[] };
}

/** A single Notion page property (subset we use). */
export interface NotionProperty {
  id: string;
  type: "rich_text" | "status" | "date" | string;
  rich_text?: NotionRichText[];
  status?: { name: string } | null;
  date?: { start: string } | null;
}

/** Page metadata returned by our API route. */
export interface NotionPageMetadata {
  title: string;
  coverImage?: string | null;
  icon?: string | null;
  properties: Record<string, NotionProperty>;
}

/** Full response shape from GET /api/blocks. */
export interface NotionPageResponse {
  metadata: NotionPageMetadata;
  blocks: NotionBlock[];
}
