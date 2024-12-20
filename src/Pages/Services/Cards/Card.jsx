import React, { useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = ({
  image,
  altText,
  businessLabel,
  businessTitle,
  businessPara,
  businessPara2,
  businessPara3,
  businessPara4,
  businessPara5,
  businessPara6,
  btText1,
  btText2
}) => {
  // State for toggling "view more / view less"
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="cards-box">
      <div className="cards-inside">
        <div className="card-image-box">
          <img src={image} alt={altText} />
        </div>
        <label className="card-label">{businessLabel}</label>
        <h2 className="card-title">{businessTitle}</h2>

        {/* First paragraph */}
        <p className="card-para">{businessPara}</p>

        {/* Show additional paragraphs only when expanded */}
        {isExpanded && (
          <>
            <p className="card-para">{businessPara2}</p>
            <p className="card-para">{businessPara3}</p>
            <p className="card-para">{businessPara4}</p>
            <p className="card-para">{businessPara5}</p>
            <p className="card-para">{businessPara6}</p>
          </>
        )}

        {/* Show "View more" after the first paragraph */}
        {!isExpanded && businessPara2 && (
          <span className="view-more" onClick={toggleExpand}>
            ... View more
          </span>
        )}

        {/* Show "View less" at the end of the last paragraph */}
        {isExpanded && businessPara6 && (
          <span className="view-more" onClick={toggleExpand}>
            ... View less
          </span>
        )}

        <div className="button-box">
          <button className="primary-button">{btText1}</button>
          <Link to="https://api.whatsapp.com/send?phone=355699305604" target="_blank">
            <button className="secondary-button">{btText2}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
