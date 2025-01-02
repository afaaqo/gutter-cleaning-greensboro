import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileCallButton from "../components/MobileCallButton";
import QuoteForm from "../components/QuoteForm";
import { Shield, Award, Clock } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-8 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  About Gutter Cleaning Pros
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Your trusted gutter service experts in Greensboro, NC with over 13 years of dedicated experience in protecting homes.
                </p>
              </div>
              <div className="relative hidden md:block">
                <img
                  src="\Gutter Cleaning and Repair Services Greensboro NC.webp"
                  alt="Gutter Cleaning and Repair Services Greensboro NC"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-center mb-6">
                Since 2010, Gutter Cleaning Pros has been serving the Greensboro community with exceptional gutter services. What started as a small local business has grown into one of North Carolina's most trusted gutter service providers, thanks to our unwavering commitment to quality and customer satisfaction.
              </p>
              <p className="text-gray-600 text-center">
                Our team of certified professionals brings decades of combined experience to every project, ensuring that your home receives the highest standard of care and protection. We've built our reputation on reliability, expertise, and outstanding customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Gutter Cleaning Pros?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Certified Experts</h3>
                <p className="text-gray-600 text-center">Our team consists of fully licensed and insured professionals with extensive training in all aspects of gutter services.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Clock className="w-12 h-12 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Reliable Service</h3>
                <p className="text-gray-600 text-center">We pride ourselves on punctuality, efficiency, and delivering consistent quality service on every project.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Quality Guarantee</h3>
                <p className="text-gray-600 text-center">Every service comes with our satisfaction guarantee, ensuring peace of mind for all our customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 bg-green-800">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Home?</h2>
              <p className="text-green-100 mb-8">Contact us today for a free consultation and estimate</p>
              <a 
                href="tel:+13369650766"
                className="inline-flex items-center bg-white text-green-800 px-8 py-3 rounded-full hover:bg-green-100 transition"
              >
                Call (336) 965-0766
              </a>
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
} 