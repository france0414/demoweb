'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface InquiryItem {
  productId: string;
  quantity: number;
}

interface InquiryCartContextType {
  items: InquiryItem[];
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const InquiryCartContext = createContext<InquiryCartContextType | undefined>(undefined);

export function InquiryCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);

  // Load cart from localStorage on initial mount
  useEffect(() => {
    const storedCart = localStorage.getItem('inquiryCart');
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('inquiryCart', JSON.stringify(items));
  }, [items]);

  const addItem = (productId: string, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productId === productId);
      if (existingItem) {
        return prevItems.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { productId, quantity }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
  };

  return (
    <InquiryCartContext.Provider value={value}>
      {children}
    </InquiryCartContext.Provider>
  );
}

export function useInquiryCart() {
  const context = useContext(InquiryCartContext);
  if (context === undefined) {
    throw new Error('useInquiryCart must be used within an InquiryCartProvider');
  }
  return context;
}
