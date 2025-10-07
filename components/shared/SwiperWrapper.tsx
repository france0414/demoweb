'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperWrapperProps {
  children: React.ReactNode;
  // 可以根據需要添加更多 Swiper 的 props
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  breakpoints?: { [key: string]: any };
  navigation?: boolean;
  pagination?: boolean | { clickable: true };
  loop?: boolean;
  className?: string;
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
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination}
      loop={loop}
      breakpoints={breakpoints}
      className={className}
    >
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
