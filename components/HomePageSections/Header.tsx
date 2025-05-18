'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="Coolex Logo" 
            width={80} 
            height={60} 
            priority
          />
          <span className="text-2xl font-bold text-primary">Coolex Links</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-coolex-accent transition-colors">
            About Us
          </a>
          <a href="#products" className="text-gray-700 hover:text-coolex-accent transition-colors">
            Products
          </a>
          <a href="#why-choose-us" className="text-gray-700 hover:text-coolex-accent transition-colors">
            Why Choose Us
          </a>
          <a href="#contact" className="text-gray-700 hover:text-coolex-accent transition-colors">
            Contact
          </a>
        </nav>

        {/* Language Selector */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-medium text-coolex-blue">EN</button>
          <button className="text-sm font-medium text-gray-500 hover:text-coolex-blue">SW</button>
          <button className="text-sm font-medium text-gray-500 hover:text-coolex-blue">JP</button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-coolex-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#products" 
              className="text-gray-700 hover:text-coolex-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#why-choose-us" 
              className="text-gray-700 hover:text-coolex-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-coolex-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Language selector in mobile menu */}
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
              <button className="text-sm font-medium text-coolex-blue">EN</button>
              <button className="text-sm font-medium text-gray-500 hover:text-coolex-blue">SW</button>
              <button className="text-sm font-medium text-gray-500 hover:text-coolex-blue">JP</button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
