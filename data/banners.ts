export interface BannerItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  width: number;
  height: number;
}

export const MainBannerContent: BannerItem[] = [
  {
    id: 'b1',
    imageUrl: 'https://picsum.photos/1920/800?random=2',
    title: '探索無限可能',
    description: '我們的智慧積木系統，讓您的網站建構前所未有的簡單與強大。',
    ctaText: '立即開始',
    ctaLink: '/get-started',
    width: 1920,
    height: 800,
  },
  {
    id: 'b2',
    imageUrl: 'https://picsum.photos/1920/800?random=3',
    title: '客製化您的品牌',
    description: '多樣化的模組與彈性配置，完美符合您的品牌形象。',
    ctaText: '了解更多',
    ctaLink: '/features',
    width: 1920,
    height: 800,
  },
  {
    id: 'b3',
    imageUrl: 'https://picsum.photos/1920/800?random=4',
    title: '響應式設計，無縫體驗',
    description: '無論任何裝置，您的網站都能提供最佳瀏覽體驗。',
    ctaText: '查看案例',
    ctaLink: '/showcase',
    width: 1920,
    height: 800,
  },
];
