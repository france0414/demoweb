import { ContentSection, ContentCategory, ContentItem } from '@/app/types/content';

export const mockNewsCategories: ContentCategory[] = [
  {
    id: 'company-news',
    name: '公司新聞',
    slug: 'company-news',
    parentId: null,
    description: '關於公司的最新動態和重要公告。',
    iconName: 'Building', // Changed from icon to iconName
    homepageBannerImage: 'https://picsum.photos/seed/company-news-banner/1920/400', // Added homepage banner
  },
  {
    id: 'industry-updates',
    name: '產業動態',
    slug: 'industry-updates',
    parentId: null,
    description: '行業趨勢、技術發展和市場分析。',
    iconName: 'TrendingUp', // Changed from icon to iconName
  },
  {
    id: 'product-updates',
    name: '產品更新',
    slug: 'product-updates',
    parentId: null,
    description: '我們產品的新功能、改進和發布。',
    iconName: 'Package', // Changed from icon to iconName
  },
  {
    id: 'events',
    name: '活動報導',
    slug: 'events',
    parentId: null,
    description: '公司參與或舉辦的活動報導。',
    iconName: 'Calendar', // Changed from icon to iconName
  },
];

export const mockNewsItems: ContentItem[] = [
  {
    id: 'news-1',
    title: '公司榮獲年度創新獎',
    slug: 'company-awarded-innovation',
    categoryId: 'company-news',
    publishDate: '2023-10-20',
    shortDescription: '我們很高興宣布，本公司在今年的行業評選中榮獲年度創新獎。',
    image: 'https://picsum.photos/seed/award/800/500', // Added image for list display
    iconName: 'Award', // Changed from icon to iconName
    contentBlocks: [
      {
        type: 'markdown',
        content: '## 公司榮獲年度創新獎\n\n我們很高興宣布，本公司在今年的行業評選中榮獲年度創新獎。這項榮譽是對我們團隊不懈努力和創新精神的肯定。\n\n未來，我們將繼續致力於技術創新，為客戶提供更優質的產品和服務。\n\n**頒獎典禮照片：**\n',
        layout: { type: 'default' }
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/award/800/500',
        alt: 'Award Ceremony',
        layout: { type: 'default' }
      },
    ],
  },
  {
    id: 'news-2',
    title: 'AI技術在製造業的應用趨勢',
    slug: 'ai-in-manufacturing',
    categoryId: 'industry-updates',
    publishDate: '2023-10-15',
    shortDescription: '深入分析AI技術如何改變傳統製造業，提升生產效率和品質。',
    image: 'https://picsum.photos/seed/ai-manufacturing/800/500', // Added image for list display
    iconName: 'Cpu', // Changed from icon to iconName
    contentBlocks: [
      {
        type: 'markdown',
        content: '## 公司榮獲年度創新獎\n\n我們很高興宣布，本公司在今年的行業評選中榮獲年度創新獎。這項榮譽是對我們團隊不懈努力和創新精神的肯定。\n\n未來，我們將繼續致力於技術創新，為客戶提供更優質的產品和服務。\n\n**頒獎典禮照片：**\n',
        layout: { type: 'default' }
      },
    ],
  },
  {
    id: 'news-3',
    title: '新版產品管理管理系統上線',
    slug: 'new-product-management-system',
    categoryId: 'product-updates',
    publishDate: '2023-10-10',
    shortDescription: '全新升級的產品管理系統，帶來更流暢的用戶體驗和強大功能。',
    image: 'https://picsum.photos/seed/product-system/800/500', // Added image for list display
    iconName: 'RefreshCw', // Changed from icon to iconName
    contentBlocks: [
      {
        type: 'markdown',
        content: '## 新版產品管理系統上線\n\n我們很高興地宣布，全新升級的產品管理系統已正式上線！本次更新帶來了多項重要改進和新功能，旨在為用戶提供更流暢、更高效的產品管理體驗。\n\n**主要更新內容：**\n\n*   **全新用戶界面：** 重新設計的界面更加直觀、易用，提升操作效率。\n*   **增強的數據分析功能：** 提供更深入的產品數據分析報告，幫助您做出更明智的決策。\n*   **優化的協同合作：** 團隊成員之間可以更便捷地共享信息、協同工作。\n*   **更高的安全性：** 強化了數據加密和訪問控制，確保您的產品數據安全無虞。\n\n我們鼓勵所有用戶立即體驗新版系統，並期待您的寶貴反饋。\n',
        layout: { type: 'default' }
      },
    ],
  },
];

export const NewsSection: ContentSection = {
  id: 'news',
  name: '最新消息',
  slug: 'news',
  description: '掌握公司最新動態、產業趨勢與產品更新。',
  image: 'https://picsum.photos/seed/news-banner/1920/400',
  categories: mockNewsCategories,
  items: mockNewsItems,
};
