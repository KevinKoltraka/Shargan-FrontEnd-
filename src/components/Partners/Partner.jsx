import React, { useRef } from "react";
import "./partner.css";
import Dots1 from "./BrandImages/9Dots.jpg";
import Dots2 from "./BrandImages/unimetropolitan.png";
import Dots3 from "./BrandImages/wbu.png";
import Dots4 from "./BrandImages/flex.png";

const Partner = () => {
  const scrollRef = useRef(null);

  return (
    <div className="brand-partners-container">
      <div className="brand-partners" ref={scrollRef}>
        <img src={Dots1} alt="brand-partners" />
        <img src={Dots2} alt="brand-partners" />
        <img src={Dots3} alt="brand-partners" />
        <img src={Dots4} alt="brand-partners" />
      </div>
    </div>
  );
};

export default Partner;