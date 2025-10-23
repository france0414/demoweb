'use client';

import React from 'react';

// 匯入所有可能會用到的 "積木" 元件
import HeaderBlock from '@/components/HeaderBlock/HeaderBlock';
import NewsBlock from '@/components/NewsBlock/NewsBlock';
import AboutBlock from '@/components/AboutBlock/AboutBlock';
import ProductListBlock from '@/components/ProductListBlock/ProductListBlock';
import BannerBlock from '@/components/BannerBlock/BannerBlock';
import FeaturesBlock from '@/components/FeaturesBlock/FeaturesBlock';
import IndustrySolutionBlock from '@/components/IndustrySolutionBlock/IndustrySolutionBlock';

// 匯入所有可能會用到的資料來源
import * as HeaderData from '@/data/headerContent';
import * as NewsData from '@/data/news';
import * as AboutData from '@/data/about';
import * as ProductData from '@/data/products';
import * as BannerData from '@/data/banners';
import * as FeaturesData from '@/data/features';
// import * as NavigationData from '@/data/navigation'; // Removed
import * as IndustrySolutionData from '@/data/industrySolutions';
import { ContentSection } from '@/app/types/content'; // New import
import { BlockConfig } from '@/public/config/home'; // New import for updated BlockConfig

// 定義所有可能的資料類型
 type BlockData =
  | typeof HeaderData.defaultHeaderData
  | typeof NewsData.MainNewsContent
  | typeof AboutData.MainAboutContent
  | typeof ProductData.MainProductContent
  | typeof BannerData.MainBannerContent
  | typeof FeaturesData.MainFeaturesContent
  | typeof FeaturesData.SideBySideFeaturesContent
  // | typeof NavigationData.PrimaryNavigation // Removed
  | typeof IndustrySolutionData.MainIndustrySolutions
  | ContentSection; // Added ContentSection to BlockData type


// 為所有積木元件的 props 定義一個基礎介面
interface BlockComponentProps {
  version: string;
  data: BlockData | ContentSection; // Updated data type to include ContentSection
  // navigationData?: typeof NavigationData.PrimaryNavigation; // Removed
}

// 元件對應表
const BlockComponentMap: { [key: string]: React.FC<BlockComponentProps> } = {
  HeaderBlock: HeaderBlock,
  NewsBlock: NewsBlock,
  AboutBlock: AboutBlock,
  ProductListBlock: ProductListBlock,
  BannerBlock: BannerBlock,
  FeaturesBlock: FeaturesBlock,
  IndustrySolutionBlock: IndustrySolutionBlock,
};

// 資料對應表
const BlockDataMap: { [key: string]: BlockData } = {
  defaultHeaderData: HeaderData.defaultHeaderData,
  MainNewsContent: NewsData.MainNewsContent,
  MainAboutContent: AboutData.MainAboutContent,
  MainProductContent: ProductData.MainProductContent,
  MainBannerContent: BannerData.MainBannerContent,
  MainFeaturesContent: FeaturesData.MainFeaturesContent,
  SideBySideFeaturesContent: FeaturesData.SideBySideFeaturesContent,
  // PrimaryNavigation: NavigationData.PrimaryNavigation, // Removed
  MainIndustrySolutions: IndustrySolutionData.MainIndustrySolutions,
};

// BlockConfig 介面 (從 app/page.tsx 移過來)
// interface BlockConfig { // Removed, now imported from public/config/home
//   name: string;
//   version: string;
//   dataKey: string;
//   navigationDataKey?: string;
// }

interface BlockRendererProps {
  block: BlockConfig;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  const Component = BlockComponentMap[block.name];
  let dataToPass: BlockData | ContentSection | undefined;

  if (block.sectionData) {
    dataToPass = block.sectionData;
  } else if (block.dataKey) {
    dataToPass = BlockDataMap[block.dataKey];
  }

  if (!Component || !dataToPass) { // Updated check
    console.error(`元件或資料未找到: Component=${block.name}, Data=${block.dataKey || 'sectionData'}`); // Updated error message
    return (
      <div className="bg-yellow-100 text-yellow-700 p-4 my-4 mx-auto max-w-4xl rounded-md">
        警告：元件 &quot;{block.name}&quot; 或資料 &quot;{block.dataKey || 'sectionData'}&quot; 未在 BlockRenderer 中正確配置。
      </div>
    );
  }

  const props: BlockComponentProps = {
    version: block.version,
    data: dataToPass, // Pass dataToPass
  };

  return <Component {...props} />;
};

export default BlockRenderer;
