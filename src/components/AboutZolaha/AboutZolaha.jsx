import React from 'react'
import './aboutzolaha.css'

const AboutZolaha = ({ FaIcon, ClassNameabout_zolaha_section, AboutZolahaImage, AboutImg, CompanyName, CompanyScene, CompanyDetails, CompanyDetails2, Checklist1, Checklist2, Checklist3, Checklist4, Checklist5, Checklist6,AboutBtnText,AboutBtnTextClassName, urlAboutLink}) => {
  return (
      <>
          <div className={ClassNameabout_zolaha_section}>
          
              <div className="left-about-zolaha-section">
              <img src={AboutImg} className={AboutZolahaImage} alt='about-us'/>
              </div>  
              <div className="right-about-zolaha-section">
                  <div className="about-company-name">
                  <h3>{CompanyName}</h3>
                  </div>

                  <div className="about-company-scene">
                  <h2>{CompanyScene}</h2>
                  </div>
                  <div className="about-company-details">
                      <p>{CompanyDetails}</p>
                      <p>{CompanyDetails2}</p>
                  </div>
                  <div className="company-facilities">
                      <div className="checklist-company">
                     <p> {FaIcon}  {Checklist1}</p>
                     <p>  {FaIcon} {Checklist2}</p>
                     <p>  {FaIcon}  {Checklist3}</p>
                      </div>
                      <div className="checklist-company">
                          <p> {FaIcon}  {Checklist4} </p>
                      <p> {FaIcon}  {Checklist5}</p>
                      <p> {FaIcon}  {Checklist6}</p>
                      </div>
                  </div>
                  

              </div>  
              
              
          </div>
       
          


      </>

    )
}

export default AboutZolaha