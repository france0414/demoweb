export interface BlockLayoutSettings {
  type: 'default' | 'full-width' | 'two-columns' | 'image-left';
  backgroundColor?: string;
  maxWidthClass?: string; // New property for custom max-width
}

export interface AccordionItem {
  title: string;
  content: string; // Accordion 內部內容也可以是 Markdown
}

export interface MarkdownBlock {
  type: 'markdown';
  content: string; // 存放 Markdown 內容
  layout?: BlockLayoutSettings; // 這個 Markdown 區塊的版型設定
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  layout?: BlockLayoutSettings; // 圖片區塊也可以有版型設定
}

export interface AccordionBlock {
  type: 'accordion';
  items: AccordionItem[];
  layout?: BlockLayoutSettings; // 開合選單區塊也可以有版型設定
}

export type ContentBlock = MarkdownBlock | ImageBlock | AccordionBlock;
