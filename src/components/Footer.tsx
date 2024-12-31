import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gutter Cleaning Pros</h3>
            <p className="text-gray-400">
              Professional gutter services in Greensboro and surrounding areas.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Gutter Cleaning</Link></li>
              <li><Link to="/gutter-repair" className="text-gray-400 hover:text-white">Gutter Repairs</Link></li>
              <li><Link to="/gutter-installation" className="text-gray-400 hover:text-white">Gutter Installation</Link></li>
              <li><Link to="/gutter-guards" className="text-gray-400 hover:text-white">Gutter Guards</Link></li>
              <li><Link to="/gutter-downspout-services" className="text-gray-400 hover:text-white">Downspout Services</Link></li>
              <li><Link to="/gutter-maintenance" className="text-gray-400 hover:text-white">Maintenance Plans</Link></li>
              <li><Link to="/gutter-painting" className="text-gray-400 hover:text-white">Gutter Painting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                Call (336) 965-0766
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                info@guttercleaningpros.com
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                Greensboro, NC
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103776.51673711098!2d-79.87933566954542!3d36.07262517955952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531b0bb700d3f9%3A0x47b5229d57288439!2sGreensboro%2C+NC%2C+USA!5e0!3m2!1sen!2sus!4v1710644988040!5m2!1sen!2sus"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Gutter Cleaning Pros. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}