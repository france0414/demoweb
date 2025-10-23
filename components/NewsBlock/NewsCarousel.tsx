import React from 'react';
import SwiperWrapper from '@/components/shared/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import NewsCard from './NewsCard';
import { ContentSection } from '@/app/types/content'; // New import

interface NewsCarouselProps {
  data: ContentSection; // Updated data type
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ data }) => {
  const { name, items } = data; // Use name for title, items for articles

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{name}</h2>
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
        {items.map((item) => (
          <SwiperSlide key={item.id} className="h-auto !flex flex-col">
            <NewsCard item={item} /> 
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </section>
  );
};

export default NewsCarousel;