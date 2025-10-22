'use client';

import React from 'react';
import SwiperWrapper from '@/components/shared/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
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

interface NewsCarouselProps {
  data: NewsData;
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ data }) => {
  const { title, articles } = data;

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      <SwiperWrapper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id} className="h-auto !flex flex-col">
            <NewsCard article={article} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </section>
  );
};

export default NewsCarousel;