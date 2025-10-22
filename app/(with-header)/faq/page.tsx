'use client';

import { useState } from 'react';
import { faqData, faqCategories } from '@/data/faq';
import Accordion from '@/components/shared/Accordion';
import { faqPageContent } from '@/data/faqPageContent'; // New import

// You can control the category filter style via this prop in your page builder
// For now, we default to 'menu'. Other option: 'dropdown'
interface FaqPageProps {
  categoryDisplayMode?: 'menu' | 'dropdown';
}

const FaqPage = ({ categoryDisplayMode = 'menu' }: FaqPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null); // State for exclusive accordion

  const hasCategories = faqCategories.length > 0;

  const filteredFaqs = hasCategories && selectedCategory !== 'all'
    ? faqData.filter((faq) => faq.category === selectedCategory)
    : faqData;

  const handleAccordionToggle = (id: string) => {
    setOpenAccordionId(prevId => (prevId === id ? null : id));
  };

  const renderCategoryFilters = () => {
    if (!hasCategories) return null;

    if (categoryDisplayMode === 'dropdown') {
      return (
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className="block w-full max-w-xs mx-auto p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
        >
          <option value="all">{faqPageContent.allQuestionsLabel}</option>
          {faqCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      );
    }

    // Default to 'menu' style
    return (
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {faqPageContent.allQuestionsLabel}
        </button>
        {faqCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        {faqPageContent.pageTitle}
        {faqPageContent.pageDescription}
      </div>

      {renderCategoryFilters()}

      <div className="max-w-3xl mx-auto">
        {filteredFaqs.map((faq, index) => ( // Added index for fallback
          <Accordion
            key={faq.id || `faq-${index}`} // Fallback for key
            id={faq.id || `faq-${index}`} // Fallback for id prop
            title={faq.question}
            isOpen={openAccordionId === (faq.id || `faq-${index}`)} // Fallback for isOpen check
            onToggle={handleAccordionToggle} // Pass onToggle prop
          >
            {faq.answer}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
