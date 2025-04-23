import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./hero.css";
import PropTypes from "prop-types";

const Hero = ({
  title,
  subtitle,
  description,
  btnText,

  urlLink,

}) => {
  return (
    <>
      <div className="hero-section">
      <div className="left-hero-section">
          <div className="left-hero-section-content">
            <h2>{title}</h2>
            {/* Render subtitle if provided */}
            {subtitle && <h3 className="hero-subtitle">{subtitle}</h3>}
            <p dangerouslySetInnerHTML={{ __html: description }}></p>

            <Link to={urlLink} target="_blank" className="send-message">
              <button className="button-header">
                <FaWhatsapp className="whatsapp-icon" /> {btnText}
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  heroImg: PropTypes.string.isRequired,
  hideHeroImg: PropTypes.bool,
  heroAlt: PropTypes.string.isRequired,
  urlLink: PropTypes.string.isRequired,
  newImage: PropTypes.string,
  style: PropTypes.object, // Keep the style prop flexible
};

export default Hero;
