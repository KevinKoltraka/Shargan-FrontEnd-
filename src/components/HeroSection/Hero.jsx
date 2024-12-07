// Hero.js
import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = ({ title, subtitle, description, btnText, heroImg, heroAlt, urlLink, newImage, style,}) => {
  return (
    <>
      <div className="hero-section">
        <div className="left-hero-section">
          <div className="left-hero-section-content">
            <h2>{title}</h2>
            {/* Render subtitle if provided */}
            {subtitle && <h3 className="hero-subtitle">{subtitle}</h3>}
            <p>{description}</p>
            <Link to={urlLink} target='_blank' className='send-message'>
              <button className="button-header">
                <FaWhatsapp className='whatsapp-icon' /> {btnText}
              </button>
            </Link>
          </div>
        </div>
        <div className="right-hero-section">
          <div className="right-hero-section-content">
            {/* Apply the passed style to the main hero image */}
            <img src={heroImg} alt={heroAlt} style={style} /> {/* Here */}
            
            {/* Optional Static JPG Image to Replace Lottie */}
            {newImage && <img src={newImage} alt="Static replacement logo" className="replacement-image" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
