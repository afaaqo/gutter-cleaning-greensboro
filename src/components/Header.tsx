import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg md:text-2xl font-bold text-green-800">
            Gutter Cleaning Pros
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-green-800 hover:text-green-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 max-w-md mx-auto">
            <Link to="/#services" className="text-gray-600 hover:text-green-800">Services</Link>
            <Link to="/#about" className="text-gray-600 hover:text-green-800">About</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-green-800">Contact</Link>
          </div>

          {/* Desktop Call Button */}
          <a 
            href="tel:+13369650766" 
            className="hidden md:flex items-center text-green-800 hover:text-green-700 font-semibold bg-green-100 px-4 py-2 rounded-full transition-all hover:bg-green-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span>Call (336) 965-0766</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4 bg-white rounded-lg">
            <Link 
              to="/#services" 
              className="px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#about" 
              className="px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/#contact" 
              className="px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-gray-100 pt-2">
              <Link 
                to="/gutter-repair" 
                className="block px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Gutter Repair
              </Link>
              <Link 
                to="/gutter-installation" 
                className="block px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Gutter Installation
              </Link>
              <Link 
                to="/gutter-guards" 
                className="block px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Gutter Guards
              </Link>
              <Link 
                to="/gutter-downspout-services" 
                className="block px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Downspout Services
              </Link>
              <Link 
                to="/gutter-maintenance" 
                className="block px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Gutter Maintenance
              </Link>
              <Link 
                to="/gutter-painting" 
                className="block px-4 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Gutter Painting
              </Link>
            </div>
            <a 
              href="tel:+13369650766" 
              className="flex items-center justify-center text-green-800 hover:text-green-700 font-semibold bg-green-100 px-4 py-2 rounded-full transition-all hover:bg-green-200 mx-4 mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call (336) 965-0766</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}