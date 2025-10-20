"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MainIndustrySolutions, IndustrySolutionItem } from '@/data/industrySolutions';
import { NavigationContent } from '@/data/navigation';
import DynamicIcon from '@/components/shared/DynamicIcon';
import TabsBlock from '@/components/TabsBlock/TabsBlock'; // 導入 TabsBlock
import { TabItem } from '@/data/tabs'; // 導入 TabsBlock 需要的資料類型
import SwiperWrapper from '@/components/shared/SwiperWrapper'; // 導入 SwiperWrapper
import { SwiperSlide } from 'swiper/react'; // 導入 SwiperSlide

interface IndustrySolutionBlockProps {
  version?: 'default' | 'tabs' | 'carousel'; // 新增 'carousel'
  tabInteraction?: 'click' | 'hover'; // 新增 tab 互動模式屬性
  data: typeof MainIndustrySolutions;
  navigationData?: NavigationContent;
}

// 資料轉換函式
const transformToTabData = (data: typeof MainIndustrySolutions): TabItem[] => {
  return data.items.map(item => ({
    id: item.id,
    title: item.title,
    iconName: item.iconName,
    content: {
      title: item.title,
      description: item.description,
      imageUrl: item.largeImageUrl,
      link: {
        text: '了解詳情',
        href: item.ctaHref,
      },
    },
  }));
};


const IndustrySolutionBlock: React.FC<IndustrySolutionBlockProps> = ({
  data,
  version = 'default',
  tabInteraction = 'click' // 設定預設值
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data.items[activeIndex];

  // 如果 version 是 'tabs'，渲染 TabsBlock
  if (version === 'tabs') {
    const tabData = transformToTabData(data);
    return (
      <div className="container mx-auto px-4 py-12">
        <TabsBlock tabs={tabData} position="left" interaction={tabInteraction} />
      </div>
    );
  }

  // 如果 version 是 'carousel'，渲染 SwiperWrapper
  if (version === 'carousel') {
    return (
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {data.mobileTitle || "我們的產業解決方案"}
          </h2>
          <SwiperWrapper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade" // Use fade effect for a grander feel
            speed={800}
            className="h-[500px] md:h-[600px] lg:h-[700px] rounded-xl shadow-2xl"
          >
            {data.items.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="relative w-full h-full bg-cover bg-center flex items-center p-8 rounded-xl overflow-hidden"
                  style={{ backgroundImage: `url(${item.largeImageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                  <div className="relative z-10 text-white max-w-2xl text-center mx-auto">
                    <DynamicIcon iconName={item.iconName} className="w-12 h-12 mb-4 text-white mx-auto" />
                    <h3 className="text-4xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg mb-6 line-clamp-3">{item.description}</p>
                    <Link href={item.ctaHref} className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors duration-200 group">
                      了解更多
                      <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperWrapper>
        </div>
      </div>
    );
  }

  // --- 以下是 version 'default' 的原始程式碼 ---
  return (
    <div>
        {/* Interactive Fullscreen Version (Desktop) */}
        <div className="hidden lg:block">
            {/* 這是整個互動區塊的主容器：相對定位 + 全屏高度 */}
            <div className="relative w-full h-screen text-white flex flex-col items-center justify-center p-8">

                {/* 1. 背景圖片與遮罩區塊 */}
                {/* 使用絕對定位，讓所有圖片疊加，並根據 activeIndex 顯示 */}
                <div className="absolute inset-0 w-full h-full">
                    {data.items.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${item.largeImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        />
                    ))}
                    {/* 遮罩 */}
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>

                {/* 2. 內容區塊 (標題, 描述, 按鈕列表, CTA) - 放在絕對定位的圖片上層 */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto">

                    {/* 標題與描述 */}
                    <h2 className="text-5xl font-extrabold mb-4 text-center">
                        {activeItem.title}
                    </h2>
                    <p className="text-xl mb-12 max-w-3xl text-center">
                        {activeItem.description}
                    </p>

                    {/* 按鈕列表 (Hover 區) */}
                    <div className="flex flex-wrap justify-center space-x-4">
                        {data.items.map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform ${index === activeIndex ? 'bg-blue-600 scale-105 shadow-2xl' : 'bg-white/20 hover:bg-blue-600'}`}
                            >
                                <div className="flex flex-col items-center">
                                    <DynamicIcon iconName={item.iconName} className="w-10 h-10 mb-2 text-white" />
                                    <span className="text-base font-semibold">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA 按鈕 */}
                    <Link href={activeItem.ctaHref} className="mt-12 px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold text-lg transition-transform duration-300 hover:scale-110 shadow-lg">
                        {data.ctaText}
                    </Link>
                </div>
            </div>
        </div>

        {/* Card Grid Version (Mobile/Tablet) */}
        <div className="block lg:hidden">
            <div className="container mx-auto p-4 py-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{data.mobileTitle}</h2>
                <div className="grid grid-cols-1 gap-6">
                    {data.items.map((item, index) => (
                        <Link key={index} href={item.ctaHref} passHref>
                            <div className="relative h-72 rounded-xl shadow-xl overflow-hidden cursor-pointer group flex items-end p-6 transition-transform duration-300 hover:scale-[1.02]">
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${item.largeImageUrl})` }}
                                />
                                {/* 遮罩以確保文字可讀性 */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />

                                {/* 文字內容區塊 */}
                                <div className="relative z-10 text-white">
                                    <DynamicIcon iconName={item.iconName} className="w-8 h-8 mb-2 text-white" />
                                    <h3 className="text-3xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-lg opacity-90">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};


export default IndustrySolutionBlock;
