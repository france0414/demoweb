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

interface NewsListProps {
  data: NewsData;
}

const NewsList: React.FC<NewsListProps> = ({ data }) => {
  const { title, articles } = data;

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      <ul className="divide-y divide-gray-200">
        {articles.map(article => (
          <li key={article.id} className="py-4">
            {/* 在列表模式下，NewsCard 可能會顯示為一個簡潔的列表項 */}
            <NewsCard article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;