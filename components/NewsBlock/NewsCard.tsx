import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 導入 Link 元件
import BaseCard from '@/components/shared/BaseCard';

// 定義 Article 介面，包含更多欄位
interface Article {
  id: number;
  title: string;
  summary: string;
  imageUrl?: string; // 圖片
  date?: string; // 日期
  category?: string[]; // 分類標籤
  link?: string; // 更多按鈕的連結
}

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const { title, summary, imageUrl, date, category, link } = article;

  return (
    <BaseCard className="flex flex-col">
      {/* 圖片、標題和簡述包裹在一個 Link 中 */}
      {link ? (
        <Link href={link} passHref>
          {imageUrl && (
            <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-t-lg cursor-pointer">
              <Image 
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </Link>
      ) : (
        imageUrl && (
          <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-t-lg">
            <Image 
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )
      )}

      <div className="p-4 flex flex-col flex-grow">
        {link ? (
          <Link href={link} passHref>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors duration-200">{title}</h3>
          </Link>
        ) : (
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        )}
        
        {date && <p className="text-sm text-gray-500 mb-2">{date}</p>}
        
        {link ? (
          <Link href={link} passHref>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3 cursor-pointer hover:text-gray-800 transition-colors duration-200">{summary}</p>
          </Link>
        ) : (
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">{summary}</p>
        )}
        
        <div className="flex flex-wrap gap-1 mb-3">
          {category?.map((cat, index) => (
            <Link key={index} href={`/news/category/${cat}`} passHref>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full cursor-pointer hover:bg-green-200 transition-colors duration-200">
                {cat}
              </span>
            </Link>
          ))}
        </div>

        {link && (
          <div className="mt-auto pt-2">
            <Link 
              href={link}
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