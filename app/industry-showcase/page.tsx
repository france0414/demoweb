
// app/industry-showcase/page.tsx

import React from 'react';
import IndustrySolutionBlock from '@/components/IndustrySolutionBlock/IndustrySolutionBlock';
import { MainIndustrySolutions } from '@/data/industrySolutions';
import CodeAccordion from '@/components/shared/CodeAccordion';

const IndustryShowcasePage = () => {

  const usageCode = `
import IndustrySolutionBlock from '@/components/IndustrySolutionBlock/IndustrySolutionBlock';
import { MainIndustrySolutions } from '@/data/industrySolutions';

// Default, full-screen interactive version
<IndustrySolutionBlock version="default" data={MainIndustrySolutions} />

// New tabs version
<IndustrySolutionBlock version="tabs" data={MainIndustrySolutions} />
  `;

  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Industry Solutions Showcase
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Displaying the same data with different component versions.
          </p>
        </div>

        {/* Showcase 1: Tabs Version */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Version: Tabs</h2>
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <IndustrySolutionBlock version="tabs" data={MainIndustrySolutions} tabInteraction="hover" />
          </div>
        </div>

        {/* Showcase 3: Carousel Version */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Version: Carousel</h2>
          <div className="p-0 bg-white rounded-xl shadow-lg overflow-hidden">
            <IndustrySolutionBlock version="carousel" data={MainIndustrySolutions} />
          </div>
        </div>

        {/* Code Display */}
        <div className="my-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Usage Code</h2>
            <CodeAccordion title="Show Example Code" code={usageCode} />
        </div>

      </main>

      {/* Showcase 2: Default Fullscreen Version */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Version: Default (Fullscreen Interactive)</h2>
        <IndustrySolutionBlock version="default" data={MainIndustrySolutions} />
      </div>

    </div>
  );
};

export default IndustryShowcasePage;
