import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import GutterGuards from './pages/GutterGuards';
import GutterRepair from './pages/GutterRepair';
import GutterPainting from './pages/GutterPainting';
import GutterMaintenance from './pages/GutterMaintenance';
import GutterInstallation from './pages/GutterInstallation';
import GutterDownspoutInstallation from './pages/Gutterdownspoutinstallation';
import ScrollToTop from './components/ScrollToTop';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './config/emailjs';

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* Service Routes */}
        <Route path="/gutter-guards" element={<GutterGuards />} />
        <Route path="/gutter-repair" element={<GutterRepair />} />
        <Route path="/gutter-painting" element={<GutterPainting />} />
        <Route path="/gutter-maintenance" element={<GutterMaintenance />} />
        <Route path="/gutter-installation" element={<GutterInstallation />} />
        <Route path="/gutter-downspout-installation" element={<GutterDownspoutInstallation />} />

        {/* Add a catch-all route for 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl">Page Not Found</h1>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;