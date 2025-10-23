import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BaseCard from '@/components/shared/BaseCard';
import DynamicIcon from '@/components/shared/DynamicIcon'; // New import
import { ContentItem } from '@/app/types/content'; // New import
import { NewsSection } from '@/data/news-content'; // New import for slug

interface NewsCardProps {
  item: ContentItem; // Changed from article to item
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const { title, shortDescription, image, publishDate, categoryId, icon } = item;
  const itemLink = `/${NewsSection.slug}/${item.slug}`; // Simplified link for now

  return (
    <BaseCard className="flex flex-col">
      {itemLink ? (
        <Link href={itemLink} passHref>
          {image && (
            <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-t-lg cursor-pointer">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </Link>
      ) : (
        image && (
          <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-t-lg">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )
      )}

      <div className="p-4 flex flex-col flex-grow">
        {itemLink ? (
          <Link href={itemLink} passHref>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors duration-200">
              {icon && <DynamicIcon name={icon} className="inline-block mr-2" />} {/* Render icon */}
              {title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {icon && <DynamicIcon name={icon} className="inline-block mr-2" />} {/* Render icon */}
              {title}
          </h3>
        )}

        {publishDate && <p className="text-sm text-gray-500 mb-2">{publishDate}</p>}

        {itemLink ? (
          <Link href={itemLink} passHref>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3 cursor-pointer hover:text-gray-800 transition-colors duration-200">{shortDescription}</p>
          </Link>
        ) : (
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">{shortDescription}</p>
        )}

        <div className="flex flex-wrap gap-1 mb-3">
          {categoryId && ( // Display category if available
            <Link href={`/${NewsSection.slug}/${NewsSection.categories.find(cat => cat.id === categoryId)?.slug}`} passHref>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full cursor-pointer hover:bg-green-200 transition-colors duration-200">
                {NewsSection.categories.find(cat => cat.id === categoryId)?.name}
              </span>
            </Link>
          )}
        </div>

        {itemLink && (
          <div className="mt-auto pt-2">
            <Link
              href={itemLink}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              閱讀更多 &rarr;
            </Link>
          </div>
        )}
      </div>
    </BaseCard>
  );
};

export default NewsCard;