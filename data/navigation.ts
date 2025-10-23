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

import { Category } from '@/app/types/entities'; // Import Category type

export function getPrimaryNavigation(categories: Category[]): NavigationContent {
  const productChildren: NavItem[] = categories
    .filter(cat => cat.parentId === null) // Get top-level categories
    .map(cat => ({
      label: cat.name,
      href: `/products/${cat.slug}`,
    }));

  return {
    logoUrl: 'https://picsum.photos/800/600?random=10',
    mainNav: [
      {
        label: '產品中心',
        href: '/products',
        children: productChildren,
      },
      { label: '最新消息', href: '/news' },
      {
        label: '關於我們',
        href: '/about',
        children: [
          { label: '公司簡介', href: '/about/company' },
          { label: '核心優勢', href: '/about/features' },
        ],
      },
      { label: '常見問題', href: '/faq' },
      { label: '聯絡詢價', href: '/contact' },
      { label: 'Tabs Showcase', href: '/tabs-showcase' },
      { label: 'Industry Showcase', href: '/industry-showcase' },
    ],
    ctaButton: { label: '立即諮詢', href: '/contact' },
  };
}
