export interface IndustrySolutionItem {
  id: string;
  iconName: string; // Changed to iconName
  title: string;
  description: string;
  ctaHref: string; // Changed to ctaHref
  largeImageUrl: string; // Added largeImageUrl
}

export const MainIndustrySolutions = {
  items: [
    {
      id: 'is1',
      iconName: 'Telescope',
      title: '智慧製造',
      description: '透過物聯網與大數據分析，提升生產效率與品質。',
      ctaHref: '/solutions/smart-manufacturing',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=1',
    },
    {
      id: 'is2',
      iconName: 'HeartHandshake',
      title: '醫療健康',
      description: '數位化病歷管理與遠距醫療服務，優化患者體驗。',
      ctaHref: '/solutions/healthcare',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=2',
    },
    {
      id: 'is3',
      iconName: 'GraduationCap',
      title: '教育科技',
      description: '互動式學習平台與個性化教學，激發學生潛力。',
      ctaHref: '/solutions/education-tech',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=3',
    },
    {
      id: 'is4',
      iconName: 'Store',
      title: '智慧零售',
      description: '精準顧客分析與智能庫存管理，創造全新購物體驗。',
      ctaHref: '/solutions/smart-retail',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=4',
    },
    {
      id: 'is5',
      iconName: 'Banknote',
      title: '金融服務',
      description: '安全高效的數位金融解決方案，助力企業轉型。',
      ctaHref: '/solutions/finance',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=5',
    },
    {
      id: 'is6',
      iconName: 'Car',
      title: '智慧交通',
      description: '優化交通流量，提升出行效率與安全性。',
      ctaHref: '/solutions/smart-transportation',
      largeImageUrl: 'https://picsum.photos/1920/1080?random=6',
    },
  ],
  ctaText: '查看所有解決方案',
  mobileTitle: '我們的產業解決方案',
};