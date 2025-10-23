'use client';

import React from 'react';
import SwiperWrapper from '@/components/shared/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import { ProductCard } from './ProductCard'; // Changed to named import

import { Product } from '@/app/types/entities'; // Import global Product interface

// --- 介面定義 ---
// Updated to use global Product interface
interface ProductListData {
  title: string;
  products: Product[]; // Now expects global Product type
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
          <ProductCard product={product} layout="vertical" /> {/* Added layout prop */}
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default ProductCarousel;