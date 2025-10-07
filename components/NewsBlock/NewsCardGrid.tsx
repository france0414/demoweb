import React from 'react';
import NewsCard from './NewsCard';

interface Article {
  id: number;
  title: string;
  summary: string;
  imageUrl?: string;
  date?: string;
  category?: string[];
  link?: string;
}

interface NewsData {
  title: string;
  articles: Article[];
}

interface NewsCardGridProps {
  data: NewsData;
}

const NewsCardGrid: React.FC<NewsCardGridProps> = ({ data }) => {
  const { title, articles } = data;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsCardGrid;