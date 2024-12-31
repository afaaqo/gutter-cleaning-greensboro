import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCallButton from '../components/MobileCallButton';
import QuoteForm from '../components/QuoteForm';
import PrimeServicesDownspout from '../components/PrimeServicesDownspout';
import { Shield, Clock, Wrench, CheckCircle, AlertTriangle, Award } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "What are signs that I need downspout repair?",
    answer: "Common signs include water pooling near your foundation, overflowing gutters, visible cracks or separations in downspouts, and basement water issues. If you notice any of these problems, it's time to call our professional downspout services."
  },
  {
    question: "How often should downspouts be maintained?",
    answer: "We recommend inspecting and maintaining your downspouts at least twice a year, typically in spring and fall. However, if you have many trees near your home, more frequent maintenance may be necessary."
  },
  {
    question: "What types of downspout services do you offer?",
    answer: "We provide comprehensive downspout services including installation, repair, replacement, cleaning, and extensions. We also install underground drainage systems and can customize solutions for your specific needs."
  },
  {
    question: "How long does downspout installation take?",
    answer: "Most standard downspout installations can be completed in 1-2 hours per downspout. However, more complex installations involving underground drainage systems may take longer. We'll provide a specific timeline during your consultation."
  }
];

export default function DownspoutServices() {
  return (
    <>
      <Helmet>
        <title>Expert Gutter Downspout Services in Greensboro, NC</title>
        <meta 
          name="description" 
          content="Reliable gutter downspout installation, repair, and cleaning services in Greensboro, NC. Protect your home with expert solutions. Call now!"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-12 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Professional Gutter Downspout Services in Greensboro, NC
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Expert downspout installation, repair, and maintenance services to protect your home from water damage. Our professional team ensures proper water drainage and foundation protection.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="tel:+13369650766" 
                      className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
                    >
                      Call (336) 965-0766
                    </a>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="/Professional-Downspout-Services-in-Greensboro.jpeg"
                    alt="Professional downspout services"
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Quality Gutter Guards Matter Section */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Why Quality Downspout Services Matter</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 text-center mb-6">
                  With over 13 years of experience in gutter and downspout services, we understand the critical role that properly functioning downspouts play in protecting your home. Our expert team specializes in professional downspout installation, maintenance, and repair services, ensuring your home remains protected from water damage year-round.
                </p>
                <p className="text-gray-600 text-center">
                  Our commitment to excellence has made us the most trusted downspout service provider in Greensboro. Whether you need new installations, repairs, or maintenance, our professional team ensures perfect execution and lasting protection. We take pride in providing solutions that effectively protect your home while adding value to your property.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Downspout Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-green-50 rounded-lg">
                  <Wrench className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Installation & Repair</h3>
                  <p className="text-gray-600">Expert installation and repair of all types of downspouts and drainage systems.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Clock className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
                  <p className="text-gray-600">Regular maintenance to ensure your downspouts function properly year-round.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Shield className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Protection</h3>
                  <p className="text-gray-600">Protect your home's foundation from water damage with proper drainage solutions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Services?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                    <p className="text-gray-600">Expert technicians ensuring proper installation and functionality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                    <p className="text-gray-600">We use only high-quality materials built to last.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Preventive Solutions</h3>
                    <p className="text-gray-600">Protect your home from water damage with proper drainage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Guaranteed Work</h3>
                    <p className="text-gray-600">All our services come with a satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prime Services Section */}
          <PrimeServicesDownspout />

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <QuoteForm />
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </>
  );
}