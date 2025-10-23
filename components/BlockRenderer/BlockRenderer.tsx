import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
// import { Accordion } from '../shared/Accordion'; // REMOVED
import { AccordionBlockRenderer } from './AccordionBlockRenderer'; // NEW IMPORT

import { ContentBlock, MarkdownBlock, ImageBlock, AccordionBlock, BlockLayoutSettings } from '@/app/types/content-block';

interface BlockRendererProps {
  blocks?: ContentBlock[];
}

const getBlockLayoutClasses = (layout?: BlockLayoutSettings) => {
  let classes = '';
  if (layout?.maxWidthClass) {
    classes += `${layout.maxWidthClass} `;
  } else {
    // Apply default max-width if no custom maxWidthClass is provided
    classes += 'max-w-3xl mx-auto ';
  }

  if (!layout) return classes.trim(); // Default layout

  switch (layout.type) {
    case 'full-width':
      classes = 'w-full'; // Full-width overrides max-width
      break;
    case 'two-columns':
      classes += 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto';
      break;
    case 'image-left':
      classes += 'flex flex-col md:flex-row items-start gap-8 max-w-5xl mx-auto';
      break;
    case 'default':
    default:
      // Default max-width already applied above
      break;
  }
  return classes.trim();
};

export function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-12 py-8"> {/* Outer container for spacing between blocks */}
      {blocks.map((block, index) => {
        const blockLayoutClasses = getBlockLayoutClasses(block.layout);
        const blockStyle = block.layout?.backgroundColor ? { backgroundColor: block.layout.backgroundColor } : {};

        return (
          <div key={index} className={`px-4 ${blockLayoutClasses}`} style={blockStyle}>
            {block.type === 'markdown' && (
              <div className="prose max-w-none"> {/* Apply prose for markdown styling */}
                <ReactMarkdown>{(block as MarkdownBlock).content}</ReactMarkdown>
              </div>
            )}
            {block.type === 'image' && (
              <Image
                src={(block as ImageBlock).src}
                alt={(block as ImageBlock).alt}
                width={800} // Placeholder width
                height={400} // Placeholder height
                layout="responsive" // Makes image responsive
                objectFit="contain" // Adjust as needed
                className="rounded-lg shadow-md"
              />
            )}
            {block.type === 'accordion' && (
              <AccordionBlockRenderer items={(block as AccordionBlock).items} /> // NEW USAGE
            )}
          </div>
        );
      })}
    </div>
  );
}
