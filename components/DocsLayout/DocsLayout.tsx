'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { showcaseNavigation } from '@/data/showcaseNavigation';

interface DocsLayoutProps {
  children: React.ReactNode;
}

interface Heading {
  id: string;
  text: string;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (mainContentRef.current) {
      const h2Elements = mainContentRef.current.querySelectorAll('h2:not(section h2)');
      const extractedHeadings: Heading[] = [];
      h2Elements.forEach((h2, index) => {
        const id = h2.id || `section-${index}`;
        h2.id = id; // Ensure the h2 has an ID
        extractedHeadings.push({ id, text: h2.textContent || '' });
      });
      setHeadings(extractedHeadings);
    }
  }, [children]); // Re-run when children change

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Navigation */}
      <nav className="w-64 p-4 border-r border-gray-200 bg-gray-50 h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Showcase Demos</h2>
        <ul>
          {showcaseNavigation.map((item) => (
            <li key={item.href} className="mb-2">
              <Link href={item.href} passHref>
                <span
                  className={`block py-2 px-3 rounded transition-colors ${
                    pathname === item.href
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main ref={mainContentRef} className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

      {/* Right Quick Navigation */}
      <aside className="w-64 p-4 border-l border-gray-200 bg-gray-50 hidden lg:block h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">On This Page</h2>
        {headings.length > 0 ? (
          <ul>
            {headings.map((heading) => (
              <li key={heading.id} className="mb-2">
                <button
                  onClick={() => scrollToSection(heading.id)}
                  className="block text-sm text-gray-700 hover:text-blue-600 text-left"
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No sections found.</p>
        )}
      </aside>
    </div>
  );
};

export default DocsLayout;
