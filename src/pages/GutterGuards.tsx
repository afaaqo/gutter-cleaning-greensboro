import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCallButton from '../components/MobileCallButton';
import QuoteForm from '../components/QuoteForm';
import PrimeServicesGutterGuards from '../components/PrimeServicesGutterGuards';
import { Shield, Award, Droplets, CheckCircle, Leaf, Umbrella, Wrench, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "What types of gutter guards do you offer?",
    answer: "We offer various high-quality gutter leaf guard systems including micro-mesh gutter guards, reverse curve, foam, and brush-style guards. Our rain gutter leaf guard solutions are specifically chosen based on your needs and local environmental conditions."
  },
  {
    question: "How long do gutter guards last?",
    answer: "Our premium gutter splash guard systems are built to last 15-20 years with proper maintenance. Whether you choose our raindrop gutter guard or mesh gutter guards, we back our products with comprehensive warranties."
  },
  {
    question: "Do I still need to clean my gutters with guards installed?",
    answer: "While our gutter guards for pine needles significantly reduce maintenance, we recommend annual inspections to ensure optimal performance. Most customers find they only need professional cleaning every 2-3 years."
  },
  {
    question: "Are your gutter guards worth the investment?",
    answer: "Yes! Our rain gutter splash guard systems pay for themselves by eliminating regular cleaning costs, preventing costly water damage, and extending the life of your gutter system. Plus, they add value to your home."
  }
];

export default function GutterGuards() {
  return (
    <>
      <Helmet>
        <title>Pro Gutter Guard Installation | Greensboro NC Experts</title>
        <meta 
          name="description" 
          content="Premium gutter guard installation in Greensboro. Prevent clogs & debris with top-rated leaf protection systems. Licensed installers, lifetime warranty. Free quote!"
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
                    Professional Gutter Guards Near Me in Greensboro, NC
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Looking to install gutter guards? Our expert gutter guards company provides top-quality LeafFilter gutter guard and raindrop gutter guard solutions. Protect your gutters from debris with our professional gutter guard installation services.
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
                      Get Free Estimate
                    </a>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="\Gutter-Guards-Near-Me-in-Greensboro-NC.jpeg"
                    alt="Professional gutter guard installation"
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Best in Greensboro Section */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Greensboro's Premier Gutter Guard Installation Experts</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 text-center mb-6">
                  With over 13 years of experience in gutter protection systems, Gutter Cleaning Pros has established itself as the leading provider of gutter guards near me in Greensboro NC. Our expert team specializes in LeafFilter gutter guard and raindrop gutter guard installations, delivering superior protection for homes across the region. We combine industry-leading products with expert installation techniques to ensure your gutters remain debris-free and functional year-round.
                </p>
                <p className="text-gray-600 text-center">
                  Our commitment to excellence has made us the most trusted gutter guards company in Greensboro. Whether you need mesh gutter guards or specialized gutter guards for pine needles, our professional team ensures perfect installation and lasting protection. We take pride in providing solutions that effectively protect your home while adding value to your property.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Gutter Guards?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-green-50 rounded-lg">
                  <Shield className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Superior Protection</h3>
                  <p className="text-gray-600">Industry-leading gutter leaf guard technology that keeps out leaves, pine needles, and debris.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Award className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Professional Installation</h3>
                  <p className="text-gray-600">Expert gutter guard installation by certified technicians ensures optimal performance.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Droplets className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Lifetime Protection</h3>
                  <p className="text-gray-600">Our rain gutter splash guard systems are backed by comprehensive warranties.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process and Benefits */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Installation Process & Customer Benefits</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Professional Installation Process</h3>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">Thorough Assessment</h4>
                      <p className="text-gray-600">We evaluate your current gutter system and recommend the best gutter guards for pine needles and local weather conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">Custom Fitting</h4>
                      <p className="text-gray-600">Our mesh gutter guards are precisely measured and fitted to ensure maximum protection.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">Expert Installation</h4>
                      <p className="text-gray-600">Professional installation of your chosen LeafFilter gutter guard or raindrop gutter guard system.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Customer Benefits</h3>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="w-5 h-5 text-green-800 mr-2" />
                      Lifetime Protection
                    </h4>
                    <p className="text-gray-600">Our gutter guards near me in Greensboro NC provide lasting protection against debris.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Settings className="w-5 h-5 text-green-800 mr-2" />
                      Low Maintenance
                    </h4>
                    <p className="text-gray-600">Significantly reduce the need for regular gutter cleaning with our premium guard systems.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Wrench className="w-5 h-5 text-green-800 mr-2" />
                      Professional Service
                    </h4>
                    <p className="text-gray-600">Expert installation and ongoing support from our gutter guards company.</p>
                  </div>
                </div>
                {/* Adjusted CTA button */}
                <div className="md:col-span-2 text-center mt-8">
                  <a 
                    href="tel:+13369650766"
                    className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300"
                  >
                    <span className="text-base font-medium">Call (336) 965-0766 For a Free Quote</span>
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Premium Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Leaf className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">All-Season Protection</h3>
                  </div>
                  <p className="text-gray-600">Our gutter leaf guard systems work effectively in all weather conditions.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Umbrella className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Weather Resistant</h3>
                  </div>
                  <p className="text-gray-600">Durable rain gutter leaf guard materials that withstand extreme conditions.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Easy Maintenance</h3>
                  </div>
                  <p className="text-gray-600">Our gutter splash guard design ensures minimal maintenance requirements.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Pest Prevention</h3>
                  </div>
                  <p className="text-gray-600">Keep birds, rodents, and insects out with our guard systems.</p>
                </div>
              </div>
              {/* Adjusted CTA button */}
              <div className="text-center mt-8">
                <a 
                  href="tel:+13369650766"
                  className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300"
                >
                  <span className="text-base font-medium">Call (336) 965-0766 For a Free Quote</span>
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </section>

          {/* Prime Services Section */}
          <PrimeServicesGutterGuards />

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