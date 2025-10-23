'use client';

import Image from 'next/image';
import { Product } from '@/app/types/entities';
import { useInquiryCart } from '@/app/context/InquiryCartContext'; // Import the hook

interface ProductCardProps {
  product: Product;
  layout: 'vertical' | 'horizontal'; // 'vertical' for image top, text bottom; 'horizontal' for image left, text right
}

export function ProductCard({ product, layout }: ProductCardProps) {
  const isVertical = layout === 'vertical';
  const { addItem } = useInquiryCart(); // Use the inquiry cart hook

  const handleAddToInquiry = () => {
    addItem(product.id);
    alert(`${product.name} 已加入詢價車！`); // Simple feedback
  };

  return (
    <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} bg-white shadow-lg rounded-lg overflow-hidden h-full`}>
      <div className={`${isVertical ? 'w-full h-48' : 'w-1/3 h-auto'} relative flex-shrink-0`}>
        <Image
          src={product.images[0] || '/placeholder-product.jpg'} // Use first image or a placeholder
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className={`p-4 flex flex-col ${isVertical ? '' : 'w-2/3'}`}>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.shortDescription}</p>
        <div className="mt-auto flex flex-col sm:flex-row gap-2"> {/* Added flex for buttons */}
          <a
            href={`/product/${product.id}`} // Link to product detail page
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-300 text-center"
          >
            查看詳情
          </a>
          <button
            onClick={handleAddToInquiry}
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-300 text-center"
          >
            加入詢價車
          </button>
        </div>
      </div>
    </div>
  );
}