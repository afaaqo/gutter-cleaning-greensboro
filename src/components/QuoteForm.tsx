import { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function QuoteForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    <section id="quote" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-green-800">Get Free Quote Instantly</h2>
            <p className="text-xl text-gray-700 mb-8">
              Protect your home from costly water damage - Get your personalized quote today and save on professional gutter services!
            </p>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form_source" value="Quote Form" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed*
                </label>
                <select
                  name="service"
                  required
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! We'll contact you soon with your quote.
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
                } text-white py-3 px-6 rounded-lg transition-colors font-semibold`}
              >
                {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
              </button>
            </form>
          </div>
          
          <div className="hidden md:block">
            <img
              src="Gutter-cleaning-services-greensboro-nc.webp"
              alt="Professional gutter cleaning service greensboro nc"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}