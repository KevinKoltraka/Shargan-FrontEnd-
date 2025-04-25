import "./services.css";
import Card from "./Cards/Card";
import OurServices from "./../../images/Students2.jpg";
import Ecom from "./../../images/hr2.jpg";
import Portfolio from "./../../images/finance.jpg";
import Hero from "../../components/HeroSection/Hero";
import ServiceImg from "./../../images/services.png";
import Business from "./../../images/IT.jpeg";
import SEO from "./../../images/socialmedia.jpg";
import SocialMedia from "./../../images/sales.jpg";

const Services = () => {
  return (
    <>
      <Hero
        title="Unlocking Potential"
        description="through Strategic Solutions"
        heroImg={ServiceImg}
        heroAlt="Digital Success"
        btnText={null}
        style={{
          height: "90vh",
          width: "100%",
          backgroundImage: `url(${ServiceImg})`,
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
          key="general-services" // Adding unique keys for React
          image={OurServices}
          altText="Our Services Overview"
          businessTitle="Student Mobility Services"
          businessPara="Helping students study in Albania with full local support."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="hr-services" // Adding unique keys for React
          image={Ecom}
          altText="HR Services"
          businessTitle="Consulting for HR"
          businessPara="Empower people with strategic and compliant HR guidance."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="financial-services" // Adding unique keys for React
          image={Portfolio}
          altText="Financial Services"
          businessTitle="Financial consultancy"
          businessPara="Achieve stability with smart and tailored financial plans."
          btText1="Learn More"
          btText2="Contact us"
        />
      </div>

      <div className="how-we-do-cards">
        <Card
          key="it-services" // Adding unique keys for React
          image={Business}
          altText="IT Services"
          businessTitle="IT Consulting"
          businessPara="Align tech with goals using smart IT strategy."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="marketing-services" // Adding unique keys for React
          image={SEO}
          altText="Marketing Services"
          businessTitle="Marketing consultancy"
          businessPara="Grow your brand through focused marketing and research."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="sales-services" // Adding unique keys for React
          image={SocialMedia}
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
