import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      {/* <ExperienceSection /> */}
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

