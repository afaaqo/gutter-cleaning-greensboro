import React from 'react';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Professional Gutter Cleaning Services Greensboro, NC – Dependable and Trusted
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert gutter maintenance services designed to protect your home from costly water damage and ensure lasting protection!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:+13369650766"
                className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (336) 965-0766
              </a>
              <a 
                href="#quote-form"
                className="border-2 border-green-800 text-green-800 px-8 py-3 rounded-full hover:bg-green-50 transition w-full md:w-auto text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="guttercleaningservicegreensboronc.webp"
              alt="Professional gutter cleaning service greensboro nc"
              className="rounded-lg shadow-xl w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}