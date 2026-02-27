"use client";

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import PageHeaderText from "../../components/PageHeaderText";
import { ModalContext } from "../../layout";
import Spinner from "../../components/Spinner";
import Image from "next/image";
import { PageContainer } from "../../styles/PageContainer";
import { useNotionPage } from "../../hooks/useNotionPage";
import { renderLinkedText, renderPlainText } from "../../components/notion/richText";
import type { NotionBlock } from "../../types/notion";

const Blocks = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const { metadata, blockData, error, isLoading } = useNotionPage(pageId);
  const { openImageModal } = useContext(ModalContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  /* ---- Property rendering ---- */
  const renderProperties = (): React.ReactNode => {
    if (!metadata?.properties) return null;
    const propertyOrder = ["Role", "Product", "Company", "Time", "User Persona Roles", "Status"];

    return propertyOrder.map((key) => {
      const property = metadata.properties[key];
      if (!property) return null;

      let valueContent: React.ReactNode = null;
      switch (property.type) {
        case "rich_text":
          valueContent = renderPlainText(property.rich_text ?? []);
          break;
        case "status":
          valueContent = <span>{property.status?.name ?? "Unknown"}</span>;
          break;
        default:
          valueContent = <span>Unsupported property type</span>;
      }

      return (
        <div key={property.id} className="grid grid-cols-[1fr_2fr] items-center">
          <div className="flex items-center gap-2 font-[family-name:'Roboto_Slab',serif] text-[var(--color-text-muted)] font-medium text-[1rem]">
            <span className="material-symbols-outlined">subject</span>
            {key}
          </div>
          <div className="font-[family-name:'Roboto_Slab',serif] font-medium text-[1rem] text-[var(--color-text-primary)]">
            {valueContent}
          </div>
        </div>
      );
    });
  };

  /* ---- Block rendering ---- */
  const nestBlock = (block: NotionBlock): React.ReactNode => {
    switch (block.type) {
      case "image": {
        const imageFile =
          block.image!.type === "external"
            ? block.image!.external!.url
            : block.image!.file!.url;

        const caption = block.image!.caption ?? [];
        const altText = caption.map((item) => item.plain_text).join("") || "Project image";
        const hyperlink = caption.find((item) => item.href)?.href;
        const linkName = hyperlink
          ? decodeURIComponent(hyperlink.split("/").pop()?.split("?")[0] ?? "")
              .replace(/-/g, " ")
              .replace(/_/g, " ")
          : "";

        if (hyperlink) {
          return (
            <div key={block.id} className="relative text-center mx-auto max-w-full inline-block cursor-default [&_img]:max-w-full [&_img]:h-auto [&_img]:block group">
              <a href={hyperlink} target="_blank" rel="noopener noreferrer">
                <Image src={imageFile} alt={altText} width={800} height={600} layout="responsive" />
                <div className="absolute inset-0 flex flex-col gap-1 justify-end items-start p-2 bg-[var(--color-overlay-medium)] text-[var(--color-text-inverse)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-base">🔗</span>
                  <span className="text-base capitalize whitespace-nowrap font-[family-name:'Roboto_Slab',serif]">{linkName}</span>
                </div>
              </a>
            </div>
          );
        }

        return (
          <div key={block.id} className="relative text-center mx-auto max-w-full inline-block cursor-zoom-in [&_img]:max-w-full [&_img]:h-auto [&_img]:block">
            <Image
              src={imageFile}
              alt={altText}
              width={800}
              height={600}
              layout="responsive"
              onClick={() => openImageModal(imageFile)}
            />
          </div>
        );
      }
      case "paragraph":
        return (
          <p className="leading-[1.8rem] font-[family-name:var(--font-body)] text-[var(--color-text-secondary)] font-medium text-[1.2rem] [&_b]:font-bold [&_i]:italic [&_u]:underline [&_code]:p-[0.2rem] [&_code]:rounded">
            {renderLinkedText(block.paragraph!.rich_text, "underline font-[family-name:'Roboto_Slab',serif]")}
          </p>
        );
      case "heading_1":
        return (
          <h1 key={block.id} className="text-[2.25rem] font-[family-name:'Roboto_Slab',serif] font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)] rounded-xl py-2 px-4">
            {renderLinkedText(block.heading_1!.rich_text, "underline font-[family-name:'Roboto_Slab',serif]")}
          </h1>
        );
      case "heading_2":
        return (
          <h2 key={block.id} className="text-[1.75rem] font-[family-name:'Roboto_Slab',serif] font-medium underline leading-none text-[var(--color-text-secondary)]">
            {renderLinkedText(block.heading_2!.rich_text, "underline font-[family-name:'Roboto_Slab',serif]")}
          </h2>
        );
      case "heading_3":
        return (
          <h3 key={block.id} className="text-[1.375rem] font-[family-name:'Roboto_Slab',serif] font-medium leading-[1.4] text-[var(--color-text-secondary)]">
            {renderLinkedText(block.heading_3!.rich_text, "underline font-[family-name:'Roboto_Slab',serif]")}
          </h3>
        );
      case "callout":
        if (block.callout!.rich_text.length > 0) {
          return (
            <div style={{ backgroundColor: block.callout!.color }} className="font-[family-name:'Roboto_Slab',serif]">
              {block.callout!.icon && <span>{block.callout!.icon.emoji}</span>}
              {block.callout!.rich_text.map((text, index) => (
                <span key={index}>{text.plain_text}</span>
              ))}
            </div>
          );
        }
        return null;
      case "bulleted_list_item":
        return (
          <ul key={block.id} className="list-disc pl-3 font-[family-name:'Roboto_Slab',serif] text-[var(--color-text-secondary)] [&_li]:mx-4 [&_li]:pr-8 [&_li]:pl-4 [&_li]:font-medium [&_li]:text-[1.2rem]">
            <li>{renderLinkedText(block.bulleted_list_item!.rich_text, "underline font-[family-name:'Roboto_Slab',serif]")}</li>
          </ul>
        );
      default:
        return null;
    }
  };

  const nestBlockChild = (block: NotionBlock, parentIsCallout = false): React.ReactNode => {
    const isCallout = block.type === "callout";

    return (
      <div key={block.id}>
        {nestBlock(block)}
        {isCallout && block.children && block.children.length > 0 ? (
          <div className="flex flex-col gap-4 bg-[var(--color-bg-surface)] rounded-md py-4 px-8">
            {block.children.map((childBlock) => nestBlockChild(childBlock, true))}
          </div>
        ) : (
          block.children?.map((childBlock) => nestBlockChild(childBlock, parentIsCallout))
        )}
      </div>
    );
  };

  return (
    <>
      {metadata?.coverImage && (
        <div
          className="w-screen h-[calc(100vh/3)] bg-center bg-no-repeat bg-cover relative"
          style={{ backgroundImage: `url(${metadata.coverImage})` }}
        />
      )}
      <PageContainer className="pt-0">
        <div
          className="
            flex flex-col gap-12 w-full items-center p-0 overflow-hidden
            md:w-[65%] md:mx-auto md:px-4
            xl:w-[65%]
          "
        >
          {metadata ? (
            <div className="w-full flex justify-start">
              <div className="flex flex-col gap-8 text-[var(--color-text-primary)]">
                <h1 className="text-[2.5rem] font-[family-name:'Roboto_Slab',serif] font-bold text-[var(--color-text-primary)] text-left">
                  {metadata.title}
                </h1>
                {metadata.icon && (
                  <div className="text-base text-[var(--color-text-secondary)]">{metadata.icon}</div>
                )}
                <div className="grid gap-2">{renderProperties()}</div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-screen">
              <Spinner size={36} />
            </div>
          )}
          {isClient && blockData.length === 0 ? (
            <div className="flex justify-center items-center h-screen">
              <Spinner size={36} />
            </div>
          ) : (
            <div className="flex flex-col gap-4 w-full">
              {blockData.map((block) => nestBlockChild(block))}
            </div>
          )}
        </div>
      </PageContainer>
    </>
  );
};

export default Blocks;
