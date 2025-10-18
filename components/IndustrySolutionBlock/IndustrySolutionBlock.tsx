"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MainIndustrySolutions, IndustrySolutionItem } from '@/data/industrySolutions';
import { NavigationContent } from '@/data/navigation';
import DynamicIcon from '@/components/shared/DynamicIcon';

interface IndustrySolutionBlockProps {
  version?: string;
  data: typeof MainIndustrySolutions; // Updated type
  navigationData?: NavigationContent;
}

const IndustrySolutionBlock: React.FC<IndustrySolutionBlockProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data.items[activeIndex];

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
