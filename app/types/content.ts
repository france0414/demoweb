import { BlockLayoutSettings, ContentBlock } from './content-block';

export interface ContentCategory {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  description?: string;
  image?: string;
  homepageBannerImage?: string; // New: Optional banner image for homepage carousel
  iconName?: string; // Changed from icon to iconName
  contentBlocks?: ContentBlock[];
}

export interface ContentItem {
  id: string;
  title: string;
  slug: string;
  categoryId: string; // The ID of the category this item belongs to
  publishDate: string; // e.g., 'YYYY-MM-DD'
  image?: string;
  iconName?: string; // Changed from icon to iconName
  shortDescription?: string;
  contentBlocks: ContentBlock[];
}

export interface ContentSection {
  id: string;
  name: string;
  slug: string; // e.g., 'news', 'about', 'industry'
  description?: string;
  image?: string;
  layout?: BlockLayoutSettings; // Layout settings for the section's main page
  categories: ContentCategory[];
  items: ContentItem[];
}
