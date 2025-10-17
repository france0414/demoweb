// data/navigation.ts

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavigationContent {
  logoUrl: string;
  mainNav: NavItem[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export const PrimaryNavigation: NavigationContent = {
  logoUrl: 'https://picsum.photos/800/600?random=10',
  mainNav: [
    { label: '產品中心', href: '/products' },
    { label: '最新消息', href: '/news' },
    {
      label: '關於我們',
      href: '/about',
      children: [
        { label: '公司簡介', href: '/about/company' },
        { label: '核心優勢', href: '/about/features' },
      ],
    },
    { label: '聯絡詢價', href: '/contact' },
  ],
  ctaButton: { label: '立即諮詢', href: '/contact' },
};
