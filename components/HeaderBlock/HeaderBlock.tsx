
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the interface for the data prop
export interface HeaderData {
  logoUrl: string;
  navLinks: Array<{
    label: string;
    href: string;
  }>;
  ctaButton: {
    label: string;
    href: string;
  };
}

// Define the props for the HeaderBlock component
interface HeaderBlockProps {
  variant: 'default' | 'minimal';
  data: HeaderData;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({ variant, data }) => {
  const { logoUrl, navLinks, ctaButton } = data;

  const baseClasses = "flex items-center justify-between w-full px-4";
  const variantClasses = {
    default: "py-4 bg-white shadow-md",
    minimal: "py-2 bg-transparent",
  };

  return (
    <header className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="flex items-center">
        <Link href="/" passHref>
            <Image src={logoUrl} alt="Logo" width={40} height={40} />
        </Link>
      </div>

      {variant === 'default' && (
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">{link.label}</span>
            </Link>
          ))}
        </nav>
      )}

      <div>
        <Link href={ctaButton.href} passHref>
          <button className={`
            ${variant === 'default' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-100 text-blue-600'}
            font-bold py-2 px-4 rounded transition-colors duration-300
          `}>
            {ctaButton.label}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderBlock;
