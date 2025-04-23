import "./aboutzolaha.css";
import PropTypes from "prop-types";

const AboutZolaha = ({
  FaIcon,
  ClassNameabout_zolaha_section,
  AboutZolahaImage,
  AboutImg,
  CompanyName,
  CompanyScene,
  CompanyDetails,
  CompanyDetails2,
  Checklist1,
  Checklist2,
  Checklist3,
  Checklist4,
  Checklist5,
  Checklist6,
}) => {
  return (
    <>
      <div className={ClassNameabout_zolaha_section}>
        <div className="left-about-zolaha-section">
          <img src={AboutImg} className={AboutZolahaImage} alt="about-us" />
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
              <p>
                {" "}
                {FaIcon} {Checklist1}
              </p>
              <p>
                {" "}
                {FaIcon} {Checklist2}
              </p>
              <p>
                {" "}
                {FaIcon} {Checklist3}
              </p>
            </div>
            <div className="checklist-company">
              <p>
                {" "}
                {Checklist4 && (
                  <p>
                    {" "}
                    {FaIcon} <li>{Checklist4}</li>{" "}
                  </p>
                )}
              </p>
              <p>
                {" "}
                {Checklist5 && (
                  <p>
                    {" "}
                    {FaIcon} <li>{Checklist5}</li>{" "}
                  </p>
                )}
              </p>
              <p>
                {" "}
                {Checklist6 && (
                  <p>
                    {" "}
                    {FaIcon} <li>{Checklist6}</li>{" "}
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutZolaha.propTypes = {
  FaIcon: PropTypes.element,
  ClassNameabout_zolaha_section: PropTypes.string,
  AboutZolahaImage: PropTypes.string,
  AboutImg: PropTypes.string,
  CompanyName: PropTypes.string,
  CompanyScene: PropTypes.string,
  CompanyDetails: PropTypes.string,
  CompanyDetails2: PropTypes.string,
  Checklist1: PropTypes.string,
  Checklist2: PropTypes.string,
  Checklist3: PropTypes.string,
  Checklist4: PropTypes.string,
  Checklist5: PropTypes.string,
  Checklist6: PropTypes.string,
  AboutBtnText: PropTypes.string,
  AboutBtnTextClassName: PropTypes.string,
  urlAboutLink: PropTypes.string,
};

export default AboutZolaha;
