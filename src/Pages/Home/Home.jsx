import AboutZolaha from "../../components/AboutZolaha/AboutZolaha";
import SharganImage from "/pexels-ingo-188035.jpg";
import Hero from "../../components/HeroSection/Hero";
import Partner from "../../components/Partners/Partner";
import AboutImage from "./../../images/mission.jpg";
import Ecom from "./../../images/students.jpg";
import Business from "./../../images/business.jpg";
import Portfolio from "./../../images/hr.jpg";
import Happy from "./../../images/getexevent.png";
import Card from "../Services/Cards/Card";
import "./home.css";
import { FiAward, FiBox } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero
        title="Your getway"
        description={`<span style="color:rgb(255, 255, 255);">to</span> study in Europe`}
        btnText="Start a conversation"
        heroImg={SharganImage}
        heroAlt="Shargan Consulting Image"
        urlLink={"https://api.whatsapp.com/send?phone=355699305604"}
        hideHeroImg={true}
        style={{
          backgroundImage: `url(${SharganImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="our-partners-homepage">
        <h2>Our Associates</h2>
        <Partner className="our-partners-homepage-brands" />
      </div>

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={AboutImage}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Our Vision & Mission"
        CompanyScene="We empower organizations with tailored, innovative, and sustainable consulting solutions to drive growth and talent development across Albania and beyond."
        CompanyDetails="As a trusted partner, we deliver expertise in HR, recruitment, and organizational development—helping clients improve performance, navigate change, and achieve long-term success."
        Checklist1="Recruitment Marketing"
        Checklist2="Talent Acquisition"
        Checklist3="Employer Branding"
        Checklist4={null}
        Checklist5={null}
        Checklist6={null}
        FaIcon={<FiBox />}
      />

      <div className="home-our-services-section">
        <div className="home-our-services">
          <h2>Some of our Services</h2>
          <Link to="/services">
            <button className="home-more-services">View More</button>
          </Link>
        </div>
        <div className="home-our-services-cards">
          <Card
            image={Ecom}
            altText="Student Mobility Services"
            businessTitle="Student Mobility Services"
            businessPara="We assist international students with study opportunities in Albania, covering guidance, applications, visas, and local support."
            btText1="Learn More"
            btText2="Contact us"
          />
          <Card
            image={Portfolio}
            altText="HR and Talent Solutions"
            businessTitle="HR and Talent Solutions"
            businessPara="We support businesses in finding, hiring, and retaining talent through recruitment, training, and performance strategies."
            btText1="Learn More"
            btText2="Contact us"
          />
          <Card
            image={Business}
            altText="Strategic Business Consulting"
            businessTitle="Strategic Business Consulting"
            businessPara="We help companies grow with tailored business plans, market entry advice, and operational strategy development services."
            btText1="Learn More"
            btText2="Contact us"
          />
        </div>
      </div>

      <AboutZolaha
        ClassNameabout_zolaha_section={
          "about-zolaha-section who-we-are-section"
        }
        AboutImg={Happy}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Shargan Consulting at GETEX Fair Education 2025 – Dubai "
        CompanyScene="We are excited to announce that Shargan Consulting will be participating in the GETEX Fair Education 2025 in Dubai, one of the most prestigious international education events, taking place from April 30 to May 2, 2025! "
        CompanyDetails=""
        FaIcon={<FiAward />}
        Checklist1="International Education Expo Dubai"
        Checklist2="Study Abroad Opportunities Albania"
        Checklist3="Global Student Recruitment"
        Checklist4={null}
        Checklist5={null}
        Checklist6={null}
        AboutBtnText="Contact us on LinkedIn"
        AboutBtnTextClassName={"button-header btn-about-zolaha"}
        urlAboutLink="https://www.linkedin.com/company/shargan-consulting-studio/"
      />
    </>
  );
};

export default Home;
