import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./partner.css";
import Dots1 from "./BrandImages/9Dots.jpg";
import Dots2 from "./BrandImages/unimetropolitan.png";
import Dots3 from "./BrandImages/wbu.png";
import Dots4 from "./BrandImages/flex.png";

const Partner = () => {
  const scrollRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Set up an Intersection Observer to detect if the component is in the viewport
  useEffect(() => {
    const currentRef = scrollRef.current;

    // Check if the element is actually within the viewport
    const checkInView = () => {
      if (currentRef) {
        const rect = currentRef.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        setInView(inViewport);
        console.log("In view:", inViewport);
      }
    };

    // Add a scroll event listener
    window.addEventListener("scroll", checkInView);
    
    // Initial check
    checkInView();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []); // Only run on mount

  return (
    <div className="brand-partners-container">
      <motion.div
        className="brand-partners"
        ref={scrollRef}
        initial={{ x: "-100%" }}
        animate={{ x: inView ? 0 : "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.img
          src={Dots1}
          alt="brand-partners"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}  // Fixed the commas here
        />
        <motion.img
          src={Dots2}
          alt="brand-partners"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}  // Fixed the commas here
        />
        <motion.img
          src={Dots3}
          alt="brand-partners"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}  // Fixed the commas here
        />
        <motion.img
          src={Dots4}
          alt="brand-partners"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}  // Fixed the commas here
        />
      </motion.div>
    </div>
  );
};

export default Partner;
