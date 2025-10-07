// data/products.ts
// 這個檔案專門存放與產品列表相關的內容資料

export const MainProductContent = {
  title: "我們的熱門產品",
  products: [
    {
      id: 'p1',
      name: "智慧積木產生器",
      model: "GM-001",
      description: "一鍵生成高品質網站積木，大幅提升開發效率。",
      price: "NT$ 2,999",
      imageUrl: "/images/product-1.svg",
      category: ["工具", "AI", "開發"],
      link: "/products/gm-001",
    },
    {
      id: 'p2',
      name: "動態樣式編輯器",
      model: "DS-002",
      description: "直觀的視覺化介面，輕鬆調整網站樣式，無需編寫 CSS。",
      price: "NT$ 1,499",
      imageUrl: "/images/product-2.svg",
      category: ["工具", "設計", "前端"],
      link: "/products/ds-002",
    },
    {
      id: 'p3',
      name: "JSON 內容管理器",
      model: "CM-003",
      description: "集中管理所有網站內容，支援多語言與版本控制。",
      price: "NT$ 1,899",
      imageUrl: "/images/product-3.svg",
      category: ["工具", "內容", "後端"],
      link: "/products/cm-003",
    },
    {
      id: 'p4',
      name: "雲端部署服務 (一年)",
      model: "CD-004",
      description: "一站式部署解決方案，讓您的網站快速上線，穩定運行。",
      price: "NT$ 12,000",
      imageUrl: "/images/product-4.svg",
      category: ["服務", "雲端", "部署"],
      link: "/products/cd-004",
    },
    {
      id: 'p5',
      name: "進階 SEO 優化模組",
      model: "SEO-005",
      description: "提升網站搜尋引擎排名，帶來更多自然流量。",
      price: "NT$ 3,500",
      imageUrl: "/images/product-5.svg", // 假設有這張圖
      category: ["行銷", "SEO", "工具"],
      link: "/products/seo-005",
    },
    {
      id: 'p6',
      name: "客戶關係管理系統",
      model: "CRM-006",
      description: "有效管理客戶資料，提升客戶滿意度與忠誠度。",
      price: "NT$ 8,000",
      imageUrl: "/images/product-6.svg", // 假設有這張圖
      category: ["管理", "CRM", "企業"],
      link: "/products/crm-006",
    },
  ],
};