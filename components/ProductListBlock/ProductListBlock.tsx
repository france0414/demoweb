'use client';

import React from 'react';
import ProductGrid from './ProductGrid';
import ProductCarousel from './ProductCarousel';

// --- 介面定義 ---
interface Product {
  id: number | string;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductListData {
  title: string;
  products: Product[];
}

interface ProductListBlockProps {
  version: 'grid' | 'carousel';
  data: ProductListData;
}
// ---------------------------

const ProductListBlock: React.FC<ProductListBlockProps> = ({ version, data }) => {
  const { title } = data;

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-10">{title}</h2>
        
        {version === 'grid' ? (
          <ProductGrid data={data} />
        ) : (
          <ProductCarousel data={data} />
        )}
      </div>
    </section>
  );
};

export default ProductListBlock;
