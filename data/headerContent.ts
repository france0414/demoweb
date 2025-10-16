export interface HeaderData {
  logoUrl: string;
  ctaButton: { label: string, href: string };
}

// 現在只保留一組固定的 Header 內容
export const defaultHeaderData: HeaderData = {
  logoUrl: '/images/logo-dark.png',
  ctaButton: { label: '立即諮詢', href: '/contact' },
};