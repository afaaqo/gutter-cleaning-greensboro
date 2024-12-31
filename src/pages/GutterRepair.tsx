import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCallButton from '../components/MobileCallButton';
import QuoteForm from '../components/QuoteForm';
import { Shield, Clock, AlertTriangle, Award } from 'lucide-react';
import GutterRepairServices from '../components/GutterRepairServices';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "How much does gutter repair cost in Greensboro?",
    answer: "Gutter repair costs vary depending on the extent of damage and repair needed. We offer competitive pricing for residential gutter repair, with most repairs ranging from $150-$500. Contact us for a free estimate tailored to your specific needs."
  },
  {
    question: "How quickly can you fix my leaking gutters?",
    answer: "As your local gutter repair contractor, we offer same-day service for emergency gutter leak repair. For standard repairs, we typically complete the work within 24-48 hours of assessment."
  },
  {
    question: "Do you provide warranties on gutter repairs?",
    answer: "Yes! All our rain gutter repair services come with a comprehensive warranty. We stand behind our work with a 100% satisfaction guarantee and up to 5-year warranty on repairs."
  },
  {
    question: "What types of gutter repairs do you handle?",
    answer: "We handle all types of home gutter repair needs including gutter and downspout repair, gutter spout repair, fixing leaks, sagging gutters, roof gutter repair, and complete gutter system restoration."
  },
  {
    question: "Should I repair or replace my gutters?",
    answer: "During our professional assessment, we'll help you make the most cost-effective decision. Minor issues often only require repair, but if your gutters are over 20 years old or severely damaged, replacement might be more economical long-term."
  }
];

export default function GutterRepair() {
  return (
    <>
      <Helmet>
        <title>Fast Gutter Repair Services | Greensboro NC Experts</title>
        <meta 
          name="description" 
          content="24/7 emergency gutter repair in Greensboro. Fix leaks, sagging & damaged gutters. Licensed professionals, same-day service & guaranteed workmanship. Call now!"
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
                    Expert Gutter Repair Services Greensboro NC
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Looking for reliable gutter repair near me in Greensboro NC? Trust our experienced gutter repair contractors for all your residential gutter repair needs. From gutter leak repair to complete gutter and downspout repair, we deliver quality solutions that last.
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
                    src="\Gutter Repair Services Greensboro NC.webp"
                    alt="Professional gutter repair in Greensboro NC"
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Gutter Repair Services?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-green-50 rounded-lg">
                  <Shield className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully licensed and insured team specializing in home gutter repair.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Clock className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Fast Response</h3>
                  <p className="text-gray-600">Quick response for gutter leak repair and emergency services.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Award className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quality Materials</h3>
                  <p className="text-gray-600">Premium materials for lasting rain gutter repair solutions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Best in Greensboro Section */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Greensboro's Premier Gutter Repair Specialists</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 text-center mb-6">
                  As the leading gutter repair contractor in Greensboro, we combine 13+ years of expertise with exceptional craftsmanship. Our certified technicians specialize in all aspects of gutter cleaning and repair, from minor fixes to complete gutter and downspout repair. We're proud to be the most trusted name in residential gutter repair across the Greensboro area.
                </p>
              </div>
            </div>
          </section>

          {/* Common Problems */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Common Gutter Problems We Fix</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-green-800 mr-2" />
                    Gutter Leak Repair
                  </h3>
                  <p className="text-gray-600">Expert fixes for holes, cracks, and separating joints causing water leakage.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-green-800 mr-2" />
                    Sagging Gutters
                  </h3>
                  <p className="text-gray-600">Professional roof gutter repair and reinforcement services.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-green-800 mr-2" />
                    Gutter Spout Repair
                  </h3>
                  <p className="text-gray-600">Comprehensive downspout and gutter system restoration.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-green-800 mr-2" />
                    Improper Pitch
                  </h3>
                  <p className="text-gray-600">Expert adjustment of gutter slope for proper drainage.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Repair Process</h2>
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Thorough Inspection</h3>
                    <p className="text-gray-600">Complete assessment of your gutter system to identify all issues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Detailed Quote</h3>
                    <p className="text-gray-600">Transparent pricing with no hidden fees for your gutter repair needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Repair</h3>
                    <p className="text-gray-600">Expert repairs using quality materials and proven techniques.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">Final inspection to ensure your complete satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-green-50 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <GutterRepairServices />
          <QuoteForm />
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </>
  );
}