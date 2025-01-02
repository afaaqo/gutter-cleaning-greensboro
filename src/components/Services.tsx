import { Wrench, Home, Shield, Hammer, ClipboardCheck, PaintBucket } from 'lucide-react';
import { Link } from 'react-router-dom';
const services = [
  { 
    icon: <Wrench className="w-8 h-8" />, 
    title: 'Gutter Repairs', 
    description: 'Expert repair services for damaged or malfunctioning gutters',
    link: '/gutter-repair'
  },
  { 
    icon: <Home className="w-8 h-8" />, 
    title: 'Gutter Installation', 
    description: 'Quality installation of new gutter systems',
    link: '/gutter-installation'
  },
  { 
    icon: <Shield className="w-8 h-8" />, 
    title: 'Gutter Guards', 
    description: 'Protection systems to keep debris out',
    link: '/gutter-guards'
  },
  { 
    icon: <Hammer className="w-8 h-8" />, 
    title: 'Gutter Downspout Installation', 
    description: 'Cleaning and repairs for proper water flow',
    link: '/gutter-downspout-installation'
  },
  { 
    icon: <ClipboardCheck className="w-8 h-8" />, 
    title: 'Gutter Maintenance', 
    description: 'Regular maintenance to prevent costly repairs',
    link: '/gutter-maintenance'
  },
    { 
    icon: <PaintBucket className="w-8 h-8" />, 
    title: 'Gutter Painting & Sealing', 
    description: 'Professional finishing and weatherproofing',
    link: '/gutter-painting'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition group">
              <div className="text-green-800 mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.link && (
                <Link
                  to={service.link}
                  className="inline-flex items-center text-green-800 hover:text-green-700 font-semibold"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}