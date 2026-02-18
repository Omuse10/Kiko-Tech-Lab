import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.postimg.cc/8PrFC9n2/Kiko-Logo.png"
                alt="Kiko Lab Logo"
                className="h-12 w-auto mr-2 ml-0"
              />
              {/*<div className="flex items-center gap-2">
                <div className="relative flex">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2"/>
                    </svg>
                  </div>
                <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center -ml-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-[#FF5722] rounded-full flex items-center justify-center -ml-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor">
                      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeWidth="2"/>
                    </svg>
                  </div>
                </div> */}
                <span className="ml-2 text-lg sm:text-xl font-bold text-gray-700">Kiko Lab</span>
              {/* </div> */}
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            <Link to="/labs" className="text-gray-700 hover:text-[#4CAF50] text-sm lg:text-base">Labs</Link>
            <Link to="/tutorials" className="text-gray-700 hover:text-[#4CAF50] text-sm lg:text-base">Tutorials</Link>
            <Link to="/collaborate" className="text-gray-700 hover:text-[#4CAF50] text-sm lg:text-base">Collaborate</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-[#4CAF50] text-sm lg:text-base">Pricing</Link>
            <Link to="/login" className="text-white bg-[#4CAF50] hover:bg-[#45a049] px-3 py-2 lg:px-4 lg:py-2 rounded-md text-sm lg:text-base">
              Sign In
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#4CAF50] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center h-16 px-4 border-b">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <img
                src="https://i.postimg.cc/8PrFC9n2/Kiko-Logo.png"
                alt="Kiko Lab Logo"
                className="h-12 w-auto mr-2 ml-0"
              />
              {/*<div className="flex items-center gap-2">
                <div className="relative flex">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center -ml-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-[#FF5722] rounded-full flex items-center justify-center -ml-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor">
                      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>*/}
                <span className="ml-2 text-lg font-bold text-gray-700">Kiko Lab</span>
              {/* </div> */}
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-[#4CAF50] p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-6 space-y-6">
            <Link
              to="/labs"
              className="block text-lg text-gray-700 hover:text-[#4CAF50]"
              onClick={() => setIsMenuOpen(false)}
            >
              Labs
            </Link>
            <Link
              to="/tutorials"
              className="block text-lg text-gray-700 hover:text-[#4CAF50]"
              onClick={() => setIsMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              to="/collaborate"
              className="block text-lg text-gray-700 hover:text-[#4CAF50]"
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborate
            </Link>
            <Link
              to="/pricing"
              className="block text-lg text-gray-700 hover:text-[#4CAF50]"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className="block w-full text-center text-white bg-[#4CAF50] hover:bg-[#45a049] px-4 py-3 rounded-md text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}