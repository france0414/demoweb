import React from 'react';
import ProductCard from './ProductCard';

// --- 介面定義 ---
interface Product {
  id: string;
  name: string;
  model?: string;
  description?: string;
  price: string;
  imageUrl: string;
  category?: string[];
  link?: string;
}

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
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default ProductGrid;