'use client';

import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperOptions } from 'swiper/types';

import { Autoplay } from 'swiper/modules';

interface SwiperWrapperProps {
  children: React.ReactNode;
  // 可以根據需要添加更多 Swiper 的 props
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  breakpoints?: { [width: number]: SwiperOptions; [ratio: string]: SwiperOptions; };
  navigation?: boolean;
  pagination?: boolean | { clickable: true };
  loop?: boolean;
  className?: string;
  modules?: any[]; // Add modules prop
  autoplay?: any; // Add autoplay prop
}

const SwiperWrapper: React.FC<SwiperWrapperProps> = ({
  children,
  spaceBetween = 24,
  slidesPerView = 1,
  breakpoints = {},
  navigation = true,
  pagination = { clickable: true },
  loop = true,
  className = "!pb-10",
  modules = [Navigation, Pagination, Autoplay], // Default modules including Autoplay
  autoplay, // Destructure autoplay prop
}) => {
  return (
    <Swiper
      modules={modules}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination}
      loop={loop}
      breakpoints={breakpoints}
      className={className}
      autoplay={autoplay} // Pass autoplay prop to Swiper
    >
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
