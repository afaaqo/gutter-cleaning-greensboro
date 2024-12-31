import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileCallButton() {
  return (
    <div className="fixed bottom-4 right-4 md:hidden z-50">
      <a
        href="tel:+13369650766"
        className="flex items-center justify-center bg-green-800 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors font-semibold shadow-lg"
      >
        <Phone className="w-4 h-4 mr-2" />
        <span className="text-sm">Call Now</span>
      </a>
    </div>
  );
}