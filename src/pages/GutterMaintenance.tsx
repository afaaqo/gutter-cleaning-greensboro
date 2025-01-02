import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCallButton from '../components/MobileCallButton';
import QuoteForm from '../components/QuoteForm';
import PrimeServices from '../components/PrimeServicesGutterMaintenance';
import { Shield, Award, Clock, Calendar, Wrench, Droplets } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "How often should I have my gutters maintained?",
    answer: "In Greensboro, we recommend at least two maintenance visits per year – typically in spring and fall. However, if your property has many trees or experiences heavy storms, quarterly maintenance might be more appropriate."
  },
  {
    question: "What's included in your maintenance service?",
    answer: "Our comprehensive maintenance service includes thorough cleaning, inspection of gutters and downspouts, tightening of fasteners, sealing of leaks, checking for proper pitch, and assessment of overall gutter system health."
  },
  {
    question: "Why choose a maintenance plan over one-time cleaning?",
    answer: "Regular maintenance plans prevent costly repairs, extend gutter lifespan, and provide peace of mind. Plus, plan members receive priority service and discounts on repairs."
  },
  {
    question: "Do you provide emergency maintenance services?",
    answer: "Yes, we offer 24/7 emergency services for our maintenance plan members. For urgent issues, we prioritize response times to prevent water damage to your property."
  }
];

export default function GutterMaintenance() {
  return (
    <>
      <Helmet>
        <title>Expert Gutter Maintenance Services in Greensboro | Licensed</title>
        <meta 
          name="description" 
          content="Professional gutter cleaning, repairs & maintenance in Greensboro, NC. 24/7 emergency service, competitive rates & 100% satisfaction guarantee. Schedule now!"
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
                    Best Gutter Maintenance Services Greensboro NC
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Protect your home with Greensboro's most trusted gutter maintenance team. Professional maintenance plans tailored to your needs with lifetime warranty protection.
                  </p>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <a 
                      href="tel:+13369650766" 
                      className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition w-full md:w-auto text-center"
                    >
                      Call (336) 965-0766
                    </a>
                    <a 
                      href="#quote" 
                      className="border-2 border-green-800 text-green-800 px-8 py-3 rounded-full hover:bg-green-50 transition w-full md:w-auto text-center"
                    >
                      Schedule Maintenance
                    </a>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="\Best-Gutter-Maintenance-Services-Greensboro-NC.jpeg"
                    alt="Best gutter maintenance services greensboro nc"
                    className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why We're Greensboro's Best Choice</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-green-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <Shield className="w-12 h-12 text-green-800" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Local Expertise</h3>
                  <p className="text-gray-600">Over 13 years serving Greensboro with expert gutter maintenance.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <Award className="w-12 h-12 text-green-800" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">5-Star Service</h3>
                  <p className="text-gray-600">Highest rated gutter service in Greensboro with 500+ happy customers.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <Clock className="w-12 h-12 text-green-800" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Reliable Service</h3>
                  <p className="text-gray-600">On-time service with 24/7 emergency support for maintenance plan members.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Regular Maintenance */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Regular Gutter Maintenance Matters</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-8 h-8 text-green-800 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Prevent Costly Repairs</h3>
                      <p className="text-gray-600">Regular maintenance prevents expensive water damage and extends gutter lifespan.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Wrench className="w-8 h-8 text-green-800 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Professional Inspection</h3>
                      <p className="text-gray-600">Expert assessment of your gutter system's health and performance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Droplets className="w-8 h-8 text-green-800 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Proper Water Management</h3>
                      <p className="text-gray-600">Ensure effective water drainage to protect your foundation.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="\Best-Gutter-Maintenance-Services-Greensboro.jpeg"
                    alt="Best gutter maintenance services greensboro"
                    className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Company */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Your Trusted Gutter Maintenance Partner</h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto">
                With certified technicians, state-of-the-art equipment, and a proven track record, we deliver unmatched gutter maintenance services. Our local expertise and commitment to excellence make us Greensboro's premier choice.
              </p>
            </div>
          </section>

          {/* Other Services */}
          <PrimeServices />

          {/* FAQ Section */}
          <section className="py-16 bg-green-50">
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