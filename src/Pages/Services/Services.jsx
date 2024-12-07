import React from 'react';
import './services.css';
import Card from './Cards/Card'
import OurServices from './../../images/OUR-SERVICES.png'
import Ecom from './../../images/ecom.gif';
import Portfolio from './../../images/portfolio.gif'
import Hero from '../../components/HeroSection/Hero';
import ServiceImg from './../../images/service.jpg'
import Business from './../../images/Projections.gif'
import SEO from './../../images/socialmedia.png'
import SocialMedia from './../../images/sales.png'


const Services = () => {
  
  return (
    <>
      <Hero
      title="Unlocking Potential through Strategic Solutions"
      description="We offer expert guidance across key business areas, including workforce optimization, financial planning, IT infrastructure, marketing strategies, and sales growth. Our services are designed to help companies enhance performance, streamline operations, and build strong brands, ensuring long-term success and adaptability in a competitive market"
      btnText="Contact Us or Scroll Down for More Information"
      heroImg={ServiceImg}
        heroAlt="Digital Success"
        urlLink={'https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83'}

      
      />
      <div className='our-services'>
      <h2>Our Services</h2>
      </div>
    

      <div className="how-we-do-cards">

      <Card
          image={OurServices}
          businessPara="Human resources, financial, IT, marketing, and sales consulting empower businesses through expert guidance."
          businessPara2="HR consulting enhances talent acquisition, employee engagement, and compliance."
          businessPara3="Financial consulting supports budgeting, risk management, and growth strategies."
          businessPara4="IT consulting drives digital transformation with cybersecurity, software development, and cloud solutions."
          businessPara5="Marketing consulting boosts visibility through strategy, digital campaigns, and branding, while sales consulting refines strategies to maximize revenue."
          businessPara6="Together, these services help businesses thrive in competitive markets."
          btText1="Learn More"
          btText2="Contact us"
        />


        <Card
          image={Ecom}
          businessPara="• Talent acquisition: Helping companies with recruitment strategies, candidate screening and hiring processes."
          businessPara2="• Employee Engagement: Advising on strategies to increase employee morale, productivity and retention."
          businessPara3="• Compensation and benefits: Analyzing and optimizing compensation packages and benefits programs."
          businessPara4="• Compliance with human resources: Ensuring compliance with labor laws and regulations."
          businessPara5="• Performance Management: Development and improvement of performance evaluation systems."
          businessPara6="• Organizational Development: Help with organizational restructuring and development."
          businessTitle="Consulting for human resources"
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          image={Portfolio}
          businessPara="• Financial analysis: Analyzing financial statements and data to provide insights and recommendations."
          businessPara2="• Budgeting and forecasting: Assists with budget creation, financial forecasting and cost management."
          businessPara3="• Financial Planning: Development of financial strategies and long-term financial plans."
          businessPara4="• Risk management: Identification and mitigation of financial risks."
          businessPara5="• Mergers and acquisitions: Providing guidance on mergers, acquisitions and due diligence."
          businessPara6="• Capital Investments: Advice on capital allocation and investment decisions."
          businessTitle="Financial consultancy"
          btText1="Learn More"
          btText2="Contact us"
        />

        </div>
      
      <div className="how-we-do-cards">

      <Card
          image={Business}
          businessPara="• IT Strategy: Developing IT strategies in line with business goals"
          businessPara2="• Technology Assessment: Assess existing IT infrastructure and recommend improvements."
          businessPara3="• Cyber ​​security: Assessment and improvement of cyber security measures."
          businessPara4="• Software Development: Help with custom software development projects."
          businessPara5="• Cloud Computing: Consulting on cloud migration and management."
          businessPara6="• IT Project Management: Management and supervision of IT projects."
          businessTitle="IT Consulting"
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          image={SEO}
          businessPara="• Marketing strategy: Development of comprehensive marketing plans and strategies."
          businessPara2="• Market research: Conduct market research to understand customer needs and market trends."
          businessPara3="• Digital Marketing: Creating and implementing online marketing campaigns."
          businessPara4="• Brand development: Building and managing brand identity."
          businessPara5="• Content Marketing: Developing content strategies and creating engaging content."
          businessPara6="• Social media marketing: Using social media for brand promotion."
          businessTitle="Marketing consultancy"
          btText1="Learn More"
          btText2="Contact us"
        />

        <Card
          image={SocialMedia}
          businessPara="• Sales strategy: Development of sales strategies and tactics."
          businessPara2="• Sales Training: Providing sales teams with training and coaching."
          businessPara3="• Sales process optimization: Improving sales processes for efficiency."
          businessPara4="• Customer Relationship Management (CRM): Implementation and optimization of CRM systems."
          businessPara5="• Sales performance measurement: Development of key performance indicators (KPI) and sales metrics."
          businessPara6="• Sales team management: Helps in team building and performance management."
          businessTitle="Sales consultancy"
          btText1="Learn More"
          btText2="Contact us"
        />
        </div>
     
        </>
  );
};
     
export default Services;
