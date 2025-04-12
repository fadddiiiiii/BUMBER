import React, { useState } from 'react';
import { Link } from 'react-router';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 text-white border-b border-white/10">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-mono">
              <span className='text-blue-300'>CyberBloom</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            
            <a
              href="https://signup-topaz-eight.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium"
            >
              SIGN IN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <MdMenu className="block h-6 w-6" />
              ) : (
                <MdClose className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/enterprise" className="block px-3 py-2 rounded-md hover:bg-gray-700">Enterprise</Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md hover:bg-gray-700">Pricing</Link>
            <Link to="/login" className="block px-3 py-2 rounded-md hover:bg-gray-700">Log in</Link>
            <Link
              to="/get-started"
              className="block px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
            >
              Get started — it's free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
