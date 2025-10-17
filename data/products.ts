export interface Product {
  id: string;
  name: string;
  model: string;
  description: string;
  price: string;
  imageUrl: string;
  width: number;
  height: number;
  category: string[];
  link: string;
}

export interface ProductContent {
  title: string;
  products: Product[];
}

export const MainProductContent: ProductContent = {
  title: "我們的熱門產品",
  products: [
    {
      id: 'p1',
      name: "智慧積木產生器",
      model: "GM-001",
      description: "一鍵生成高品質網站積木，大幅提升開發效率。",
      price: "NT$ 2,999",
      imageUrl: "https://picsum.photos/800/600?random=19",
      width: 800,
      height: 600,
      category: ["工具", "AI", "開發"],
      link: "/products/gm-001",
    },
    {
      id: 'p2',
      name: "動態樣式編輯器",
      model: "DS-002",
      description: "直觀的視覺化介面，輕鬆調整網站樣式，無需編寫 CSS。",
      price: "NT$ 1,499",
      imageUrl: "https://picsum.photos/800/600?random=20",
      width: 800,
      height: 600,
      category: ["工具", "設計", "前端"],
      link: "/products/ds-002",
    },
    {
      id: 'p3',
      name: "JSON 內容管理器",
      model: "CM-003",
      description: "集中管理所有網站內容，支援多語言與版本控制。",
      price: "NT$ 1,899",
      imageUrl: "https://picsum.photos/800/600?random=21",
      width: 800,
      height: 600,
      category: ["工具", "內容", "後端"],
      link: "/products/cm-003",
    },
    {
      id: 'p4',
      name: "雲端部署服務 (一年)",
      model: "CD-004",
      description: "一站式部署解決方案，讓您的網站快速上線，穩定運行。",
      price: "NT$ 12,000",
      imageUrl: "https://picsum.photos/800/600?random=22",
      width: 800,
      height: 600,
      category: ["服務", "雲端", "部署"],
      link: "/products/cd-004",
    },
    {
      id: 'p5',
      name: "進階 SEO 優化模組",
      model: "SEO-005",
      description: "提升網站搜尋引擎排名，帶來更多自然流量。",
      price: "NT$ 3,500",
      imageUrl: "https://picsum.photos/800/600?random=23",
      width: 800,
      height: 600,
      category: ["行銷", "SEO", "工具"],
      link: "/products/seo-005",
    },
    {
      id: 'p6',
      name: "客戶關係管理系統",
      model: "CRM-006",
      description: "有效管理客戶資料，提升客戶滿意度與忠誠度。",
      price: "NT$ 8,000",
      imageUrl: "https://picsum.photos/800/600?random=24",
      width: 800,
      height: 600,
      category: ["管理", "CRM", "企業"],
      link: "/products/crm-006",
    },
  ],
};