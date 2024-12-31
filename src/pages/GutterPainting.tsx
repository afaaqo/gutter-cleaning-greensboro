import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCallButton from '../components/MobileCallButton';
import QuoteForm from '../components/QuoteForm';
import PrimeServicesgutterpainting from '../components/PrimeServicesGutterpainting';
import { Shield, Award, Droplets, CheckCircle, PaintBucket, Palette, Sparkles, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "How long does gutter painting and sealing last?",
    answer: "With our professional-grade gutter paint and rain gutter sealer, our services typically last 8-10 years, protecting against rust and weathering. Regular maintenance can extend this lifespan even further."
  },
  {
    question: "What type of paint do you use for gutters?",
    answer: "We use the best gutter paint available - premium, weather-resistant exterior paint specifically formulated for residential gutter painting. Our paint is designed to withstand UV rays and extreme weather conditions."
  },
  {
    question: "What's included in your gutter sealing service?",
    answer: "Our comprehensive gutter sealing service includes thorough cleaning, rust treatment, professional application of rain gutter sealer, and a final inspection to ensure complete protection."
  },
  {
    question: "What's the average gutter painting cost?",
    answer: "Gutter painting cost varies based on length and condition. As the most reliable gutter painting service near you, we offer competitive pricing with most residential projects ranging between $300-$800."
  },
  {
    question: "Can you paint gutters any color?",
    answer: "Yes! Our residential gutter painting service offers a wide range of colors to match or complement your home's exterior, enhancing curb appeal while providing protection."
  }
];

export default function GutterPainting() {
  return (
    <>
      <Helmet>
        <title>Professional Gutter Painting & Sealing | Greensboro NC</title>
        <meta 
          name="description" 
          content="Expert gutter painting & sealing services in Greensboro. Restore & protect your gutters with premium materials & skilled technicians. Free estimates available!"
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
                    Expert Gutter Painting & Sealing Services in Greensboro, NC
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Looking for professional gutter painting near me? Trust Greensboro's leading gutter painting & sealing experts. We use the best gutter paint and premium rain gutter sealer to protect and beautify your home.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="tel:+13369650766" 
                      className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition inline-flex items-center"
                    >
                      Call (336) 965-0766
                    </a>
                    <a 
                      href="#quote" 
                      className="border-2 border-green-800 text-green-800 px-8 py-3 rounded-full hover:bg-green-50 transition inline-flex items-center"
                    >
                      Get Free Estimate
                    </a>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="public\Expert-Gutter-Painting-Sealing-Services-in-Greensboro-NC.jpeg"
                    alt="Professional gutter painting service"
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Problems & Solutions Section */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Common Gutter Problems & Our Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Rust and Corrosion</h3>
                  </div>
                  <p className="text-gray-600">Our professional gutter painting service includes rust treatment and premium paint application to prevent further corrosion.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Leaks and Gaps</h3>
                  </div>
                  <p className="text-gray-600">We use high-quality rain gutter sealer to prevent leaks and ensure proper water flow.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Gutter Painting & Sealing Services?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-green-50 rounded-lg">
                  <Shield className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Premium Materials</h3>
                  <p className="text-gray-600">We use only the best gutter paint and professional-grade sealants.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Award className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Expert Application</h3>
                  <p className="text-gray-600">Skilled technicians specializing in residential gutter painting.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Palette className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Custom Colors</h3>
                  <p className="text-gray-600">Wide range of colors at competitive gutter painting cost.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Professional Process</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Surface Preparation</h3>
                  </div>
                  <p className="text-gray-600">Thorough cleaning and priming for optimal paint adhesion.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Quality Paint Application</h3>
                  </div>
                  <p className="text-gray-600">Professional gutter painting techniques for a flawless finish.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Droplets className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Sealing Process</h3>
                  </div>
                  <p className="text-gray-600">Advanced gutter sealing for maximum protection.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <PaintBucket className="w-6 h-6 text-green-800 mr-2" />
                    <h3 className="text-xl font-semibold">Final Inspection</h3>
                  </div>
                  <p className="text-gray-600">Thorough quality check for perfect results.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Greensboro's Premier Gutter Painting & Sealing Service</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 text-center">
                  As the leading gutter painting & sealing experts in Greensboro, we combine superior craftsmanship with the best gutter paint and sealants. Our certified technicians deliver exceptional results at competitive gutter painting cost, making us the most trusted choice for residential gutter painting near you.
                </p>
              </div>
            </div>
          </section>

          {/* Other Services */}
          <PrimeServicesgutterpainting />

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