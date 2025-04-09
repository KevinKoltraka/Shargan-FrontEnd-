import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./partner.css";
import Dots2 from "./BrandImages/unimetropolitan.png";
import Dots3 from "./BrandImages/getex.png";
import Dots4 from "./BrandImages/flex.png";
import Dots5 from "./BrandImages/wbu.png";
import Dots6 from "./BrandImages/coachingLogo.jpg";
import Dots1 from "./BrandImages/9Dots.jpg";

const Partner = () => {
  const scrollRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = scrollRef.current;

    const checkInView = () => {
      if (currentRef) {
        const rect = currentRef.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        setInView(inViewport);
      }
    };

    window.addEventListener("scroll", checkInView);
    checkInView();

    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <div className="brand-partners-container">
      <motion.div
        className="brand-partners"
        ref={scrollRef}
        initial={{ x: "-100%" }}
        animate={{ x: inView ? 0 : "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <a href="https://www.9dotsagency.com/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots1}
            alt="9Dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </a>

        <a href="https://umt.edu.al/en/home/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots2}
            alt="Unimetropolitan"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
        </a>

        <a href="https://mygetex.com/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots3}
            alt="Getex"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          />
        </a>

        <a href="https://www.instagram.com/flexluxor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots4}
            alt="Flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          />
        </a>

        <a href="https://wbu.edu.al/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots5}
            alt="WBU"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          />
        </a>

        <a href="https://www.coaching-you.it/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots6}
            alt="Coaching"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Partner;
