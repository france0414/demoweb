import React from 'react';
import DynamicIcon from '@/components/shared/DynamicIcon';
import { FeaturesContent, FeatureItem } from '@/data/features';
import FeaturesSideBySide from './FeaturesSideBySide';
import FeaturesIconGrid from './FeaturesIconGrid'; // <-- 新增 FeaturesIconGrid 匯入

interface FeaturesBlockProps {
  version: 'default' | 'side-by-side' | 'icon-grid'; // <-- 更新 version 類型
  data: FeaturesContent;
}

const FeaturesBlock: React.FC<FeaturesBlockProps> = ({ version, data }) => {
  const { title, subtitle, features } = data;

  switch (version) {
    case 'default':
      return (
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600 mb-12">{subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature: FeatureItem) => (
                <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-indigo-100 mb-4"> {/* Circular background */}
                    <DynamicIcon iconName={feature.iconName} imageUrl={feature.imageUrl} className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    case 'side-by-side':
      return <FeaturesSideBySide data={data} />;
    case 'icon-grid': // <-- 新增 icon-grid 邏輯
      return <FeaturesIconGrid data={data} />;
    default:
      return (
        <div className="bg-red-100 text-red-700 p-4 my-8 mx-auto max-w-4xl rounded-md">
          錯誤：FeaturesBlock 不支援 "{version}" 這個版型。
        </div>
      );
  }
};

export default FeaturesBlock;
