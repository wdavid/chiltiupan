"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { BiLandscape } from "react-icons/bi";
import { GiStoneTower } from "react-icons/gi";
import { BsMoon, BsSun } from "react-icons/bs";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Obtiene el tema del almacenamiento local y aplícalo
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="bg-background-secondary border-b border-border fixed w-full top-0 left-0 z-50">
      <div className=" mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 "
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <img className="w-28" src="/logowhite.png" alt="Workflow" />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" className={`text-gray-300 flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'bg-gray-700 text-white' : ''}`} onClick={closeMobileMenu}><IoHomeOutline className="mr-1"/> Inicio</Link>
                <Link href="/historia" className={`text-gray-300 flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${pathname === '/historia' ? 'bg-gray-700 text-white' : ''}`} onClick={closeMobileMenu}><MdOutlineHistoryEdu className="mr-1 text-xl"/> Historia</Link>
                <Link href="/atracciones" className={`text-gray-300 flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${pathname === '/atracciones' ? 'bg-gray-700 text-white' : ''}`} onClick={closeMobileMenu}><BiLandscape className="mr-1 text-xl"/>Atracciones</Link>
                <Link href="/cultura" className={`text-gray-300 flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${pathname === '/cultura' ? 'bg-gray-700 text-white' : ''}`} onClick={closeMobileMenu}><GiStoneTower className="mr-1"/>Cultura</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <a
              href="#footer"
              className="bg-transparent p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Contact Us</span>
              <div className='h-8 w-8 flex items-center justify-center'>
                <BsTelephone className='text-xl' />
              </div>
            </a> */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-1 rounded-full text-gray-400 hover:text-white "
            >
              {isDarkMode ? (
                <BsSun className="text-xl" />
              ) : (
                <BsMoon className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 ">
          <Link href="/" className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'bg-gray-700 text-white' : ''}`} onClick={closeMobileMenu}>Inicio</Link>
          <Link href="/historia" className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${pathname === '/historia' ? 'bg-gray-700 text-white' : ''}`} onClick={closeMobileMenu}>Historia</Link>
          <Link href="/atracciones" className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${pathname === '/atracciones' ? 'bg-gray-700 text-white' : ''}`} onClick={closeMobileMenu}>Atracciones</Link>
          <Link href="/cultura" className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${pathname === '/cultura' ? 'bg-gray-700 text-white' : ''}`} onClick={closeMobileMenu}>Cultura</Link>
        </div>
      </div>
    </nav>
  );
}