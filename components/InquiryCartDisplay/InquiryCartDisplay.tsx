'use client';

import React, { useState } from 'react';
import { useInquiryCart } from '@/app/context/InquiryCartContext';
import { mockProducts } from '@/data/mock-products'; // To get product names

interface InquiryCartDisplayProps {
  // Optional: prop to control visibility, if used in a modal/sidebar
  isOpen?: boolean;
  onClose?: () => void;
}

export function InquiryCartDisplay({ isOpen = true, onClose }: InquiryCartDisplayProps) {
  const { items, updateQuantity, removeItem, clearCart, totalItems } = useInquiryCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitInquiry = () => {
    if (items.length === 0) {
      alert('詢價車是空的，請先加入產品！');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('您的詢價已提交！我們會盡快與您聯繫。');
      clearCart();
      setIsSubmitting(false);
      onClose?.(); // Close if part of a modal
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">我的詢價車 ({totalItems})</h2>
          {onClose && (
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl font-bold">
              &times;
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p className="text-gray-600 text-center py-4">詢價車是空的。</p>
        ) : (
          <ul className="space-y-4 mb-6">
            {items.map((item) => {
              const product = mockProducts.find(p => p.id === item.productId);
              if (!product) return null; // Should not happen with valid productIds

              return (
                <li key={item.productId} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-500">數量: {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded-md text-center"
                    />
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      移除
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="flex justify-between items-center border-t pt-4">
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 font-medium"
            disabled={items.length === 0 || isSubmitting}
          >
            清空詢價車
          </button>
          <button
            onClick={handleSubmitInquiry}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            disabled={items.length === 0 || isSubmitting}
          >
            {isSubmitting ? '提交中...' : '提交詢價'}
          </button>
        </div>
      </div>
    </div>
  );
}
