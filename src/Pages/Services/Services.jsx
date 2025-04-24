import './services.css';
import Card from './Cards/Card'
import OurServices from './../../images/Logo2.png'
import Ecom from './../../images/hr2.jpg';
import Portfolio from './../../images/finance.jpg'
import Hero from '../../components/HeroSection/Hero';
import ServiceImg from './../../images/pexels-ingo-188035.jpg'
import Business from './../../images/IT.jpg'
import SEO from './../../images/socialmedia.jpg'
import SocialMedia from './../../images/sales.jpg'


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
          height: "70vh",
          width: "100%",
          backgroundImage: `url(${ServiceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      />
      <div className='our-services'>
        <h2>Our Services</h2>
      </div>

      <div className="how-we-do-cards">
        {/* Each Card is a separate instance with its own state */}
        <Card
          key="general-services" // Adding unique keys for React
          image={OurServices}
          altText="Our Services Overview"
          businessTitle="Business Consulting"
          businessPara="Expert consulting in HR, finance, IT, marketing, and sales to drive innovation, growth, compliance, and market competitiveness."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="hr-services" // Adding unique keys for React
          image={Ecom}
          altText="HR Services"
          businessTitle="Consulting for human resources"
          businessPara="HR consulting to enhance recruitment, engagement, compliance, and development through strategic, people-focused business solutions."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="financial-services" // Adding unique keys for React
          image={Portfolio}
          altText="Financial Services"
          businessTitle="Financial consultancy"
          businessPara="Financial consulting for budgeting, analysis, planning, risk, investments, and growth strategies tailored to business objectives."
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
          businessPara="IT consulting to align tech with goals through strategy, cybersecurity, software, cloud services, and project management."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="marketing-services" // Adding unique keys for React
          image={SEO}
          altText="Marketing Services"
          businessTitle="Marketing consultancy"
          businessPara="Marketing consulting that delivers brand growth, digital campaigns, strategy, research, content creation, and social media success."
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          key="sales-services" // Adding unique keys for React
          image={SocialMedia}
          altText="Sales Services"
          businessTitle="Sales consultancy"
          businessPara="Sales consulting to improve strategy, training, CRM, metrics, and team performance for consistent and scalable revenue growth."
          btText1="Learn More"
          btText2="Contact us"
        />
      </div>
    </>
  );
};

export default Services;