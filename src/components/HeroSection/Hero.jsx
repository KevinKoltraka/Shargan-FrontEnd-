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
  style, // Accept the style prop
}) => {
  return (
    <div className="hero-section" style={style}>
      <div className="left-hero-section">
        <div className="left-hero-section-content">
          <h2>{title}</h2>
          {subtitle && <h3 className="hero-subtitle">{subtitle}</h3>}
          <p dangerouslySetInnerHTML={{ __html: description }}></p>

          {btnText && (
            <Link to={urlLink} target="_blank" className="send-message">
              <button className="button-header">
                <FaWhatsapp className="whatsapp-icon" /> {btnText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  urlLink: PropTypes.string.isRequired,
  style: PropTypes.object, // Define style prop explicitly
};

export default Hero;