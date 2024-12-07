import React from 'react'
import './social.css'
import {FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Social = () => {
  return (
      <div className='social-icons'>
      <Link className='social-links' to="https://www.linkedin.com/company/shargan-consulting-studio/"  target="blank" rel="noopener noreferrer"> <FaLinkedin/> </Link> 
      <Link className='social-links'to="https://www.instagram.com/shargan_consulting/"  target="blank" rel="noopener noreferrer"> <FaInstagram/> </Link> 
      <Link className='social-links'to="https://www.tiktok.com/@sharganconsulting"  target="blank" rel="noopener noreferrer"> <FaTiktok/> </Link> 
      </div>
  )
}

export default Social