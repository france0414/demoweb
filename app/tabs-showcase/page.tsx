
// app/tabs-showcase/page.tsx

import React from 'react';
import TabsBlock from '@/components/TabsBlock/TabsBlock';
import { tabsData } from '@/data/tabs';
import CodeAccordion from '@/components/shared/CodeAccordion';

const TabsShowcasePage = () => {
  const tabsBlockCode = `
import TabsBlock from '@/components/TabsBlock/TabsBlock';
import { tabsData } from '@/data/tabs';

// Left position, click interaction
<TabsBlock tabs={tabsData} position="left" interaction="click" />

// Top position, hover interaction
<TabsBlock tabs={tabsData} position="top" interaction="hover" />
  `;

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Tabs Component Showcase
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Demonstrating the versatile Tabs component with different layouts and interactions.
          </p>
        </div>

        {/* Showcase 1: Left Position */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Layout: Left, Interaction: Click</h2>
          <p className="text-gray-600 mb-6">Tabs are positioned on the left side. Content changes on click. On mobile, tabs will automatically move to the top.</p>
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <TabsBlock tabs={tabsData} position="left" interaction="click" />
          </div>
        </div>

        {/* Showcase 2: Top Position with Hover */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Layout: Top, Interaction: Hover</h2>
          <p className="text-gray-600 mb-6">Tabs are positioned on the top. Content changes on hover. The tab list is scrollable if it overflows.</p>
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <TabsBlock tabs={tabsData} position="top" interaction="hover" />
          </div>
        </div>

        {/* Code Display */}
        <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Implementation Code</h2>
            <CodeAccordion title="Show Example Code" code={tabsBlockCode} />
        </div>

      </main>
    </div>
  );
};

export default TabsShowcasePage;
