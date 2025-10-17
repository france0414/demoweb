export interface HeaderData {
  logoUrl: string;
  ctaButton: { label: string, href: string };
}

// 現在只保留一組固定的 Header 內容
export const defaultHeaderData: HeaderData = {
  logoUrl: 'https://picsum.photos/800/600?random=5',
  ctaButton: { label: '立即諮詢', href: '/contact' },
};