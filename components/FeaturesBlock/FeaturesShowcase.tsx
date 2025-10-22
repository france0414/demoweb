import React from 'react';
import FeaturesBlock from './FeaturesBlock';
import { FeaturesContent } from '@/data/features';
import CodeAccordion from '@/components/shared/CodeAccordion'; // Import CodeAccordion

const defaultFeaturesExample: FeaturesContent = {
  title: "預設 FeaturesBlock 範例",
  subtitle: "展示預設佈局的特色功能區塊。",
  features: [
    {
      id: 'df1',
      iconName: 'Zap',
      title: '極速開發',
      description: '利用預設積木與自動化工具，快速搭建網站。',
    },
    {
      id: 'df2',
      iconName: 'Layers',
      title: '模組化設計',
      description: '彈性組合各種功能模組，滿足多樣化需求。',
    },
    {
      id: 'df3',
      iconName: 'Palette',
      title: '高度客製化',
      description: '從版面到樣式，皆可依品牌形象自由調整。',
    },
    {
      id: 'df4',
      iconName: 'Users',
      title: '使用者體驗設計',
      description: '以使用者為中心，打造直觀、流暢的數位體驗。',
    },
  ],
};

const sideBySideFeaturesExample: FeaturesContent = {
  title: "側邊圖片 FeaturesBlock 範例",
  subtitle: "展示圖片在左側，特色列表在右側的佈局。",
  sideImage: 'https://picsum.photos/800/600?random=200',
  features: [
    {
      id: 'sf1',
      iconName: 'Settings',
      title: '客製化解決方案',
      description: '根據您的獨特需求，提供量身打造的軟體服務。',
    },
    {
      id: 'sf2',
      iconName: 'Cloud',
      title: '雲端整合服務',
      description: '無縫整合各種雲端平台，提升業務彈性與效率。',
    },
    {
      id: 'sf3',
      iconName: 'Users',
      title: '使用者體驗設計',
      description: '以使用者為中心，打造直觀、流暢的數位體驗。',
    },
  ],
};

const iconGridFeaturesExample: FeaturesContent = {
  title: "圖標網格 FeaturesBlock 範例",
  subtitle: "展示純圖標網格佈局的特色功能區塊。",
  features: [
    {
      id: 'ig1',
      iconName: 'ShieldCheck',
      title: '安全穩定',
      description: '採用最新技術，確保網站資料安全與運行穩定。',
    },
    {
      id: 'ig2',
      iconName: 'Headphones',
      title: '專業支援',
      description: '提供即時技術支援，解決您的任何疑問。',
    },
    {
      id: 'ig3',
      iconName: 'TrendingUp',
      title: 'SEO 友善',
      description: '內建 SEO 優化功能，助您提升搜尋引擎排名。',
    },
    {
      id: 'ig4',
      iconName: 'Globe',
      title: '多語言支援',
      description: '輕鬆建構多語言網站，拓展全球市場。',
    },
  ],
};

const FeaturesShowcase: React.FC = () => {
  const propertyExplanations = [
    {
      property: 'id: string',
      description: '每個特色項目的唯一識別碼。',
      acceptedValues: 'string',
    },
    {
      property: 'title: string',
      description: '特色區塊或特色項目的標題。',
      acceptedValues: 'string',
    },
    {
      property: 'subtitle: string',
      description: '特色區塊的副標題。',
      acceptedValues: 'string',
    },
    {
      property: 'features: FeatureItem[]',
      description: '特色項目陣列，每個項目可以是圖標或圖片。',
      acceptedValues: '`FeatureItem[]` (陣列)',
    },
    {
      property: 'iconName?: string',
      description: 'Lucide Icon 的名稱 (例如 &quot;Zap&quot;)，用於顯示圖標。',
      acceptedValues: 'string (Lucide Icon 名稱)',
    },
    {
      property: 'imageUrl?: string',
      description: '圖片的 URL，用於顯示圖片。',
      acceptedValues: 'string (圖片 URL)',
    },
    {
      property: 'description: string',
      description: '特色項目的簡短描述。',
      acceptedValues: 'string',
    },
    {
      property: 'sideImage?: string',
      description: '側邊圖片的 URL，用於 FeaturesSideBySide 佈局。',
      acceptedValues: 'string (圖片 URL)',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-900">FeaturesBlock 組件展示</h1>

      <div className="mb-16 p-6 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-md">
        <pre className="bg-blue-100 p-4 rounded-md text-sm mb-4"><code>&lt;FeaturesBlock data={/* 填寫 FeaturesContent 物件 */} version=&quot;default&quot; /&gt;</code></pre>
        <h2 className="text-2xl font-bold mb-4">FeaturesBlock 屬性說明</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-blue-100 border border-blue-300 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-blue-200 text-blue-800 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">屬性 (Property)</th>
                <th className="py-3 px-6 text-left">說明 (Description)</th>
                <th className="py-3 px-6 text-left">可接受的值 (Accepted Values)</th>
              </tr>
            </thead>
            <tbody className="text-blue-700 text-sm font-light">
              <tr className="border-b border-blue-200 hover:bg-blue-50">
                <td className="py-3 px-6 text-left whitespace-nowrap font-medium">`data`</td>
                <td className="py-3 px-6 text-left">
                  一個 `FeaturesContent` 物件，定義特色區塊的內容。
                  可參考本檔案中 `defaultFeaturesExample`、`sideBySideFeaturesExample` 或 `iconGridFeaturesExample` 變數的資料結構。
                </td>
                <td className="py-3 px-6 text-left">`FeaturesContent` 物件</td>
              </tr>
              <tr className="border-b border-blue-200 hover:bg-blue-50">
                <td className="py-3 px-6 text-left whitespace-nowrap font-medium">`version`</td>
                <td className="py-3 px-6 text-left">
                  控制 FeaturesBlock 的佈局樣式。
                </td>
                <td className="py-3 px-6 text-left">`&quot;default&quot;` | `&quot;side-by-side&quot;` | `&quot;icon-grid&quot;`</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Default FeaturesBlock Example */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">預設 FeaturesBlock 範例</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-8">
          <FeaturesBlock data={defaultFeaturesExample} version="default" />
        </div>
        <CodeAccordion title="配置代碼:" code={JSON.stringify(defaultFeaturesExample, null, 2)} />
      </div>

      {/* SideBySide FeaturesBlock Example */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">側邊圖片 FeaturesBlock 範例</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-8">
          <FeaturesBlock data={sideBySideFeaturesExample} version="side-by-side" />
        </div>
        <CodeAccordion title="配置代碼:" code={JSON.stringify(sideBySideFeaturesExample, null, 2)} />
      </div>

      {/* IconGrid FeaturesBlock Example */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">圖標網格 FeaturesBlock 範例</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-8">
          <FeaturesBlock data={iconGridFeaturesExample} version="icon-grid" />
        </div>
        <CodeAccordion title="配置代碼:" code={JSON.stringify(iconGridFeaturesExample, null, 2)} />
      </div>

      <h2 className="text-4xl font-extrabold text-center mt-20 mb-10 text-gray-900">FeatureItem 屬性說明</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">屬性 (Property)</th>
              <th className="py-3 px-6 text-left">說明 (Description)</th>
              <th className="py-3 px-6 text-left">可接受的值 (Accepted Values)</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {propertyExplanations.map((exp, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap font-medium">{exp.property}</td>
                <td className="py-3 px-6 text-left">{exp.description}</td>
                <td className="py-3 px-6 text-left">{exp.acceptedValues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturesShowcase;
