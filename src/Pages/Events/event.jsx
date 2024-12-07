import React from "react";
import Hero from "../../components/HeroSection/Hero";
import "./event.css";
import uiDesign from "./../../images/3.jpeg";
import OfficeTrans from "./../../images/event1.heic";
import StudentVisa from "./../../images/event2.jpg";
import TransferStudent from "./../../images/event3.jpg";
import StudentExperience from "./../../images/event4.jpg";
import AfterGraduate from "./../../images/event5.jpg";
import Mission from "./../../images/event6.jpg";
import AboutZolaha from "../../components/AboutZolaha/AboutZolaha";
const Events = () => {
  return (
    <div id="Events">
      <Hero
        title="Upcoming Events"
        subtitle="Discover, Learn, Connect"
        description="Join us at our upcoming events designed to inspire, educate, and connect. Whether you’re looking to gain insights, network with industry leaders, or spark new ideas, our events are tailored to bring meaningful experiences to life."
        btnText="Register Now!"
        urlLink={
          "https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83"
        }
        heroImg={uiDesign}
        heroAlt="Digital Success"
        imgClass="hero-img-custom-style"
        style={{
          width:
            (window.innerWidth >= 1200 && window.innerWidth <= 1440) ||
            window.innerWidth < 1999
              ? "70%"
              : "auto",
          height: "auto",
          marginLeft:
            window.innerWidth >= 1200 && window.innerWidth <= 1440
              ? "-70px"
              : "0",
          display: "block",
        }}
      />
      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={OfficeTrans}
        imgClass="hero-img-custom-style"
        AboutZolahaImage="about-zolaha-img"
        CompanyScene="Topic: Little talk about the real meaning of marketing and strategy"
        CompanyDetails={
          "The next organization is a collaboration with Mr. Gjergj Mero Creative Director. Participation in the training is limited, we welcome you"
        }
        Checklist1="👉 Contact us for more information!"
        Checklist2="📞 Contact: +355 69 930 5604"
        Checklist3="📧 Email: info@sharganconsulting.com"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={StudentVisa}
        AboutZolahaImage="about-zolaha-img"
        CompanyScene="Topic: The executive presence of the Woman (not masculinized) at work, lecturer Dr.Matilda Likaj"
        CompanyDetails={
          "At the end of the training, the participants will be provided with a certificate"
        }
        Checklist1="👉 Contact us for more information!"
        Checklist2="📞 Contact: +355 69 930 5604"
        Checklist3="📧 Email: info@sharganconsulting.com"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={TransferStudent}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="During this month, Shargan Consulting will conduct trainings on two different topics:"
        CompanyDetails={
          "• The executive presence of the Woman (not masculinized) at work, lecturer Dr.Matilda Likaj"
        }
        CompanyDetails2={"• Paradoxical leadership, lecturer Klodjan Shaqiri"}
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={StudentExperience}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Topic: Staff turnover, how to analyze and how to stop it"
        CompanyDetails={
          "📢 Shargan Consulting's next training is here! 🚀 Join us on 24 February 2024 at 11:00 am for an engaging session on 'Analysis and Prevention of Staff Turnover'. 📊 In this 90-minute training, you will learn the most effective strategies to analyze and curb staff turnover in your organization. 💼 Don't miss this opportunity to develop your skills in human resource management! Register now!"
        }
        Checklist1="👉 Contact us for more information!"
        Checklist2="📞 Contact: +355 69 930 5604"
        Checklist3="📧 Email: info@sharganconsulting.com"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={AfterGraduate}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Topic: Human resources training"
        CompanyDetails={
          "🚀 Career Advancement! 🌐👩‍💼 Rich training in human resources training, combined with theoretical and practical training. 📚✨ Ready to take on the challenges of the labor market and transform knowledge into professional success. 🎓🌟 Prepare for the path to success and enter the job market with confidence! 💪🏽🔝"
        }
        Checklist1="👉 Contact us for more information!"
        Checklist2="📞 Contact: +355 69 930 5604"
        Checklist3="📧 Email: info@sharganconsulting.com"
      />

      <AboutZolaha
        ClassNameabout_zolaha_section={"about-zolaha-section"}
        AboutImg={Mission}
        AboutZolahaImage="about-zolaha-img"
        CompanyName="Topic: Introduction to the world of work and the right approach to follow in the first steps"
        CompanyDetails={"This seminar will focus on presenting the first steps of employment for recent graduates or those nearing graduation, along with an overview of practices followed in different companies. The training will begin by showcasing the most efficient ways of presenting oneself in a job interview and providing basic knowledge about post-selection rights and duties arising from a formal employment contract. We will discuss the best ways to protect employees' rights to maintain personal and professional integrity. Additionally, the onboarding process (recognition and inclusion in work processes), critical for first steps in any role, will be explained to provide clear directives for professional development. Based on these topics, questions and answers will be developed as desired."}
        Checklist1="👉 Contact us for more information!"
        Checklist2="📞 Contact: +355 69 930 5604"
        Checklist3="📧 Email: info@sharganconsulting.com"
      />
    </div>
  );
};

export default Events;
