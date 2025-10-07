import React from 'react';
import DynamicIcon from '@/components/shared/DynamicIcon';
import { FeaturesContent, FeatureItem } from '@/data/features';

interface FeaturesIconGridProps {
  data: FeaturesContent;
}

const FeaturesIconGrid: React.FC<FeaturesIconGridProps> = ({ data }) => {
  const { title, subtitle, features } = data;

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">{title}</h2>
        <p className="text-xl text-gray-600 text-center mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: FeatureItem) => (
            <div key={feature.id} className="flex items-start gap-4 p-6 rounded-lg shadow-md bg-gray-50">
              <div className="flex-shrink-0 p-3 rounded-full bg-indigo-100">
                <DynamicIcon iconName={feature.iconName} imageUrl={feature.imageUrl} className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesIconGrid;
