import { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileCallButton from "../components/MobileCallButton";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      if (!form.current) return;

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('EmailJS Response:', result);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        form.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Have questions about our gutter services? We're here to help! Reach out to our team for expert advice and free estimates.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="md:col-span-1 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-green-800 mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+13369650766" className="text-gray-600 hover:text-green-800">
                          (336) 965-0766
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-green-800 mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:info@guttercleaningservicegreensboronc.com" className="text-gray-600 hover:text-green-800">
                          info@guttercleaningservicegreensboronc.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-green-800 mt-1" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-600">Greensboro, NC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <input type="hidden" name="form_source" value="Contact Form" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed*
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select a service</option>
                      <option value="gutter-cleaning">Gutter Cleaning</option>
                      <option value="gutter-installation">Gutter Installation</option>
                      <option value="gutter-repair">Gutter Repair</option>
                      <option value="gutter-guards">Gutter Guards</option>
                      <option value="gutter-maintenance">Gutter Maintenance</option>
                      <option value="gutter-painting">Gutter Painting</option>
                      <option value="downspout-services">Downspout Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    ></textarea>
                  </div>
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                      Thank you for your message. We'll be in touch soon!
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                      Sorry, there was an error. Please try again or call us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${
                      isSubmitting ? 'bg-gray-400' : 'bg-green-800 hover:bg-green-700'
                    } text-white px-6 py-3 rounded-md transition-colors`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
} 