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

// Layout component that includes the navbar, footer and scroll to top
// This is defined directly in App.js - no need to create a separate file
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet /> {/* This is where your page content will appear */}
      <Footer />
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