import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 導入 Link 元件
import BaseCard from '@/components/shared/BaseCard';

// 定義 Product 介面，包含更多欄位
interface Product {
  id: string;
  name: string;
  model?: string; // 型號
  description?: string; // 簡述
  price: string; // 價格或詢價按鈕文字
  imageUrl: string;
  category?: string[]; // 分類標籤
  link?: string; // 更多按鈕的連結
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, model, description, price, imageUrl, category, link } = product;

  return (
    <BaseCard className="flex flex-col">
      {/* 圖片、標題和描述包裹在一個 Link 中 */}
      {link ? (
        <Link href={link} passHref>
          <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-t-lg cursor-pointer">
            <Image 
              src={imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Link>
      ) : (
        <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-t-lg">
          <Image 
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className="p-4 flex flex-col flex-grow">
        {link ? (
          <Link href={link} passHref>
            <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors duration-200">{name}</h3>
          </Link>
        ) : (
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{name}</h3>
        )}
        
        {model && <p className="text-sm text-gray-500 mb-2">型號: {model}</p>}
        {description && <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>}
        
        <div className="flex flex-wrap gap-1 mb-3">
          {category?.map((cat, index) => (
            <Link key={index} href={`/category/${cat}`} passHref>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full cursor-pointer hover:bg-blue-200 transition-colors duration-200">
                {cat}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-xl font-bold text-indigo-600">{price}</p>
          {link && (
            <Link 
              href={link}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              更多 &rarr;
            </Link>
          )}
        </div>
      </div>
    </BaseCard>
  );
};

export default ProductCard;