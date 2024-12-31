import React from 'react';
import { Phone } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-green-800 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Protect Your Home Today – Schedule Your Gutter Service Now!
        </h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
          Don't wait for water damage to occur. Our expert team is ready to help maintain and protect your home's gutter system.
        </p>
        <a 
          href="tel:+13369650766"
          className="bg-white text-green-800 px-8 py-3 rounded-full hover:bg-green-100 transition flex items-center mx-auto inline-flex"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call (336) 965-0766
        </a>
      </div>
    </section>
  );
}