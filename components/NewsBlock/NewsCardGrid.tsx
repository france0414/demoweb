import React from 'react';
import NewsCard from './NewsCard';
import { ContentSection } from '@/app/types/content'; // New import

interface NewsCardGridProps {
  data: ContentSection; // Updated data type
}

const NewsCardGrid: React.FC<NewsCardGridProps> = ({ data }) => {
  const { name, items } = data; // Use name for title, items for articles

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <NewsCard key={item.id} item={item} /> // Pass item instead of article
        ))}
      </div>
    </section>
  );
};

export default NewsCardGrid;