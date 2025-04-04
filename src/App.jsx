import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import GettouchForm from './components/GettouchForm';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import About from './pages/About';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import MobileDevelopment from './pages/MobileDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import WebsiteDevelopment from './pages/WebsiteDevelopment';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always on top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow w-[1920px] m-auto">
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gettouch" element={<GettouchForm />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/services/mobile-app-development" element={<MobileDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />

      {/* Toast messages */}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
