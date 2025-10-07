'use client';

import React from 'react';
import SwiperWrapper from '@/components/shared/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

// --- 介面定義 ---
interface Product {
  id: string;
  name: string;
  model?: string;
  description?: string;
  price: string;
  imageUrl: string;
  category?: string[];
  link?: string;
}

interface ProductListData {
  title: string;
  products: Product[];
}

interface ProductCarouselProps {
  data: ProductListData;
}
// ---------------------------

const ProductCarousel: React.FC<ProductCarouselProps> = ({ data }) => {
  const { products } = data;

  return (
    <SwiperWrapper
      spaceBetween={24} 
      slidesPerView={1} 
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="h-auto !flex flex-col pb-4">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default ProductCarousel;