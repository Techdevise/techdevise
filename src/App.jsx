import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import About from './pages/About';
// import ExperienceSection from './pages/ExperienceSection';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer'; 
import MobileDevelopment from './pages/MobileDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import WebsiteDevelopment from './pages/WebsiteDevelopment';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/services/mobile-app-development" element={<MobileDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        </Routes>
      {/* <ExperienceSection /> */}
      <Navbar />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

