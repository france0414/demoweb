'use client';

import React, { useState } from 'react';
import { useInquiryCart } from '@/app/context/InquiryCartContext';
import { InquiryCartDisplay } from '../InquiryCartDisplay/InquiryCartDisplay';
import { ShoppingCart } from 'lucide-react'; // Assuming lucide-react is installed for icons

export function InquiryCartButton() {
  const { totalItems } = useInquiryCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center space-x-2 z-40 transition-transform duration-300 hover:scale-105"
        aria-label="Open Inquiry Cart"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isCartOpen && <InquiryCartDisplay isOpen={isCartOpen} onClose={toggleCart} />}
    </>
  );
}
