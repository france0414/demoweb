import type { ReactNode } from 'react';
import Image from 'next/image';

/**
 * FAQ Category Definitions.
 * If this array is empty, the FAQ page will not show category filters.
 */
export const faqCategories = [
  { id: 'general', name: '一般問題' },
  { id: 'technical', name: '技術支援' },
];

export interface FaqItem {
  id: string; // Added unique ID
  question: string;
  answer: ReactNode;
  category?: string; // Corresponds to the id in faqCategories
}

/**
 * FAQ Data.
 * Each item can optionally belong to a category.
 */
export const faqData: FaqItem[] = [
  {
    id: 'faq-1', // Added ID
    category: 'general',
    question: '什麼是 B2B 建站系統？',
    answer: (
      <p>
        B2B (Business-to-Business) 建站系統是一個專為企業客戶設計的網站解決方案，旨在建立專業的企業形象、展示產品與服務、並獲取商業機會。它通常包含產品目錄、詢價系統、以及客戶案例等功能。
      </p>
    ),
  },
  {
    id: 'faq-2', // Added ID
    category: 'general',
    question: '這個系統適合哪些行業？',
    answer: (
      <p>
        我們的系統具有高度的靈活性和擴充性，適用於各種 B2B 行業，包括製造業、批發貿易、專業服務、以及軟體和技術提供商。
      </p>
    ),
  },
  {
    id: 'faq-3', // Added ID
    category: 'technical',
    question: '如何設定圖文並茂的回答？',
    answer: (
      <div className="space-y-4">
        <p>
          在我們的資料結構中，回答（answer）欄位可以直接使用 JSX 語法。您可以自由地組合文字、圖片和其他 React 元件。
        </p>
        <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Unsplash Image" width={96} height={96} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800">這是一個圖文範例</h4>
            <p className="text-gray-600">
              您可以像這樣，在回答中嵌入圖片和結構化的文字內容。
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'faq-4', // Added ID
    category: 'technical',
    question: '我可以自訂元件的樣式嗎？',
    answer: (
      <p>
        可以。我們提供的元件（如手風琴 Accordion）都支援透過 props 傳入 Tailwind CSS 類別或樣式物件來進行客製化，讓您可以輕鬆匹配您的品牌風格。
      </p>
    ),
  },
];
