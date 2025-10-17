'use client';

import React from 'react';
import Image from 'next/image';
import SwiperWrapper from '@/components/shared/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import { BannerItem } from '@/data/banners'; // 匯入 BannerItem 類型
import { NavigationContent } from '@/data/navigation';

// 為了自動播放，需要匯入 Autoplay 模組
import { Autoplay } from 'swiper/modules';

interface BannerBlockProps {
  version?: string;
  data: BannerItem[]; // 期望接收 BannerItem 陣列
  navigationData?: NavigationContent;
}

const BannerBlock: React.FC<BannerBlockProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return null; // 如果沒有資料，則不渲染任何內容
  }

  const renderBannerItem = (item: BannerItem) => (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center text-white">
      <Image
        src={item.imageUrl}
        alt={item.title}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center p-4 max-w-3xl">
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
  );

  // Carousel version
  return (
    <section className="relative w-full overflow-hidden">
      <SwiperWrapper
        modules={[Autoplay]} // 啟用自動播放模組
        spaceBetween={0} // 橫幅通常沒有間距
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // 自動播放設定
        className="h-[400px] md:h-[600px]"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderBannerItem(item)}
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </section>
  );
};

export default BannerBlock;
