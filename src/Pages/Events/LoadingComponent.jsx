import React from 'react';
import './LoadingComponent.css';
import logo from '../../images/Logo.png'; // Adjust the path to your logo

const LoadingComponent = () => {
  return (
    <div className="enhanced-loader-container">
      <img src={logo} alt="Logo" className="loader-logo" />
      <div className="loader-text">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
