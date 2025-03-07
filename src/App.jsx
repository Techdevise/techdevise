import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import ExperienceSection from './pages/ExperienceSection';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer'; // <--- lowercase 'f'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* <ExperienceSection /> */}
      <Footer />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;


