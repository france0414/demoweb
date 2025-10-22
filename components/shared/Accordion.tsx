'use client';

import type { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  id: string; // Added for exclusive control
  title: string;
  isOpen: boolean; // Controlled by parent
  onToggle: (id: string) => void; // Callback for parent
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  title,
  isOpen,
  onToggle,
  iconBefore,
  iconAfter,
  backgroundColor = 'bg-gray-50',
  borderColor,
  children,
}) => {
  // Removed internal useState for isOpen

  const borderClasses = borderColor ? `border ${borderColor}` : 'border-none';

  return (
    <div className={`my-2 rounded-lg ${borderClasses} ${backgroundColor}`}>
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 focus:outline-none transition-colors duration-200 cursor-pointer"
        onClick={() => onToggle(id)} // Call parent's onToggle
      >
        <div className="flex items-center">
          {iconBefore && <span className="mr-3">{iconBefore}</span>}
          {title}
        </div>
        <div className="flex items-center">
          {iconAfter ? (
            iconAfter
          ) : isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;