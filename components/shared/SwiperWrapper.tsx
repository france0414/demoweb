'use client';

import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperOptions } from 'swiper/types';

import { Autoplay, EffectFade } from 'swiper/modules'; // Import EffectFade
import 'swiper/css/effect-fade'; // Import fade effect css

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
  effect?: 'slide' | 'fade'; // Add effect prop
  speed?: number; // New prop for transition duration
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
  effect = 'slide', // Default effect to slide
  speed, // Destructure speed prop
}) => {
  const swiperModules = [...modules];
  if (effect === 'fade' && !swiperModules.includes(EffectFade)) {
    swiperModules.push(EffectFade);
  }

  return (
    <Swiper
      modules={swiperModules}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination}
      loop={loop}
      breakpoints={breakpoints}
      className={className}
      autoplay={autoplay} // Pass autoplay prop to Swiper
      effect={effect === 'fade' ? 'fade' : undefined} // Apply fade effect
      fadeEffect={effect === 'fade' ? { crossFade: true } : undefined} // Crossfade for fade effect
      speed={speed} // Pass speed prop to Swiper
    >
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
