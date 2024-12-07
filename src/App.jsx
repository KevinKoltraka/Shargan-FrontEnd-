import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Error from './Pages/Error/Error';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import Terms from './CompanyPages/Terms/Terms';
import Disclaimer from './CompanyPages/Terms/Disclaimer/Disclaimer';
import Privacy from './CompanyPages/Terms/Privacy/Privacy';
import ScrollToTop from './components/Scroll/ScrollToTop';
import Events from './Pages/Events/event';
import Announcement from './Pages/Announcements/announcements';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/announcements" element={<Announcement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
