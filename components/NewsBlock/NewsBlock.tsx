import React from 'react';
import NewsCardGrid from './NewsCardGrid';
import NewsList from './NewsList';
import NewsCarousel from './NewsCarousel';

interface Article {
  id: number;
  title: string;
  summary: string;
}

interface NewsData {
  title: string;
  articles: Article[];
}

interface NewsBlockProps {
  version: 'grid' | 'list' | 'carousel'; // <-- 更新 version 類型
  data: NewsData;
}

const NewsBlock: React.FC<NewsBlockProps> = ({ version, data }) => {
  switch (version) {
    case 'grid':
      return <NewsCardGrid data={data} />;
    case 'list':
      return <NewsList data={data} />;
    case 'carousel': // <-- 新增 carousel 邏輯
      return <NewsCarousel data={data} />;
    default:
      return (
        <div className="bg-red-100 text-red-700 p-4 my-8 mx-auto max-w-4xl rounded-md">
          錯誤：NewsBlock 不支援 "{version}" 這個版型。
        </div>
      );
  }
};

export default NewsBlock;
