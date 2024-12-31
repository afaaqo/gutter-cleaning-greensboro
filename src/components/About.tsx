import { Users, Award, Clock, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Gutter Cleaning Pros</h2>
            <p className="text-gray-600 mb-6">
              Since 2010, Gutter Cleaners Pros has been providing reliable gutter cleaning and maintenance services in Greensboro, NC. Our experienced team is dedicated to delivering quality workmanship that keeps our customers satisfied year after year. With a strong reputation built on professionalism and excellence, we take pride in serving the community and ensuring every job is completed to the highest standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-green-800" />
                <span>Professional Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-green-800" />
                <span>Top Rated Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-green-800" />
                <span>24/7 Support</span>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="tel:+13369650766"
                className="inline-flex items-center text-green-800 hover:text-green-700 font-semibold bg-green-100 px-6 py-3 rounded-full transition-all hover:bg-green-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call (336) 965-0766</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/Gutter-Cleaning-Pros.webp"
              alt="About our gutter cleaning service"
              className="w-full h-[600px] md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}