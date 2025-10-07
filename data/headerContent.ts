export interface HeaderData {
  logoUrl: string;
  navLinks: { label: string, href: string }[];
  ctaButton: { label: string, href: string };
}

// 現在只保留一組固定的 Header 內容
export const defaultHeaderData: HeaderData = {
  logoUrl: '/images/logo-dark.png',
  navLinks: [
    { label: '關於我們', href: '/about' },
    { label: '服務項目', href: '/services' },
    { label: '部落格', href: '/blog' },
  ],
  ctaButton: { label: '立即諮詢', href: '/contact' },
};