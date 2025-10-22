import React from 'react';
import DynamicIcon from '@/components/shared/DynamicIcon';
import { FeaturesContent, FeatureItem } from '@/data/features';
import Image from 'next/image'; // Import Next.js Image component

interface FeaturesSideBySideProps {
  data: FeaturesContent;
}

const FeaturesSideBySide: React.FC<FeaturesSideBySideProps> = ({ data }) => {
  const { title, subtitle, features, sideImage } = data;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">{title}</h2>
        <p className="text-xl text-gray-600 text-center mb-12">{subtitle}</p>

        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          {sideImage && (
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src={sideImage}
                alt="Feature illustration" // Alt text for the side image
                width={600} // Example width, adjust as needed
                height={400} // Example height, adjust as needed
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          )}

          <div className="lg:w-1/2 space-y-12">
            {features.map((feature: FeatureItem) => (
              <div key={feature.id} className="flex items-start gap-6">
                <div className="flex-shrink-0 p-3 rounded-full bg-indigo-100">
                  {/* Render DynamicIcon if iconName exists, otherwise render Image if imageUrl exists */}
                  {feature.iconName && <DynamicIcon iconName={feature.iconName} className="w-10 h-10 text-indigo-600" />}
                  {feature.imageUrl && <Image src={feature.imageUrl} alt={feature.title} width={40} height={40} className="rounded-full object-cover" />}
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
    </section>
  );
};

export default FeaturesSideBySide;
