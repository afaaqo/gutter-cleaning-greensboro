import Header from '../components/Header';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import FAQ from '../components/Faq';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import MobileCallButton from '../components/MobileCallButton';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Professional Gutter Cleaning in Greensboro, NC</title>
        <meta 
          name="description" 
          content="Expert gutter cleaning, maintenance, and repair services in Greensboro, NC. Prevent clogs, protect your home, and ensure proper water flow. Call today!"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <IntroSection />
          <Services />
          <About />
          <Testimonials />
          <CtaBanner />
          <div id="quote-form">
            <QuoteForm />
          </div>
          <FAQ />
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </>
  );
}

export default Home;