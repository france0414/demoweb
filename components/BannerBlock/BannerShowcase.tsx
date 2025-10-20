import React from 'react';
import BannerBlock from './BannerBlock';
import { BannerItem } from '@/data/banners';
import CodeAccordion from '@/components/shared/CodeAccordion'; // Import CodeAccordion

const backgroundBanners: BannerItem[] = [
  {
    id: 'bg1',
    imageUrl: 'https://picsum.photos/1920/700?random=20',
    mobileImageUrl: 'https://picsum.photos/800/600?random=20',
    title: '背景模式範例 1: 置中深色疊層',
    description: '圖片作為背景，內容置中，深色疊層確保文字可讀性。',
    ctaText: '了解更多',
    ctaLink: '/bg-demo/1',
    width: 1920,
    height: 700,
    mobileWidth: 800,
    mobileHeight: 600,
    mode: 'background',
    contentPosition: 'center',
    hasOverlay: true,
    overlayColor: 'black',
    overlayOpacity: 60,
  },
  {
    id: 'bg2',
    imageUrl: 'https://picsum.photos/1920/700?random=21',
    mobileImageUrl: 'https://picsum.photos/800/600?random=21',
    title: '背景模式範例 2: 右上角彩色疊層',
    description: '圖片作為背景，內容置於右上角，帶有藍色疊層。',
    ctaText: '立即體驗',
    ctaLink: '/bg-demo/2',
    width: 1920,
    height: 700,
    mobileWidth: 800,
    mobileHeight: 600,
    mode: 'background',
    contentPosition: 'top-right',
    hasOverlay: true,
    overlayColor: 'blue-600',
    overlayOpacity: 40,
  },
  {
    id: 'bg3',
    imageUrl: 'https://picsum.photos/1920/700?random=22',
    mobileImageUrl: 'https://picsum.photos/800/600?random=22',
    title: '背景模式範例 3: 左下角無疊層',
    description: '圖片作為背景，內容置於左下角，無疊層。',
    ctaText: '查看案例',
    ctaLink: '/bg-demo/3',
    width: 1920,
    height: 700,
    mobileWidth: 800,
    mobileHeight: 600,
    mode: 'background',
    contentPosition: 'bottom-left',
    hasOverlay: false,
  },
];

const imageBanners: BannerItem[] = [
  {
    id: 'img1',
    imageUrl: 'https://picsum.photos/1920/700?random=30',
    mobileImageUrl: 'https://picsum.photos/800/600?random=30',
    title: '圖片模式範例 1: 置中無疊層',
    description: '圖片為主角，內容置中，無疊層。',
    ctaText: '了解更多',
    ctaLink: '/img-demo/1',
    width: 1920,
    height: 700,
    mobileWidth: 800,
    mobileHeight: 600,
    mode: 'image',
    contentPosition: 'center',
    hasOverlay: false,
  },
  {
    id: 'img2',
    imageUrl: 'https://picsum.photos/1920/700?random=31',
    mobileImageUrl: 'https://picsum.photos/800/600?random=31',
    title: '圖片模式範例 2: 右下角深色疊層',
    description: '圖片為主角，內容置於右下角，深色疊層。',
    ctaText: '立即查看',
    ctaLink: '/img-demo/2',
    width: 1920,
    height: 700,
    mobileWidth: 800,
    mobileHeight: 600,
    mode: 'image',
    contentPosition: 'bottom-right',
    hasOverlay: true,
    overlayColor: 'black',
    overlayOpacity: 50,
  },
  {
    id: 'img3',
    imageUrl: 'https://picsum.photos/1920/700?random=32',
    mobileImageUrl: 'https://picsum.photos/800/600?random=32',
    title: '圖片模式範例 3: 左上角白色疊層',
    description: '圖片為主角，內容置於左上角，白色疊層。',
    ctaText: '探索',
    ctaLink: '/img-demo/3',
    width: 1920,
    height: 700,
    mobileWidth: 800,
    mobileHeight: 600,
    mode: 'image',
    contentPosition: 'top-left',
    hasOverlay: true,
    overlayColor: 'blue-600',
    overlayOpacity: 30,
  },
];

const BannerShowcase: React.FC = () => {
  const propertyExplanations = [
    {
      property: 'id: string',
      description: '每個 Banner 項目的唯一識別碼。',
      usage: '內部識別，確保每個 Banner 都是獨特的。',
    },
    {
      property: 'imageUrl: string',
      description: '用於桌面版 (PC) 顯示的 Banner 圖片的 URL。',
      usage: '提供高解析度或適合大螢幕的圖片資源。',
    },
    {
      property: 'mobileImageUrl: string',
      description: '用於行動裝置 (Mobile) 顯示的 Banner 圖片的 URL。',
      usage: '提供針對小螢幕優化的圖片資源，提升行動裝置上的載入速度和顯示效果。',
    },
    {
      property: 'title: string',
      description: '顯示在 Banner 上的主要標題文字。',
      usage: '吸引用戶注意力，簡潔傳達 Banner 的核心訊息。',
    },
    {
      property: 'description: string',
      description: '顯示在標題下方的簡短描述文字。',
      usage: '進一步解釋標題，提供更多背景資訊或細節。',
    },
    {
      property: 'ctaText: string',
      description: 'Call-to-Action (CTA) 按鈕上顯示的文字。',
      usage: '鼓勵用戶點擊按鈕，引導他們進行下一步操作。',
    },
    {
      property: 'ctaLink: string',
      description: 'CTA 按鈕點擊後導向的 URL 連結。',
      usage: '定義按鈕的目標頁面或功能。',
    },
    {
      property: 'width: number',
      description: '桌面版 `imageUrl` 的原始寬度（像素）。',
      usage: '幫助 Next.js 的 `Image` 組件在圖片載入前預留空間，防止佈局偏移 (CLS)。',
    },
    {
      property: 'height: number',
      description: '桌面版 `imageUrl` 的原始高度（像素）。',
      usage: '幫助 Next.js 的 `Image` 組件在圖片載入前預留空間，防止佈局偏移 (CLS)。',
    },
    {
      property: 'mobileWidth: number',
      description: '行動裝置版 `mobileImageUrl` 的原始寬度（像素）。',
      usage: '幫助 Next.js 的 `Image` 組件在圖片載入前預留空間，防止佈局偏移 (CLS)。',
    },
    {
      property: 'mobileHeight: number',
      description: '行動裝置版 `mobileImageUrl` 的原始高度（像素）。',
      usage: '幫助 Next.js 的 `Image` 組件在圖片載入前預留空間，防止佈局偏移 (CLS)。',
    },
    {
      property: 'mode: \'background\' | \'image\'',
      description: '定義 Banner 的顯示模式。',
      usage: '控制圖片的佈局行為和內容的呈現方式。',
    },
    {
      property: 'contentPosition?: \'center\' | \'top-left\' | \'top-center\' | \'top-right\' | \'middle-left\' | \'middle-right\' | \'bottom-left\' | \'bottom-center\' | \'bottom-right\'',
      description: '控制 Banner 內容 (標題、描述、CTA) 在 Banner 區域內的對齊位置。',
      usage: '靈活調整內容的視覺焦點，使其與圖片和設計風格協調。',
    },
    {
      property: 'hasOverlay?: boolean',
      description: '決定 Banner 上是否顯示一層半透明的顏色疊層。',
      usage: '增加文字的可讀性，或為 Banner 圖片添加特定的視覺效果。',
    },
    {
      property: 'overlayColor?: \'black\' | \'white\' | string',
      description: '疊層的顏色。可以使用 Tailwind CSS 支援的顏色名稱 (例如 \'black\', \'blue-600\')。',
      usage: '自定義疊層的顏色，以匹配品牌或設計需求。',
    },
    {
      property: 'overlayOpacity?: number',
      description: '疊層的透明度，數值範圍從 0 (完全透明) 到 100 (完全不透明)。',
      usage: '精確控制疊層的透明度，平衡圖片可見性和文字可讀性。',
    },
    {
      property: 'transitionEffect?: \'slide\' | \'fade\'',
      description: '輪播切換效果。',
      usage: '選擇 \'slide\' 進行滑動切換，或 \'fade\' 進行淡入淡出切換。',
    },
    {
      property: 'transitionDuration?: number',
      description: '輪播轉場時間 (毫秒)。',
      usage: '設定輪播切換動畫的持續時間，例如 500 代表 0.5 秒。',
    },
  ];

  return (
    <div className="container mx-auto  py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-900">BannerBlock 組件展示</h1>

      <div className="mb-16 p-6 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-md">
        <h2 className="text-2xl font-bold mb-2">輪播轉場模式說明 (transitionEffect)</h2>
        <p className="mb-2">
          在 `BannerBlock` 組件中，您可以透過 `transitionEffect` 屬性來控制輪播的轉場模式。這個屬性接受兩個值：
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>`"slide"` (滑動)</strong>: 這是預設的轉場效果，輪播會以滑動的方式切換到下一張圖片。
            <pre className="bg-blue-100 p-2 rounded-md text-sm mt-1"><code>&lt;BannerBlock data={'{...}'} transitionEffect="slide" /&gt;</code></pre>
          </li>
          <li>
            <strong>`"fade"` (淡入淡出)</strong>: 輪播會以淡入淡出的方式切換圖片，而不是滑動。
            <pre className="bg-blue-100 p-2 rounded-md text-sm mt-1"><code>&lt;BannerBlock data={'{...}'} transitionEffect="fade" /&gt;</code></pre>
          </li>
        </ul>
        <p className="mt-2">
          請注意，`transitionEffect` 是設定在 `BannerBlock` 組件本身，而不是在每個 `BannerItem` 內部。
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">背景模式輪播範例</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-8">
          <BannerBlock data={backgroundBanners} transitionEffect="slide" transitionDuration={500} />
        </div>
        <CodeAccordion title="配置代碼:" code={JSON.stringify(backgroundBanners, null, 2)} />
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">圖片模式輪播範例</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-8">
          <BannerBlock data={imageBanners} transitionEffect="fade" transitionDuration={1000} />
        </div>
        <CodeAccordion title="配置代碼:" code={JSON.stringify(imageBanners, null, 2)} />
      </div>

      <h2 className="text-4xl font-extrabold text-center mt-20 mb-10 text-gray-900">BannerItem 屬性說明</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">屬性 (Property)</th>
              <th className="py-3 px-6 text-left">說明 (Description)</th>
              <th className="py-3 px-6 text-left">用途 (Usage)</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {propertyExplanations.map((exp, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap font-medium">{exp.property}</td>
                <td className="py-3 px-6 text-left">{exp.description}</td>
                <td className="py-3 px-6 text-left">{exp.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BannerShowcase;
