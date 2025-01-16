import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from './styles.module.scss'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    {showButton && (
      <button onClick={handleScrollToTop} className={styles.btn}>
        <FaArrowUp />
      </button>
    )}
    </>
  );
};

export default ScrollToTop;
