import Hero from "../../components/HeroSection/Hero";
import "./about.css";
import uiDesign from "./../../images/UI-Design.jpg";
import OfficeTrans from "./../../images/info&research.jpg";
import StudentVisa from "./../../images/application.jpg";
import TransferStudent from "./../../images/transfer.png";
import StudentExperience from "./../../images/studentexperience.png";
import AfterGraduate from "./../../images/AfterGraduation.png";
import Mission from "./../../images/ourmission.png";
import AboutZolaha from "../../components/AboutZolaha/AboutZolaha";
import { FiCheck } from "react-icons/fi";
const About = () => {
  return (
    <div id="About">
      <Hero
        title="Student Journey"
        description={`<span style="color:rgb(255, 255, 255);"></span> Albania`}
        btnText="Get in Touch"
        heroImg={uiDesign}
        heroAlt="Digital Success"
        urlLink={
          "https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83"
        }
        imgClass="hero-img-custom-style"
        style={{
          height: "90vh",
          width: "100%",
          backgroundImage: `url(${uiDesign})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={OfficeTrans}
        imgClass="hero-img-custom-style"
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Information and Research"
        CompanyScene="Guidance on Academic Programs, Living Costs, and Scholarships in Albania"
        CompanyDetails={
          "Students initially seek information on academic programs, universities, cost of living, and scholarship opportunities in Albania. Shargan Consulting is present to represent these institutions in this regard."
        }
        FaIcon={<FiCheck />}
        Checklist1="Academic programs in Albania"
        Checklist2="Universities in Albania"
        Checklist3="Cost of living in Albania for students"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={StudentVisa}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Application and Admission"
        CompanyScene="From Selecting a Program to Securing a Student Visa"
        CompanyDetails={
          "Once the student has decided on the program and university, they proceed to the beginning of the application, where they submit the required documents. After that, they wait for the admission process and any additional documentation, such as a student visa."
        }
        FaIcon={<FiCheck />}
        Checklist1="University application process"
        Checklist2="Student admission requirement"
        Checklist3="Required documents for admission"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={TransferStudent}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Preparation for Transfer"
        CompanyDetails={
          "This step includes preparation for transfer to Albania, including documentation, residence, and practical details for living in a new country."
        }
        FaIcon={<FiCheck />}
        Checklist1="Albania relocation guide"
        Checklist2="Moving to Albania documentation"
        Checklist3="Albania residency requirements"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={StudentExperience}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Academic and Social Experiences"
        CompanyDetails={
          "Once they arrive, students experience academic and social life in Albania. This includes attending lectures, receiving support from faculty, integrating with classmates, and exploring Albanian culture."
        }
        FaIcon={<FiCheck />}
        Checklist1="Studying in Albania experience"
        Checklist2="Albanian university life"
        Checklist3="Albanian cultural integration"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={AfterGraduate}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Graduation and Next Steps"
        CompanyDetails={
          "After completing their studies, students can choose to continue their advanced studies, seek employment in Albania or return to their home country to pursue a career."
        }
        FaIcon={<FiCheck />}
        Checklist1="Post-graduation options in Albania"
        Checklist2="Career opportunities for graduates in Albania"
        Checklist3="Advanced studies in Albania"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={Mission}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="The mission of Student Journey Albania"
        CompanyDetails={
          "To facilitate the academic and cultural journey of international students to Albania, offering full support at every step of their educational path. We aim to promote Albania as an attractive destination for higher education, providing reliable information, personalized services and a rich experience that helps students get the most out of their studies and life in Albania."
        }
      />
    </div>
  );
};

export default About;
