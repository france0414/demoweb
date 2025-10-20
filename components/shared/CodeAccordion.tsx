'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Assuming Lucide-react is available

interface CodeAccordionProps {
  title: string;
  code: string;
}

const CodeAccordion: React.FC<CodeAccordionProps> = ({ title, code }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-xl font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-gray-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-600" />
        )}
      </button>
      <div
        className={`overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <pre className="bg-gray-50 p-6 rounded-b-lg text-sm overflow-x-auto font-mono text-gray-800 leading-relaxed border border-t-0 border-gray-200">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeAccordion;
