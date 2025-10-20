// 定義 FeatureItem 的基礎屬性
interface BaseFeatureItem {
  id: string;
  title: string;
  description: string;
}

// 定義使用 Lucide Icon 的特色項目
interface IconFeature extends BaseFeatureItem {
  iconName: string; // Lucide Icon 的名稱
  imageUrl?: never; // 不能同時有 imageUrl
}

// 定義使用圖片的特色項目
interface ImageFeature extends BaseFeatureItem {
  imageUrl: string; // 圖片的 URL
  iconName?: never; // 不能同時有 iconName
}

// FeatureItem 必須是 IconFeature 或 ImageFeature 其中之一
export type FeatureItem = IconFeature | ImageFeature;

export interface FeaturesContent {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  sideImage?: string; // New property for the side image
}

export const MainFeaturesContent: FeaturesContent = {
  title: "我們的核心優勢",
  subtitle: "透過智慧積木系統，我們為您提供無與倫比的網站建構體驗。",
  features: [
    {
      id: 'f1',
      iconName: 'Zap', // Example Lucide Icon
      title: '極速開發',
      description: '利用預設積木與自動化工具，快速搭建網站。',
    },
    {
      id: 'f2',
      iconName: 'Layers',
      title: '模組化設計',
      description: '彈性組合各種功能模組，滿足多樣化需求。',
    },
    {
      id: 'f3',
      iconName: 'Palette',
      title: '高度客製化',
      description: '從版面到樣式，皆可依品牌形象自由調整。',
    },
    {
      id: 'f4',
      iconName: 'Monitor',
      title: '響應式佈局',
      description: '自動適應各種裝置，提供最佳瀏覽體驗。',
    },
    {
      id: 'f5',
      iconName: 'ShieldCheck',
      title: '安全穩定',
      description: '採用最新技術，確保網站資料安全與運行穩定。',
    },
    {
      id: 'f6',
      iconName: 'Headphones',
      title: '專業支援',
      description: '提供即時技術支援，解決您的任何疑問。',
    },
    {
      id: 'f7',
      iconName: 'TrendingUp',
      title: 'SEO 友善',
      description: '內建 SEO 優化功能，助您提升搜尋引擎排名。',
    },
    {
      id: 'f8',
      iconName: 'Globe',
      title: '多語言支援',
      description: '輕鬆建構多語言網站，拓展全球市場。',
    },
  ],
};

// 新增 SideBySideFeaturesContent
export const SideBySideFeaturesContent: FeaturesContent = {
  title: "我們的特色服務",
  subtitle: "專為您的業務量身打造，提供卓越的解決方案。",
  sideImage: 'https://picsum.photos/800/600?random=100', // Dedicated image for the side
  features: [
    {
      id: 's1',
      iconName: 'Settings', // Reverted to iconName
      title: '客製化解決方案',
      description: '根據您的獨特需求，提供量身打造的軟體服務。',
    },
    {
      id: 's2',
      iconName: 'Cloud',
      title: '雲端整合服務',
      description: '無縫整合各種雲端平台，提升業務彈性與效率。',
    },
    {
      id: 's3',
      iconName: 'Users', // Reverted to iconName
      title: '使用者體驗設計',
      description: '以使用者為中心，打造直觀、流暢的數位體驗。',
    },
  ],
};
