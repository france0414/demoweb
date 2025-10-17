"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IndustrySolutionContent, IndustryItem } from '@/data/industrySolutions';
import DynamicIcon from '@/components/shared/DynamicIcon';

interface IndustrySolutionBlockProps {
  data: IndustrySolutionContent;
}

const IndustrySolutionBlock: React.FC<IndustrySolutionBlockProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data.items[activeIndex];

  return (
    <div>
      {/* Interactive Fullscreen Version (Desktop) */}
      <div className="hidden lg:block">
        <div className="relative w-full h-screen text-white">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${item.largeImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          <div className="relative z-10 flex flex-col justify-center items-center h-full p-8">
            <h2 className="text-4xl font-bold mb-4">{activeItem.title}</h2>
            <p className="text-lg mb-8 max-w-2xl text-center">{activeItem.description}</p>
            
            <div className="flex space-x-4">
              {data.items.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 ${index === activeIndex ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}
                >
                  <div className="flex flex-col items-center">
                    <DynamicIcon iconName={item.iconName} className="w-10 h-10 mb-2" />
                    <span className="text-sm font-semibold">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href={activeItem.ctaHref} passHref>
              <button className="mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-transform duration-300 hover:scale-105">
                了解更多
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card Grid Version (Mobile/Tablet) */}
      <div className="block lg:hidden">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 gap-4">
            {data.items.map((item, index) => (
              <Link key={index} href={item.ctaHref} passHref>
                <div className="relative h-64 rounded-lg shadow-lg overflow-hidden cursor-pointer group">
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.largeImageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-white text-center">
                    <DynamicIcon iconName={item.iconName} className="w-10 h-10 mb-3" />
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-base">{item.description}</p>
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
