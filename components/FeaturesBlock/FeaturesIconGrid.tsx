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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature: FeatureItem) => (
            <div key={feature.id} className="bg-white p-6 gap-3 rounded-lg shadow-md flex  items-center ">
              <div className="flex-shrink-0 p-3 rounded-full bg-indigo-100">
                  {feature.iconName && <DynamicIcon iconName={feature.iconName} className="w-10 h-10 text-indigo-600" />}
                  {feature.imageUrl && <img src={feature.imageUrl} alt={feature.title} className="w-10 h-10 rounded-full object-cover" />}
              </div>
               <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default FeaturesIconGrid;