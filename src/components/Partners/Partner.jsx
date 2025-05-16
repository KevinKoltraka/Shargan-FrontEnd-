import { useRef, useEffect } from "react";
import "./partner.css";
import Dots1 from "./BrandImages/9DOTS.svg";
import Dots2 from "./BrandImages/unimetropolitan.svg";
import Dots3 from "./BrandImages/getex.svg";
import Dots4 from "./BrandImages/NexgenLogo.png"
import Dots5 from "./BrandImages/flex.svg";
import Dots6 from "./BrandImages/wbu.svg";
import Dots7 from "./BrandImages/coachingLogo.svg";

const Partner = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollerContent = scrollerRef.current;
    const scrollerInner = scrollerContent.querySelector(".scroller-inner");

    // Check if we already cloned items (prevent duplicating on hot reload)
    const alreadyCloned = scrollerInner.getAttribute("data-cloned") === "true";
    if (alreadyCloned) return;

    // Clone the logos to create the infinite effect - duplicate the entire set multiple times
    const logoElements = Array.from(scrollerInner.children);
    
    // Adding multiple copies for smoother infinite scrolling
    for (let i = 0; i < 3; i++) {
      logoElements.forEach(item => {
        const clone = item.cloneNode(true);
        scrollerInner.appendChild(clone);
      });
    }

    // Mark as cloned to prevent duplicating on hot reload
    scrollerInner.setAttribute("data-cloned", "true");

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="partners-section">
      <div className="scroller" ref={scrollerRef}>
        <div className="scroller-inner">
          <a href="https://www.9dotsagency.com/" target="_blank" rel="noopener noreferrer" className="partner-item">
            <img src={Dots1} alt="9Dots" loading="lazy" />
          </a>

          <a href="https://umt.edu.al/en/home/" target="_blank" rel="noopener noreferrer" className="partner-item">
            <img src={Dots2} alt="Unimetropolitan" loading="lazy" />
          </a>

          <a href="https://mygetex.com/" target="_blank" rel="noopener noreferrer" className="partner-item">
            <img src={Dots3} alt="Getex" loading="lazy" />
          </a>

           <a href="/" target="_blank" rel="noopener noreferrer" className="partner-item">
            <img src={Dots4} alt="NextGen" loading="lazy" />
          </a>

          <a href="https://www.instagram.com/flexluxor" target="_blank" rel="noopener noreferrer" className="partner-item">
            <img src={Dots5} alt="Flex" loading="lazy" />
          </a>

          <a href="https://wbu.edu.al/" target="_blank" rel="noopener noreferrer" className="partner-item">
            <img src={Dots6} alt="WBU" loading="lazy" />
          </a>

          <a href="https://www.coaching-you-group.com/" target="_blank" rel="noopener noreferrer" className="partner-item">
            <img src={Dots7} alt="Coaching" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;