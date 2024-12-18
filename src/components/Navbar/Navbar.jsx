import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import zolaha from './../../images/shargan.jpg';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className='main-navbar'>
      <div className='left-navbar'>
        <Link to='/'>
          <img className='company-logo' src={zolaha} alt='logo' />
        </Link>
      </div>
      
      <div className='hamburger-menu'>
        <FaBars className='ham-icon' onClick={handleClick} style={{ display: isMobile ? 'none' : 'block' }} />
        <FaTimes className='ham-icon' onClick={handleClick} style={{ display: isMobile ? 'block' : 'none' }} />
      </div>
      
      <div className={isMobile ? 'middle-navbar active' : 'middle-navbar'}>
        <ul className='middle-navbar-list'>
          <li className='link-item'>
            <Link to='/' className='link' onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/about' className='link' onClick={closeMenu}>
              Student Journey
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/services' className='link' onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/event' className='link' onClick={closeMenu}>
              Events
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/announcements' className='link' onClick={closeMenu}>
              Announcements
            </Link>
          </li>
          <li className='link-item'>
            <Link to='/contact' className='link' onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
