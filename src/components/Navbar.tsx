'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FeedbackButton from './FeedbackButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const isHomePage = pathname === '/';

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
                NumLetter
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Home
            </Link>

            {/* Tools Dropdown */}
            <div className="relative" onMouseEnter={() => setIsToolsOpen(true)} onMouseLeave={() => setIsToolsOpen(false)}>
              <button className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                Tools
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isToolsOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                  <Link
                    href="/a1z26-converter"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="font-semibold">A1Z26 Converter</div>
                    <div className="text-xs text-gray-500">A=1, B=2, Z=26</div>
                  </Link>
                  <Link
                    href="/ascii-converter"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="font-semibold">ASCII Converter</div>
                    <div className="text-xs text-gray-500">Text to ASCII codes</div>
                  </Link>
                  <Link
                    href="/phone-keypad-converter"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="font-semibold">Phone Keypad</div>
                    <div className="text-xs text-gray-500">T9 phone notation</div>
                  </Link>
                </div>
              )}
            </div>

            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection('examples')}
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Examples
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </button>
              </>
            )}
            <FeedbackButton />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tools</div>
              <Link
                href="/a1z26-converter"
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                A1Z26 Converter
              </Link>
              <Link
                href="/ascii-converter"
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                ASCII Converter
              </Link>
              <Link
                href="/phone-keypad-converter"
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Phone Keypad Converter
              </Link>
            </div>
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection('examples')}
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
                >
                  Examples
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
                >
                  Features
                </button>
              </>
            )}
            <div className="px-3 py-2">
              <FeedbackButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
