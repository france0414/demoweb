import React from 'react';
import NewsCard from './NewsCard';
import { ContentSection } from '@/app/types/content'; // New import

interface NewsListProps {
  data: ContentSection; // Updated data type
}

const NewsList: React.FC<NewsListProps> = ({ data }) => {
  const { name, items } = data; // Use name for title, items for articles

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{name}</h2>
      <ul className="divide-y divide-gray-200">
        {items.map(item => (
          <li key={item.id} className="py-4">
            {/* 在列表模式下，NewsCard 可能會顯示為一個簡潔的列表項 */}
            <NewsCard item={item} /> // Pass item instead of article
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;