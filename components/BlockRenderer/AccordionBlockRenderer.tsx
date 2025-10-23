'use client';

import React, { useState } from 'react';
import Accordion from '../shared/Accordion'; // Default import for the existing Accordion
import { AccordionItem } from '@/app/types/content-block';

interface AccordionBlockRendererProps {
  items: AccordionItem[];
}

export function AccordionBlockRenderer({ items }: AccordionBlockRendererProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <Accordion
          key={index} // Using index as key, consider adding unique IDs to AccordionItem if possible
          id={`accordion-item-${index}`} // Unique ID for each accordion
          title={item.title}
          isOpen={openItemId === `accordion-item-${index}`}
          onToggle={handleToggle}
        >
          <p>{item.content}</p> {/* Wrap content in a p tag or render as ReactMarkdown if needed */}
        </Accordion>
      ))}
    </div>
  );
}
