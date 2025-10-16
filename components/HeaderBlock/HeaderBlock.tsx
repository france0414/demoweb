
"use client";



import React, { useState } from 'react';



import Image from 'next/image';



import Link from 'next/link';



import { ChevronDown } from 'lucide-react';



import { HeaderData } from '@/data/headerContent';



import { NavigationContent, NavItem } from '@/data/navigation';







interface HeaderBlockProps {



  version: 'default' | 'minimal';



  data: HeaderData;



  navigationData: NavigationContent;



}







const HeaderBlock: React.FC<HeaderBlockProps> = ({ version, data, navigationData }) => {



  const { logoUrl, ctaButton } = data;



  const { mainNav } = navigationData;



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const [openDropdown, setOpenDropdown] = useState<string | null>(null);



  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);







  const toggleMobileMenu = () => {



    setIsMobileMenuOpen(!isMobileMenuOpen);



  };







  const handleDropdownEnter = (label: string) => {



    setOpenDropdown(label);



  };







  const handleDropdownLeave = () => {



    setOpenDropdown(null);



  };







  const handleMobileDropdownToggle = (label: string) => {



    setOpenMobileDropdown(prev => (prev === label ? null : label));



  };







  const baseClasses = "flex items-center justify-between w-full px-4";



  const versionClasses = {



    default: "py-4 bg-white shadow-md",



    minimal: "py-2 bg-transparent",



  };







  const renderNavLinks = (navLinks: NavItem[]) => {



    return navLinks.map((link) => (



      <div



        key={link.label}



        className="relative"



        onMouseEnter={() => link.children && handleDropdownEnter(link.label)}



        onMouseLeave={() => link.children && handleDropdownLeave()}



      >



        <Link href={link.href} passHref>



          <span className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">



            {link.label}



            {link.children && <ChevronDown size={16} className="ml-1" />}



          </span>



        </Link>



        {link.children && openDropdown === link.label && (



          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">



            {link.children.map((childLink) => (



              <Link key={childLink.label} href={childLink.href} passHref>



                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">



                  {childLink.label}



                </span>



              </Link>



            ))}



          </div>



        )}



      </div>



    ));



  };



  



  const renderMobileNavLinks = (onLinkClick?: () => void) => (



    <nav className="flex flex-col items-center space-y-6 mt-8">



      {mainNav.map((link) => (



        <div key={link.label} className="text-center">



          <div



            className="flex items-center justify-center"



            onClick={(e) => {



              if (link.children) {



                e.preventDefault();



                handleMobileDropdownToggle(link.label);



              }



            }}



          >



            <Link href={link.href} passHref>



              <span



                onClick={!link.children ? onLinkClick : undefined}



                className="text-gray-800 hover:text-blue-600 text-lg cursor-pointer"



              >



                {link.label}



              </span>



            </Link>



            {link.children && (



              <ChevronDown



                size={20}



                className={`ml-2 transform transition-transform ${



                  openMobileDropdown === link.label ? 'rotate-180' : ''



                }`}



              />



            )}



          </div>







          {link.children && openMobileDropdown === link.label && (



            <div className="mt-2 space-y-2">



              {link.children.map((child) => (



                <Link key={child.label} href={child.href} passHref>



                  <span



                    onClick={onLinkClick}



                    className="block text-gray-600 hover:text-blue-600 cursor-pointer"



                  >



                    {child.label}



                  </span>



                </Link>



              ))}



            </div>



          )}



        </div>



      ))}



      <Link href={ctaButton.href} passHref>



        <button



          onClick={onLinkClick}



          className={`



          ${version === 'default' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-100 text-blue-600'}



          font-bold py-3 px-6 rounded transition-colors duration-300 text-lg



        `}



        >



          {ctaButton.label}



        </button>



      </Link>



    </nav>



  );







  return (



    <header className={`${baseClasses} ${versionClasses[version]}`}>



      <div className="flex items-center">



        <Link href="/" passHref>



          <Image src={logoUrl} alt="Logo" width={40} height={40} />



        </Link>



      </div>







      <div className="flex items-center space-x-6">



        {version === 'default' && (



          <nav className="hidden md:flex items-center space-x-6">



            {renderNavLinks(mainNav)}



          </nav>



        )}



        



        <div className="hidden md:block">



          <Link href={ctaButton.href} passHref>



            <button className={`



              ${version === 'default' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-100 text-blue-600'}



              font-bold py-2 px-4 rounded transition-colors duration-300



            `}>



              {ctaButton.label}



            </button>



          </Link>



        </div>







        <div className={`${version === 'default' ? 'md:hidden' : ''}`}>



          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">



            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">



              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />



            </svg>



          </button>



        </div>







      </div>







      {isMobileMenuOpen && (



        <>



          {/* Mobile Menu (Fullscreen) */}



          <div className="md:hidden absolute top-0 left-0 w-full h-full bg-white z-50">



            <div className="flex justify-end p-4">



              <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">



                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">



                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />



                </svg>



              </button>



            </div>



            {renderMobileNavLinks(toggleMobileMenu)}



          </div>







          {/* Desktop Hamburger Menu (Dropdown for minimal version) */}



          {version === 'minimal' && (



            <div className="hidden md:block absolute top-16 right-4 bg-white rounded-md shadow-lg z-50 p-4">



              {renderMobileNavLinks(toggleMobileMenu)}



            </div>



          )}



        </>



      )}



    </header>



  );



};







export default HeaderBlock;




