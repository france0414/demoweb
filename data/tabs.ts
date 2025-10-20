
// data/tabs.ts

export interface TabItem {
  id: string;
  title: string;
  iconName?: string; // For lucide-react icons
  iconUrl?: string;  // For image icons
  content: {
    title: string;
    description: string;
    imageUrl: string;
    link: {
      text: string;
      href: string;
    };
  };
}

export const tabsData: TabItem[] = [
  {
    id: 'solution-1',
    title: '整合方案',
    iconName: 'Package', // lucide-react icon
    content: {
      title: '全方位整合解決方案',
      description: '我們提供從前端到後端的完整技術堆疊，利用最新的雲端原生架構，為您的業務提供無與倫比的彈性與擴展性。無論是微服務、DevOps 或是自動化部署，我們都能一手包辦。',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      link: {
        text: '了解更多',
        href: '/solutions/integration',
      },
    },
  },
  {
    id: 'solution-2',
    title: '數據分析',
    iconName: 'Globe', // Image icon from public folder
    content: {
      title: '智慧數據分析平台',
      description: '透過我們強大的數據分析工具，將您的原始數據轉化為有價值的商業洞察。我們的平台支援即時數據處理與視覺化，幫助您快速做出明智的決策，並在競爭中保持領先。',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      link: {
        text: '探索數據',
        href: '/solutions/data-analytics',
      },
    },
  },
  {
    id: 'solution-3',
    title: '雲端服務',
    iconName: 'Cloud', // lucide-react icon
    content: {
      title: '可靠的企業級雲端服務',
      description: '我們提供安全、穩定且高效的雲端基礎設施服務。從私有雲、混合雲到多雲管理，我們的解決方案能滿足您最嚴苛的效能與安全需求，確保您的服務不間斷運行。',
      imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop',
      link: {
        text: '查看方案',
        href: '/solutions/cloud-services',
      },
    },
  },
  {
    id: 'solution-4',
    title: '資訊安全',
    iconName: 'File', // Image icon from public folder
    content: {
      title: '零信任資訊安全架構',
      description: '在今日複雜的網路環境中，我們採用零信任安全模型來保護您的數位資產。從身份驗證、設備管理到網路微分段，我們為您的企業打造一個全方位的縱深防禦體系。',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
      link: {
        text: '了解資安',
        href: '/solutions/security',
      },
    },
  },
    {
    id: 'solution-5',
    title: '客戶關係管理',
    iconName: 'Users', // lucide-react icon
    content: {
      title: '新一代客戶關係管理 (CRM)',
      description: '我們的 CRM 平台不僅僅是聯絡人管理。它整合了銷售、行銷和客戶服務的所有流程，透過自動化和 AI 技術，幫助您建立更深層次的客戶關係，並有效提升客戶終身價值。',
      imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop',
      link: {
        text: '體驗 CRM',
        href: '/solutions/crm',
      },
    },
  },
];
