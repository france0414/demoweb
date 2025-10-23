import { LayoutSettings, BannerSettings } from './settings';
import { ContentBlock } from './content-block'; // Import ContentBlock

export interface Product {
  id: string;
  name:string;
  images: string[];
  shortDescription: string;
  fullDescription: string; // For product detail page
  specifications: Record<string, string>;
  categoryIds: string[];
  width?: number; // Optional image width
  height?: number; // Optional image height
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  layout: LayoutSettings;
  banner?: BannerSettings;
  contentBlocks?: ContentBlock[]; // Use the ContentBlock array
}
