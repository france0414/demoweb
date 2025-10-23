import React from 'react';
import { ProductCard } from './ProductCard'; // Changed to named import
import { Product } from '@/app/types/entities'; // Import global Product interface

// --- 介面定義 ---
// Updated to use global Product interface
interface ProductListData {
  title: string;
  products: Product[];
}

interface ProductGridProps {
  data: ProductListData;
}
// ---------------------------

const ProductGrid: React.FC<ProductGridProps> = ({ data }) => {
  const { products } = data;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map(product => <ProductCard key={product.id} product={product} layout="vertical" />)} {/* Added layout prop */}
    </div>
  );
};

export default ProductGrid;