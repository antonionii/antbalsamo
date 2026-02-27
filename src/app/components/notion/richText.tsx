import React from "react";
import type { NotionRichText } from "../../types/notion";

/**
 * Renders inline text annotations (bold, italic, underline, code, color).
 * Shared by both Blocks and Blogs pages.
 */
export function renderAnnotations(text: NotionRichText): React.ReactNode {
  const { annotations, plain_text } = text;
  const style: React.CSSProperties = {};
  if (annotations.bold) style.fontWeight = "bold";
  if (annotations.italic) style.fontStyle = "italic";
  if (annotations.underline) style.textDecoration = "underline";
  if (annotations.code) style.fontFamily = "monospace";
  if (annotations.color) style.color = annotations.color;
  if (annotations.background_color) style.backgroundColor = annotations.background_color;
  return <span style={style}>{plain_text}</span>;
}

/**
 * Renders a rich text array, wrapping links in <a> tags.
 *
 * @param richTextArray — Notion rich text spans
 * @param linkClassName — Tailwind classes applied to hyperlink <a> tags.
 *   Blocks uses: "underline font-[family-name:'Roboto_Slab',serif]"
 *   Blogs uses:  "text-[var(--color-text-link)] underline"
 */
export function renderLinkedText(
  richTextArray: NotionRichText[],
  linkClassName: string
): React.ReactNode[] {
  return richTextArray.map((text, index) => {
    if (text.href) {
      return (
        <a
          key={index}
          href={text.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {renderAnnotations(text)}
        </a>
      );
    }
    return <span key={index}>{renderAnnotations(text)}</span>;
  });
}

/**
 * Renders plain rich text (no links). Used for property values.
 */
export function renderPlainText(richTextArray: NotionRichText[]): React.ReactNode[] {
  return richTextArray.map((text, index) => (
    <span key={index}>{text.plain_text}</span>
  ));
}
