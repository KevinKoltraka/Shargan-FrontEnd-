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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22, // Slightly faster than original 0.3
        when: "beforeChildren",
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 25, // Slightly less distance than original 30
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150, // Slightly higher than original 120
        damping: 18, // Slightly lower than original 20
        duration: 0.4 // Slightly faster than original 0.5
      }
    }
  };

  return (
    <div className="brand-partners-container">
      <motion.div
        className="brand-partners"
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <a href="https://www.9dotsagency.com/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots1}
            alt="9Dots"
            variants={itemVariants}
            loading="lazy"
          />
        </a>

        <a href="https://umt.edu.al/en/home/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots2}
            alt="Unimetropolitan"
            variants={itemVariants}
            loading="lazy"
          />
        </a>

        <a href="https://mygetex.com/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots3}
            alt="Getex"
            variants={itemVariants}
            loading="lazy"
          />
        </a>

        <a href="https://www.instagram.com/flexluxor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots4}
            alt="Flex"
            variants={itemVariants}
            loading="lazy"
          />
        </a>

        <a href="https://wbu.edu.al/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots5}
            alt="WBU"
            variants={itemVariants}
            loading="lazy"
          />
        </a>

        <a href="https://www.coaching-you.it/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Dots6}
            alt="Coaching"
            variants={itemVariants}
            loading="lazy"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Partner;