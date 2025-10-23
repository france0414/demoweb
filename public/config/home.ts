import { ContentSection } from '@/app/types/content';
import { NewsSection } from '@/data/news-content'; // New import
import { IndustrySolutionSection } from '@/data/industry-content'; // New import

// 定義積木配置的介面
export interface BlockConfig {
  name: string;
  version: string;
  dataKey?: string; // Made optional
  sectionData?: ContentSection; // New property for ContentSection data
  navigationDataKey?: string;
}

// 定義首頁配置的介面
interface HomePageConfigType {
  pageTitle: string;
  blocks: BlockConfig[];
}

// 匯出首頁的配置物件
export const HomePageConfig: HomePageConfigType = {
  pageTitle: "首頁 - 智慧型積木系統",
  blocks: [
    {
      name: "BannerBlock",
      // 可選版本: "static" | "carousel"
      version: "static",
      dataKey: "MainBannerContent"
    },
    {
      name: "FeaturesBlock",
      // 可選版本: "default" | "side-by-side" | "icon-grid"
      version: "default",
      dataKey: "MainFeaturesContent"
    },
    {
      name: "FeaturesBlock",
      // 可選版本: "default" | "side-by-side" | "icon-grid"
      version: "side-by-side",
      dataKey: "SideBySideFeaturesContent"
    },
    {
      name: "FeaturesBlock",
      // 可選版本: "default" | "side-by-side" | "icon-grid"
      version: "icon-grid",
      dataKey: "SideBySideFeaturesContent"
    },
    {
      name: "IndustrySolutionBlock",
      version: "Default", // Changed to carousel for now, as interactive-fullscreen is complex
      sectionData: IndustrySolutionSection // Using sectionData
    },
    {
      name: "ProductListBlock",
      // 可選版本: "grid" | "carousel"
      version: "carousel",
      dataKey: "MainProductContent"
    },
    {
      name: "NewsBlock",
      // 可選版本: "grid" | "list" | "carousel"
      version: "carousel",
      sectionData: NewsSection // Using sectionData
    },
    {
      name: "AboutBlock",
      // 可選版本: "image-left" | "image-right"
      version: "image-left",
      dataKey: "MainAboutContent"
    }
  ]
};
