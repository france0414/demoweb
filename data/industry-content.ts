import { ContentSection, ContentCategory, ContentItem } from '@/app/types/content';

export const mockIndustryCategories: ContentCategory[] = [
  {
    id: 'smart-manufacturing',
    name: '智慧製造',
    slug: 'smart-manufacturing',
    parentId: null,
    description: '運用AI與物聯網技術，提升生產效率與品質。',
    iconName: 'Factory',
  },
  {
    id: 'digital-transformation',
    name: '數位轉型',
    slug: 'digital-transformation',
    parentId: null,
    description: '協助企業導入數位工具，優化營運流程。',
    iconName: 'Cloud',
  },
  {
    id: 'supply-chain-optimization',
    name: '供應鏈優化',
    slug: 'supply-chain-optimization',
    parentId: null,
    description: '透過數據分析，提升供應鏈效率與韌性。',
    iconName: 'Truck',
  },
];

export const mockIndustryItems: ContentItem[] = [
  {
    id: 'solution-1',
    title: '智慧工廠解決方案',
    slug: 'smart-factory-solution',
    categoryId: 'smart-manufacturing',
    publishDate: '2023-09-01',
    image: 'https://picsum.photos/seed/smart-factory/800/500',
    shortDescription: '整合物聯網、大數據與AI，打造高效自動化生產線。',
    iconName: 'Robot',
    contentBlocks: [
      {
        type: 'markdown',
        content: '## 智慧工廠解決方案\n\n我們的智慧工廠解決方案旨在透過整合先進的物聯網（IoT）設備、大數據分析平台和人工智慧（AI）演算法，為製造業客戶打造一個高效、自動化且具備彈性的生產環境。\n\n**核心優勢：**\n\n*   **生產效率提升：** 透過即時數據監控與分析，優化生產排程，減少停機時間。\n*   **品質精準控制：** 導入AI視覺檢測系統，自動識別產品缺陷，確保產品品質。\n*   **成本有效降低：** 預測性維護減少設備故障，能源管理系統優化資源消耗。\n*   **彈性生產能力：** 快速響應市場變化，實現多品種、小批量柔性生產。\n\n**適用產業：**\n\n電子製造、汽車製造、精密機械、食品加工等。\n',
        layout: { type: 'default' }
      },
    ],
  },
  {
    id: 'solution-2',
    title: '企業雲端轉型服務',
    slug: 'enterprise-cloud-transformation',
    categoryId: 'digital-transformation',
    publishDate: '2023-08-15',
    image: 'https://picsum.photos/seed/cloud-transform/800/500',
    shortDescription: '協助企業將傳統IT架構遷移至雲端，提升靈活性與擴展性。',
    iconName: 'CloudUpload',
    contentBlocks: [
      {
        type: 'markdown',
        content: '## 企業雲端轉型服務\n\n面對快速變化的市場環境，企業數位轉型已成為必然趨勢。我們的企業雲端轉型服務，旨在協助客戶將現有的IT基礎設施、應用程式和數據安全、高效地遷移至雲端平台，並提供全面的雲端管理與優化服務。\n\n**服務內容：**\n\n*   **雲端策略規劃：** 根據企業需求，制定客製化的雲端轉型策略與路線圖。\n*   **雲端架構設計：** 設計符合業務需求且具備高可用性、高擴展性、高安全性的雲端架構。\n*   **數據遷移與整合：** 確保數據在遷移過程中的完整性與安全性，並實現多雲或混合雲環境下的數據整合。\n*   **雲端應用開發與優化：** 協助企業開發雲原生應用，並對現有應用進行雲端優化。\n*   **雲端安全與合規：** 提供全面的雲端安全解決方案，確保符合行業法規與標準。\n\n**客戶價值：**\n\n降低IT成本、提升營運效率、加速創新、增強業務彈性與韌性。\n',
        layout: { type: 'default' }
      },
    ],
  },
];

export const IndustrySolutionSection: ContentSection = {
  id: 'industry',
  name: '產業應用',
  slug: 'industry',
  description: '探索我們為各行各業提供的創新解決方案。',
  image: 'https://picsum.photos/seed/industry-banner/1920/400',
  categories: mockIndustryCategories,
  items: mockIndustryItems,
};
