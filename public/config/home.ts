// 定義積木配置的介面
interface BlockConfig {
  name: string;
  version: string;
  dataKey: string;
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
      name: "HeaderBlock",
      // 可選版本: "default" | "minimal"
      version: "default",
      dataKey: "defaultHeaderData",
      navigationDataKey: "PrimaryNavigation"
    },
    {
      name: "BannerBlock",
      // 可選版本: "static" | "carousel"
      version: "carousel",
      dataKey: "MainBannerContent"
    },
    {
      name: "IndustrySolutionBlock",
      version: "interactive-fullscreen",
      dataKey: "MainIndustrySolutions"
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
      name: "ProductListBlock",
      // 可選版本: "grid" | "carousel"
      version: "carousel",
      dataKey: "MainProductContent"
    },
    {
      name: "NewsBlock",
      // 可選版本: "grid" | "list" | "carousel"
      version: "carousel",
      dataKey: "MainNewsContent"
    },
    {
      name: "AboutBlock",
      // 可選版本: "image-left" | "image-right"
      version: "image-left",
      dataKey: "MainAboutContent"
    }
  ]
};
