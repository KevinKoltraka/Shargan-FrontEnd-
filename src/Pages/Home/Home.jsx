
import AboutZolaha from '../../components/AboutZolaha/AboutZolaha';
import SharganImage from './../../images/shargan2.jpg';
import Hero from '../../components/HeroSection/Hero';
import Partner from '../../components/Partners/Partner';
import AboutImage from './../../images/mission.jpg';
import Ecom from './../../images/ecom.gif';
import Business from './../../images/Projections.gif';
import Portfolio from './../../images/portfolio.gif';
import Happy from './../../images/ourvision.jpg';
import Card from '../Services/Cards/Card';
import './home.css';
import { FiAward, FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <>
      <Hero
        title="Shargan Consulting Agency"
        description="Shargan Consulting enhances business success with customized HR solutions, recruitment, and leadership development to empower organizations in a competitive market."
        btnText="Start a conversation"
        heroImg={SharganImage} // Main Hero Image
        heroAlt="Shargan Consulting Image"
        staticImage={'./../../images/animationReplacement.jpg'} // New static image
        urlLink={'https://api.whatsapp.com/send?phone=355699305604'}
      />

      <div className='our-partners-homepage'>
        <h2>Our Associates</h2>
        <Partner className="our-partners-homepage-brands"/>
      </div>
    
      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={AboutImage}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Our Mission"
        CompanyScene="Empowering Organizations with Tailored Consulting Solutions for Sustainable Growth and Talent Development."
        CompanyDetails="To provide customized and innovative consulting solutions that help our clients improve performance, develop their human capacities and achieve long-term sustainability. We aim to be strategic partners in the transformation process of organizations, offering specialized expertise in human resource management, training, mentoring and recruitment, always adapting to the specific needs of each client."
        Checklist1="Recruitment Marketing Services"
        Checklist2="Talent Acquisition Solutions"
        Checklist3="Employer Branding Agency"
        Checklist4="Digital Recruitment Marketing"
        Checklist5="HR Marketing Strategies"
        Checklist6="Candidate Engagement Services"
        AboutBtnText="Follow Us on Instagram"  
        FaIcon={<FiBox />}
        AboutBtnTextClassName={'button-header btn-about-zolaha'}
        urlAboutLink="https://www.instagram.com/shargan_consulting/"
      />

      <div className="home-our-services-section">
        <div className="home-our-services">
          <h2>Some of our Services</h2>
          <Link to='/services'><button className='home-more-services'>View More</button></Link>
        </div>
        <div className='home-our-services-cards'>
          <Card
            image={Ecom}
            altText="Human resources consultancy"
            businessPara="We offer full HR support, including hiring, engagement, compensation, compliance, and performance management."
            businessTitle="Human resources consultancy"
            btText1="Learn More"
            btText2="Contact us"
          />
          <Card
            image={Portfolio}
            altText="Financial consultancy"
            businessTitle="Financial consultancy"
            businessPara="We offer financial analysis, budgeting, forecasting, risk management, M&A guidance, and capital investment advice."
            btText1="Learn More"
            btText2="Contact us"
          />
          <Card
            image={Business}
            altText="IT consultancy"
            businessTitle="IT consultancy"
            businessPara="We offer IT strategy, tech assessment, cybersecurity, custom software, cloud migration, and project management."
            btText1="Learn More"
            btText2="Contact us"
          />
        </div>
      </div>

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section who-we-are-section"}
        AboutImg={Happy}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Our Vision"
        CompanyScene="Empowering Growth with Integrity and Innovation Across Albania and Beyond"
        CompanyDetails="To become the leading consulting company in Albania and the region, known for its professionalism, integrity and positive impact on the growth of organizations. We aspire to create an environment where businesses and individuals can reach their full potential through sustainable and innovative solutions that meet today's market challenges."
        FaIcon={<FiAward />}
        Checklist1="Leading consulting company"
        Checklist2="Professional business growth"
        Checklist3="Innovative solutions"
        Checklist4="Sustainable growth strategies"
        Checklist5="Organizational development"
        Checklist6="Albania business consulting"
        AboutBtnText="Contact us on LinkedIn"
        AboutBtnTextClassName={'button-header btn-about-zolaha'}
        urlAboutLink="https://www.linkedin.com/company/shargan-consulting-studio/"
      />
    </>
  );
};

export default Home;
