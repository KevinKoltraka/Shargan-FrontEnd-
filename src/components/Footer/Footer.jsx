import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email) {
      openGmailCompose();
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const openGmailCompose = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@sharganconsulting.com`;

    const newWindow = window.open(gmailLink, '_blank');

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      alert("Popup blocked! Please allow popups for this site to proceed.");
    }
  };
  return (
    <div className="footer-section">
      <div className="footer-section-box">
        <div className="mobile-div">
          <div className="mobile-footer-links">
            <h3>Quick Links</h3>
            <div className="link-in-footer">
              <Link to="/" className="link">Home</Link>
              <Link to="/about" className="link">About</Link>
              <Link to="/contact" className="link">Contact</Link>
              <Link to="/services" className="link">Services</Link>
            </div>
          </div>
          <div className="mobile-footer-links">
            <h3>Service</h3>
            <div className="link-in-footer">
              <li>Marketing Consultancy</li>
              <li>Sales Consultancy</li>
              <li>IT Consultancy</li>
              <li>Human Resources Consultancy</li>
            </div>
          </div>
        </div>
        <div className="mobile-div">
          <div className="mobile-footer-links">
            <h3>Company</h3>
            <div className="link-in-footer">
              <Link to="/terms" className="link"><li>Terms</li></Link>
              <Link to="/disclaimer" className="link"><li>Disclaimer</li></Link>
              <Link to="/privacy-policy" className="link"><li>Privacy Policy</li></Link>
            </div>
          </div>
          <div className="mobile-footer-links">
            <h3>Social Links</h3>
            <div className="link-in-footer">
              <Link to="https://www.instagram.com/shargan_consulting/" target="_blank" className="link"><li>Instagram</li></Link>
              <Link to="https://api.whatsapp.com/send?phone=355699305604" target="_blank" className="link"><li>Whatsapp</li></Link>
              <Link to="https://www.linkedin.com/in/klodjan-shaqiri-80536263/" target="_blank" className="link"><li>LinkedIn</li></Link>
              <Link to="https://www.tiktok.com/@sharganconsulting" target="_blank" className="link"><li>TikTok</li></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-newsletter">
        <h3>Contact Us</h3>
        <input
          type="email"
          id="email"
          name="e-mail"
          placeholder="Enter Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleSubscribe}>Email Us</button>
      </div>

      <div className="copyright-section">
        <hr />
        <p>Copyright - Shargan Consulting - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
