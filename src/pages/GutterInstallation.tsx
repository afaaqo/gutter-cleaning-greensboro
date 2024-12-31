import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCallButton from '../components/MobileCallButton';
import QuoteForm from '../components/QuoteForm';
import PrimeServicesgutterinstallation from '../components/PrimeServicesGutterinstallation';
import { Shield, Award, Wrench, CheckCircle, Star, Clock, Droplets, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "What is the average cost of gutter installation in Greensboro?",
    answer: "Gutter installation cost varies based on home size and material choice. Our seamless gutter installation typically ranges from $4-$8 per linear foot. Contact us for a detailed estimate tailored to your needs."
  },
  {
    question: "How long does a professional gutter installation take?",
    answer: "Most residential gutter installations are completed within 1-2 days. As experienced gutter installers, we work efficiently while ensuring quality installation."
  },
  {
    question: "Do you offer seamless gutter installation?",
    answer: "Yes! As a professional gutter installation company, we specialize in seamless gutters, custom-made on-site for a perfect fit and superior performance."
  },
  {
    question: "What materials do you use for rain gutter installation?",
    answer: "We offer various materials including aluminum, copper, and steel. Our gutter installation contractors help you choose the best option for your home and budget."
  },
  {
    question: "Do you provide warranties on new gutter installations?",
    answer: "Absolutely! All our gutter installations come with comprehensive warranties covering both materials and workmanship for your peace of mind."
  }
];

export default function GutterInstallation() {
  return (
    <>
      <Helmet>
        <title>Expert Gutter Installation Services Greensboro NC</title>
        <meta 
          name="description" 
          content="Professional Gutter Installation Services Greensboro NC by certified experts. We provide seamless gutter installation and premium materials with guaranteed satisfaction."
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
                    Professional Gutter Installation Greensboro NC
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Looking for expert gutter installation near me in Greensboro NC? Trust our professional gutter installers for top-quality seamless gutter installation and exceptional service at competitive costs.
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
                    src="\Gutter-Installation-Greensboro-NC.webp"
                    alt="Professional gutter installation in Greensboro"
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Installation Services?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-green-50 rounded-lg">
                  <Shield className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Expert Installation</h3>
                  <p className="text-gray-600">Professional gutter installation contractor with years of experience.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Star className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quality Materials</h3>
                  <p className="text-gray-600">Premium materials for lasting rain gutter installation.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <Clock className="w-12 h-12 text-green-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Timely Service</h3>
                  <p className="text-gray-600">Efficient installation process with minimal disruption.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Best in Greensboro Section */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Greensboro's Premier Gutter Installation Company</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 text-center mb-6">
                  With over 13 years of experience as trusted gutter installers in Greensboro, we've established ourselves as the leading gutter installation company in the region. Our expert contractors specialize in seamless gutter installation, delivering superior quality and unmatched customer service at competitive gutter installation costs.
                </p>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Installation Process</h2>
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">Detailed assessment and personalized recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Measurement</h3>
                    <p className="text-gray-600">Precise measurements for perfect seamless gutter installation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                    <p className="text-gray-600">Expert installation by certified gutter installers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Inspection</h3>
                    <p className="text-gray-600">Thorough testing and final quality assurance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Work and Benefits Section */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Experience the Difference with Our Installation Services</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Droplets className="w-6 h-6 text-green-800 mr-2" />
                      Superior Water Management
                    </h3>
                    <p className="text-gray-600">
                      Our seamless gutter installation ensures optimal water flow, preventing overflow and protecting your home's foundation. We carefully calculate pitch and sizing for maximum efficiency.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Settings className="w-6 h-6 text-green-800 mr-2" />
                      Custom Fabrication
                    </h3>
                    <p className="text-gray-600">
                      We custom-fabricate gutters on-site to ensure a perfect fit for your home. This eliminates seams and reduces the risk of leaks, providing superior protection and aesthetics.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Shield className="w-6 h-6 text-green-800 mr-2" />
                      Long-Term Protection
                    </h3>
                    <p className="text-gray-600">
                      Our installations include premium materials and proper fastening techniques, ensuring your gutters stay secure and functional for years to come. We back this with comprehensive warranties.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-800 mr-2" />
                      Complete System Integration
                    </h3>
                    <p className="text-gray-600">
                      We ensure proper integration with your roof and drainage system, including downspout placement and underground drainage connections for optimal water management.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Wrench className="w-6 h-6 text-green-800 mr-2" />
                      Expert Installation Team
                    </h3>
                    <p className="text-gray-600">
                      Our certified installers bring years of experience and attention to detail, ensuring every bracket, joint, and connection is properly secured and sealed.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="w-6 h-6 text-green-800 mr-2" />
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      We provide maintenance guidance and remain available for any future support needs, ensuring your investment continues to protect your home effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Services */}
          <PrimeServicesgutterinstallation />

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