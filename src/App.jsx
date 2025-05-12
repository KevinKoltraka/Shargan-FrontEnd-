import './App.css';
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';
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
import { TechConferenceDetail } from './Pages/Events/TechConferenceDetail';
import Announcement from './Pages/Announcements/announcements';
import { FaWhatsapp } from "react-icons/fa";


const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/355699305604"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '65px',
          height: '65px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          zIndex: 1000,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaWhatsapp size={40} color="#fff" />
      </a>

    </>
  );
};

// Create router with layout
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Events />} />
      <Route path="/event/:eventId" element={<TechConferenceDetail />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/announcements" element={<Announcement />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;