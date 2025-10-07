import React from 'react';
import DynamicIcon from '@/components/shared/DynamicIcon';
import { FeaturesContent, FeatureItem } from '@/data/features';

interface FeaturesSideBySideProps {
  data: FeaturesContent;
}

const FeaturesSideBySide: React.FC<FeaturesSideBySideProps> = ({ data }) => {
  const { title, subtitle, features } = data;

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">{title}</h2>
        <p className="text-xl text-gray-600 text-center mb-12">{subtitle}</p>

        <div className="space-y-12">
          {features.map((feature: FeatureItem) => (
            <div key={feature.id} className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 p-3 rounded-full bg-indigo-100">
                <DynamicIcon iconName={feature.iconName} imageUrl={feature.imageUrl} className="w-10 h-10 text-indigo-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSideBySide;
