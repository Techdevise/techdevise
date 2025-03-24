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
      </Routes>
      {/* <ExperienceSection /> */}
      <Navbar />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

