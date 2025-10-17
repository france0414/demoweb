export interface IndustryItem {
  title: string;
  description: string;
  iconName: string; // Lucide Icon name
  largeImageUrl: string;
  width: number;
  height: number;
  ctaHref: string;
}

export interface IndustrySolutionContent {
  mobileTitle: string;
  ctaText: string;
  items: IndustryItem[];
}

export const MainIndustrySolutions: IndustrySolutionContent = {
  mobileTitle: "應用產業解決方案",
  ctaText: "了解更多",
  items: [
    {
      title: '智慧建築',
      description: '為現代建築提供自動化控制與能源管理解決方案。',
      iconName: 'Building',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=2',
      width: 1920,
      height: 1080,
      ctaHref: '/solutions/smart-building',
    },
    {
      title: '工業 4.0',
      description: '透過物聯網與大數據分析，實現智慧工廠的生產優化。',
      iconName: 'Factory',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=3',
      width: 1920,
      height: 1080,
      ctaHref: '/solutions/industry-4-0',
    },
    {
      title: '醫療照護',
      description: '提供遠程監控與智慧病房管理，提升醫療服務品質。',
      iconName: 'Hospital',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=4',
      width: 1920,
      height: 1080,
      ctaHref: '/solutions/healthcare',
    },
    {
      title: '零售餐飲',
      description: '透過智慧POS與客戶關係管理，優化消費體驗。',
      iconName: 'ShoppingCart',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=8',
      width: 1920,
      height: 1080,
      ctaHref: '/solutions/retail',
    },
  ],
};
