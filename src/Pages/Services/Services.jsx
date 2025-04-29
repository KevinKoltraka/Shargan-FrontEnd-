import "./services.css";
import Card from "./Cards/Card";
import Hero from "../../components/HeroSection/Hero";
import PropTypes from 'prop-types'; 

// Import WebP images as primary format
import OurServicesWebP from "./../../images/Students2.webp";
import EcomWebP from "./../../images/hr2.webp";
import PortfolioWebP from "./../../images/finance.webp";
import ServiceImgWebP from "./../../images/services.webp";
import BusinessWebP from "./../../images/IT.webp";
import SEOWebP from "./../../images/socialmedia.webp";
import SocialMediaWebP from "./../../images/sales.webp";

// Import fallback images
import OurServicesFallback from "./../../images/Students2.jpg";
import EcomFallback from "./../../images/hr2.jpg";
import PortfolioFallback from "./../../images/finance.jpg";
import BusinessFallback from "./../../images/IT.jpeg";
import SEOFallback from "./../../images/socialmedia.jpg";
import SocialMediaFallback from "./../../images/sales.jpg";

// Custom image component with WebP and fallback support
const ImageWithFallback = ({ webp, fallback, alt, style }) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={fallback} alt={alt} style={style} />
    </picture>
  );
};

// Add PropTypes validation
ImageWithFallback.propTypes = {
  webp: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object
};

// Default props for optional props
ImageWithFallback.defaultProps = {
  style: {}
};

const Services = () => {
  return (
    <>
      <Hero
        title="Unlocking Potential"
        description="through Strategic Solutions"
        heroImg={ServiceImgWebP} // Pass just the image reference, not a component
        heroAlt="Digital Success"
        btnText={null}
        style={{
          height: "90vh",
          width: "100%",
          backgroundImage: `url(${ServiceImgWebP})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      />
      <div className="our-services">
        <h2>Our Services</h2>
      </div>

      <div className="how-we-do-cards">
        {/* Each Card is a separate instance with its own state */}
        <Card
          key="general-services"
          image={OurServicesWebP} // Pass just the image reference, not a component
          fallbackImage={OurServicesFallback} // Add a fallback prop if your Card component handles this
          altText="Our Services Overview"
          businessTitle="Student Mobility Services"
          businessPara="Helping students study in Albania with full local support."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="hr-services"
          image={EcomWebP}
          fallbackImage={EcomFallback}
          altText="HR Services"
          businessTitle="Consulting for HR"
          businessPara="Empower people with strategic and compliant HR guidance."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="financial-services"
          image={PortfolioWebP}
          fallbackImage={PortfolioFallback}
          altText="Financial Services"
          businessTitle="Financial consultancy"
          businessPara="Achieve stability with smart and tailored financial plans."
          btText1="Learn More"
          btText2="Contact us"
        />
      </div>

      <div className="how-we-do-cards">
        <Card
          key="it-services"
          image={BusinessWebP}
          fallbackImage={BusinessFallback}
          altText="IT Services"
          businessTitle="IT Consulting"
          businessPara="Align tech with goals using smart IT strategy."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="marketing-services"
          image={SEOWebP}
          fallbackImage={SEOFallback}
          altText="Marketing Services"
          businessTitle="Marketing consultancy"
          businessPara="Grow your brand through focused marketing and research."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="sales-services"
          image={SocialMediaWebP}
          fallbackImage={SocialMediaFallback}
          altText="Sales Services"
          businessTitle="Sales consultancy"
          businessPara="Boost revenue with data-driven and skilled saleswork."
          btText1="Learn More"
          btText2="Contact us"
        />
      </div>
    </>
  );
};

export default Services;