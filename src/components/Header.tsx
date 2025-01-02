import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Gutter Repair', path: '/gutter-repair' },
    { name: 'Gutter Maintenance', path: '/gutter-maintenance' },
    { name: 'Gutter Installation', path: '/gutter-installation' },
    { name: 'Gutter Guards', path: '/gutter-guards' },
    { name: 'Gutter Painting', path: '/gutter-painting' },
    { name: 'Gutter Downspout Installation', path: '/gutter-downspout-installation' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Company Name */}
          <Link to="/" className="text-xl font-bold text-green-800">
            Gutter Cleaning Pros
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation - Updated with flex-1 and justify-center */}
          <nav className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  className="flex items-center text-gray-600 hover:text-gray-900 py-5"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {/* Updated Services Submenu */}
                <div 
                  className={`absolute left-0 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-300 ${
                    isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  style={{ top: '100%' }}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-gray-900"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/about-us" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </nav>

          {/* Call CTA - Now in its own container */}
          <div className="hidden md:block">
            <a 
              href="tel:+13369650766"
              className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Call (336) 965-0766
            </a>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden">
              <div className="px-4 py-3 space-y-3">
                <Link 
                  to="/" 
                  className="block text-center text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile Services Menu */}
                <div className="text-center">
                  <button 
                    className="flex items-center justify-center w-full text-gray-600 hover:text-gray-900"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block text-center text-gray-600 hover:text-gray-900"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/about-us" 
                  className="block text-center text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-center text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile Call CTA */}
                <a 
                  href="tel:+13369650766"
                  className="block bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call (336) 965-0766
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}