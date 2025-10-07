'use client';

import React from 'react';

// 匯入所有可能會用到的 "積木" 元件
import HeaderBlock from '@/components/HeaderBlock/HeaderBlock';
import NewsBlock from '@/components/NewsBlock/NewsBlock';
import AboutBlock from '@/components/AboutBlock/AboutBlock';
import ProductListBlock from '@/components/ProductListBlock/ProductListBlock';
import BannerBlock from '@/components/BannerBlock/BannerBlock';
import FeaturesBlock from '@/components/FeaturesBlock/FeaturesBlock'; // <-- 新增 FeaturesBlock

// 匯入所有可能會用到的資料來源
import * as HeaderData from '@/data/headerContent';
import * as NewsData from '@/data/news';
import * as AboutData from '@/data/about';
import * as ProductData from '@/data/products';
import * as BannerData from '@/data/banners';
import * as FeaturesData from '@/data/features'; // <-- 新增 FeaturesData

// 元件對應表
const BlockComponentMap: { [key: string]: React.FC<any> } = {
  HeaderBlock: HeaderBlock,
  NewsBlock: NewsBlock,
  AboutBlock: AboutBlock,
  ProductListBlock: ProductListBlock,
  BannerBlock: BannerBlock,
  FeaturesBlock: FeaturesBlock, // <-- 新增 FeaturesBlock
};

// 資料對應表
const BlockDataMap: { [key: string]: any } = {
  defaultHeaderData: HeaderData.defaultHeaderData,
  MainNewsContent: NewsData.MainNewsContent,
  MainAboutContent: AboutData.MainAboutContent,
  MainProductContent: ProductData.MainProductContent,
  MainBannerContent: BannerData.MainBannerContent,
  MainFeaturesContent: FeaturesData.MainFeaturesContent, // <-- 新增 MainFeaturesContent
  SideBySideFeaturesContent: FeaturesData.SideBySideFeaturesContent, // ⬅️ 這個是新增的！
};

// BlockConfig 介面 (從 app/page.tsx 移過來)
interface BlockConfig {
  name: string;
  version: string;
  dataKey: string;
}

interface BlockRendererProps {
  block: BlockConfig;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  const Component = BlockComponentMap[block.name];
  const blockData = BlockDataMap[block.dataKey];

  if (!Component || !blockData) {
    console.error(`元件或資料未找到: Component=${block.name}, Data=${block.dataKey}`);
    return (
      <div className="bg-yellow-100 text-yellow-700 p-4 my-4 mx-auto max-w-4xl rounded-md">
        警告：元件 "{block.name}" 或資料 "{block.dataKey}" 未在 BlockRenderer 中正確配置。
      </div>
    );
  }

  return (
    <Component
      version={block.version}
      data={blockData}
    />
  );
};

export default BlockRenderer;
