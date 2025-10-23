'use client';

import React from 'react';
import { useInquiryCart } from '@/app/context/InquiryCartContext';
import { Product } from '@/app/types/entities';

interface InquiryCartButtonClientProps {
  product: Product;
}

const InquiryCartButtonClient: React.FC<InquiryCartButtonClientProps> = ({ product }) => {
  const { addItem } = useInquiryCart();

  const handleAddToInquiry = () => {
    addItem(product.id);
    alert(`${product.name} 已加入詢價車！`); // Simple feedback
  };

  return (
    <button
      onClick={handleAddToInquiry}
      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
    >
      加入詢價車
    </button>
  );
};

export default InquiryCartButtonClient;
