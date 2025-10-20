
// components/TabsBlock/TabsBlock.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TabItem } from '@/data/tabs';
import DynamicIcon from '@/components/shared/DynamicIcon';

interface TabsBlockProps {
  tabs: TabItem[];
  position?: 'top' | 'left';
  interaction?: 'click' | 'hover';
}

const TabsBlock: React.FC<TabsBlockProps> = ({ 
  tabs, 
  position = 'top', 
  interaction = 'click' 
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const tabListClasses = [
    'flex',
    'bg-white/50 backdrop-blur-sm rounded-lg p-1',
    position === 'left' ? 'flex-row md:flex-col' : 'flex-row',
    'overflow-x-auto whitespace-nowrap no-scrollbar' // 啟用滾動但隱藏滾動條
  ].join(' ');

  const tabButtonClasses = (id: string) => [
    'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 outline-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500',
    activeTab === id 
      ? 'bg-white text-indigo-700 shadow-md' 
      : 'text-gray-600 hover:bg-white/70 hover:text-indigo-600'
  ].join(' ');

  const mainContainerClasses = [
    'flex w-full gap-6 md:gap-8',
    // 手機版永遠是 top (flex-col), 桌面版根據 props 決定
    'flex-col',
    position === 'left' ? 'md:flex-row' : 'md:flex-col',
  ].join(' ');

  if (!isMounted) {
    return null; // 或者可以返回一個 loading skeleton
  }

  return (
    <div className={mainContainerClasses}>
      {/* Tab Navigation */}
      <div className={position === 'left' ? 'md:w-1/4' : 'w-full'}>
        <div className={tabListClasses}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tab-content-${tab.id}`}
              onClick={() => interaction === 'click' && handleTabChange(tab.id)}
              onMouseEnter={() => interaction === 'hover' && handleTabChange(tab.id)}
              className={tabButtonClasses(tab.id)}
            >
              <DynamicIcon iconName={tab.iconName} imageUrl={tab.iconUrl} className="w-5 h-5 flex-shrink-0" />
              <span className="flex-shrink-0">{tab.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className={position === 'left' ? 'md:w-3/4' : 'w-full'}>
        {activeTabData && (
          <div 
            key={activeTabData.id} // Add key to re-trigger animation
            id={`tab-content-${activeTabData.id}`}
            role="tabpanel"
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-opacity duration-500 animate-fade-in"
          >
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src={activeTabData.content.imageUrl}
                alt={activeTabData.content.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{activeTabData.content.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{activeTabData.content.description}</p>
              <Link 
                href={activeTabData.content.link.href}
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200 group"
              >
                {activeTabData.content.link.text}
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsBlock;

// Add this to your globals.css for the animation
/*
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.no-scrollbar::-webkit-scrollbar {
    display: none; 
}

.no-scrollbar {
    -ms-overflow-style: none; 
    scrollbar-width: none;  
}
*/
