import type { ReactNode } from 'react';

interface FaqPageContent {
  pageTitle: ReactNode;
  pageDescription: ReactNode;
  allQuestionsLabel: string;
}

export const faqPageContent: FaqPageContent = {
  pageTitle: <h1 className="text-4xl font-bold text-gray-800">常見問題</h1>,
  pageDescription: (
    <p className="mt-4 text-lg text-gray-600">
      在這裡找到您問題的答案。您可以自訂 <span className="font-bold text-blue-600">文字大小</span> 或 <span className="italic">樣式</span>。
    </p>
  ),
  allQuestionsLabel: '所有問題',
};
