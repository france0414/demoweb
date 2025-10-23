import { Category } from '@/app/types/entities';

export const mockCategories: Category[] = [
  {
    id: 'electronics',
    name: '電子產品',
    slug: 'electronics',
    parentId: null,
    layout: { view: 'grid', desktopColumns: 2, tabletColumns: 2, mobileColumns: 1 },
    banner: { showBackground: true, backgroundImage: 'https://picsum.photos/1920/400?random=1' }, // Changed
    contentBlocks: [
      {
        type: 'markdown',
        content: '## 歡迎來到電子產品專區\n\n這裡匯集了最新的科技產品，從智慧型手機到高效能筆記型電腦，應有盡有。我們致力於提供最優質的電子設備，滿足您的各種需求。',
        layout: { type: 'full-width' }
      },
      {
        type: 'image',
        src: 'https://picsum.photos/1900/300?random=1', // Changed
        alt: 'Electronics Showcase',
        layout: { type: 'full-width' }
      },
      {
        type: 'accordion',
        items: [
          { title: '電子產品的保固政策是什麼？', content: '所有電子產品均享有兩年原廠保固，部分產品提供延長保固服務。' },
          { title: '如何選擇適合我的電子產品？', content: '您可以參考我們的產品比較工具，或聯繫客服專員獲取專業建議。' },
        ],
        layout: { type: 'default' }
      }
    ]
  },
  {
    id: 'smartphones',
    name: '智慧型手機',
    slug: 'smartphones',
    parentId: 'electronics',
    layout: { view: 'list', desktopColumns: 2, tabletColumns: 2, mobileColumns: 1 },
    banner: { showBackground: true, backgroundColor: '#e0f2fe' },
    contentBlocks: [
      {
        type: 'markdown',
        content: '### 探索最新智慧型手機\n\n從旗艦機到入門款，我們提供多種品牌和型號的智慧型手機，滿足您對通訊和娛樂的渴望。',
        layout: { type: 'full-width' }
      }
    ]
  },
  {
    id: 'laptops',
    name: '筆記型電腦',
    slug: 'laptops',
    parentId: 'electronics',
    layout: { view: 'grid', desktopColumns: 2, tabletColumns: 2, mobileColumns: 1 },
    banner: { showBackground: true, backgroundColor: '#f0fdf4' },
    contentBlocks: [
      {
        type: 'markdown',
        content: '### 高效能筆記型電腦\n\n無論是商務辦公、遊戲娛樂還是專業創作，這裡都有適合您的筆記型電腦。',
        layout: { type: 'default' }
      }
    ]
  },
  {
    id: 'home-appliances',
    name: '家用電器',
    slug: 'home-appliances',
    parentId: null,
    layout: { view: 'grid', desktopColumns: 4, tabletColumns: 2, mobileColumns: 1 },
    banner: { showBackground: true, backgroundImage: 'https://picsum.photos/400/300?random=12' }, // Changed
    contentBlocks: [
      {
        type: 'markdown',
        content: '## 提升居家生活品質\n\n精選各式家用電器，讓您的生活更加便利舒適。',
        // layout: { type: 'default', maxWidthClass: 'max-w-7xl mx-auto' }
         layout: { type: 'full-width' }
      }
    ]
  },
];
