import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import Framer Motion
import zolaha from './../../images/shargan.jpg';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  // Variants for icon animation
  const iconVariants = {
    hidden: { rotate: 0, opacity: 0 },
    visible: { rotate: 180, opacity: 1, transition: { duration: 0.3 } },
    exit: { rotate: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className='main-navbar'>
      <div className='left-navbar'>
        <Link to='/'>
          <img className='company-logo' src={zolaha} alt='logo' />
        </Link>
      </div>

      <div className='hamburger-menu'>
        {isMobile ? (
          <motion.div
            key="close"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FaTimes className='ham-icon' onClick={handleClick} />
          </motion.div>
        ) : (
          <motion.div
            key="open"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FaBars className='ham-icon' onClick={handleClick} />
          </motion.div>
        )}
      </div>

      <div className={isMobile ? 'middle-navbar active' : 'middle-navbar'}>
        <ul className='middle-navbar-list'>
          <li className='link-item'>
            <Link to='/' className='link' onClick={() => setIsMobile(false)}>
              Home
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/about' className='link' onClick={() => setIsMobile(false)}>
              Student Journey
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/services' className='link' onClick={() => setIsMobile(false)}>
              Services
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/event' className='link' onClick={() => setIsMobile(false)}>
              Events
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/announcements' className='link' onClick={() => setIsMobile(false)}>
              Announcements
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/contact' className='link' onClick={() => setIsMobile(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
