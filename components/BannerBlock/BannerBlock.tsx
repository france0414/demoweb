'use client';

import React from 'react';
import Image from 'next/image';
import SwiperWrapper from '@/components/shared/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import { BannerItem } from '@/data/banners'; // 匯入 BannerItem 類型
import { NavigationContent } from '@/data/navigation';

const getContentPositionClasses = (position?: BannerItem['contentPosition']) => {
  switch (position) {
    case 'top-left': return 'items-start justify-start text-left';
    case 'top-center': return 'items-start justify-start text-center';
    case 'top-right': return 'items-start justify-start text-right';
    case 'middle-left': return 'items-center  justify-center text-left';
    case 'center': return 'items-center justify-center text-center';
    case 'middle-right': return 'items-center justify-center text-right';
    case 'bottom-left': return 'items-end justify-end text-left';
    case 'bottom-center': return 'items-end justify-end text-center';
    case 'bottom-right': return 'items-end justify-end text-right';
    default: return 'items-center justify-center text-center'; // Default to center
  }
};

// Statically define possible overlay classes for Tailwind JIT to pick up
const TAILWIND_OVERLAY_CLASSES = [
  'bg-black/0', 'bg-black/10', 'bg-black/20', 'bg-black/30', 'bg-black/40', 'bg-black/50',
  'bg-black/60', 'bg-black/70', 'bg-black/80', 'bg-black/90', 'bg-black/100',
  'bg-white/0', 'bg-white/10', 'bg-white/20', 'bg-white/30', 'bg-white/40', 'bg-white/50',
  'bg-white/60', 'bg-white/70', 'bg-white/80', 'bg-white/90', 'bg-white/100',
  'bg-blue-600/0', 'bg-blue-600/10', 'bg-blue-600/20', 'bg-blue-600/30', 'bg-blue-600/40', 'bg-blue-600/50',
  'bg-blue-600/60', 'bg-blue-600/70', 'bg-blue-600/80', 'bg-blue-600/90', 'bg-blue-600/100',
  // Add other colors as needed
];

interface BannerBlockProps {
  version?: string;
  data: BannerItem[]; // 期望接收 BannerItem 陣列
  navigationData?: NavigationContent;
}

const BannerBlock: React.FC<BannerBlockProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return null; // 如果沒有資料，則不渲染任何內容
  }

  const renderBannerItem = (item: BannerItem, index: number) => {
    const isFirstSlide = index === 0;
    const overlayClass = item.hasOverlay && item.overlayColor && item.overlayOpacity !== undefined
      ? `bg-${item.overlayColor}/${item.overlayOpacity}`
      : '';

    if (item.mode === 'background') {
      return (
        <div className="relative w-full h-[400px] md:h-[600px] text-white">
          {/* PC Image */}
          <Image
            src={item.imageUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="z-0 hidden md:block"
            sizes="100vw"
            priority={isFirstSlide}
          />
          {/* Mobile Image */}
          <Image
            src={item.mobileImageUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="z-0 md:hidden"
            sizes="100vw"
            priority={isFirstSlide}
          />
          {item.hasOverlay && (
            <div className={`absolute inset-0 ${overlayClass} z-10`}></div>
          )}
          <div className={`absolute inset-0 z-20 flex flex-col p-4 md:p-10 ${getContentPositionClasses(item.contentPosition)}`}>
            <div className="relative z-20 w-full max-w-7xl mx-auto p-4 md:p-6 rounded-lg">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg md:text-xl mb-6">{item.description}</p>
              <a
                href={item.ctaLink}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                {item.ctaText}
              </a>
            </div>
          </div>
        </div>
      );
    } else { // item.mode === 'image'
      return (
        <div className="relative w-full text-white">
          {/* PC Image */}
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={item.width}
            height={item.height}
            objectFit="contain"
            className="z-0 hidden md:block max-w-full h-auto mx-auto"
            sizes="100vw"
            priority={isFirstSlide}
          />
          {/* Mobile Image */}
          <Image
            src={item.mobileImageUrl}
            alt={item.title}
            width={item.mobileWidth}
            height={item.mobileHeight}
            objectFit="contain"
            className="z-0 md:hidden max-w-full h-auto mx-auto"
            sizes="100vw"
            priority={isFirstSlide}
          />
          {item.hasOverlay && (
            <div className={`absolute inset-0 ${overlayClass} z-10`}></div>
          )}
          <div className={`absolute inset-0 z-20 flex flex-col p-4 md:p-10 ${getContentPositionClasses(item.contentPosition)}`}>
            <div className="relative z-20 w-full max-w-7xl mx-auto p-4 md:p-6 rounded-lg">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg md:text-xl mb-6">{item.description}</p>
              <a
                href={item.ctaLink}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                {item.ctaText}
              </a>
            </div>
          </div>
        </div>
      );
    }
  };

  // Carousel version
  const hasBackgroundMode = data.some(item => item.mode === 'background');
  const swiperHeightClass = hasBackgroundMode ? 'h-[400px] md:h-[600px]' : 'h-auto min-h-[400px]';

  return (
    <section className="relative w-full overflow-hidden">
      <SwiperWrapper
        spaceBetween={0} // 橫幅通常沒有間距
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 100000, disableOnInteraction: false }} // 自動播放設定
        className={swiperHeightClass}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            {renderBannerItem(item, index)}
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </section>
  );
};

export default BannerBlock;
