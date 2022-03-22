import React, { useState, useEffect } from 'react';
import styles from "../css/section_desktop_navbar.module.scss";
import LogoIcon from "../images/HackDavisLogo.svg";
import { Link } from "react-router-dom";

const Section_Desktop_Navbar = () => {
  const [shadow, setShadow] = useState(false);

  const setNavbarShadow = () => {
    if(window.scrollY > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  useEffect(()=> {
    window.addEventListener('scroll', setNavbarShadow);
    return () => {
      window.removeEventListener('scroll', setNavbarShadow);
    };
  }, []);

  return (
    <>
      <div className={`${shadow ? `${styles.scroll}` : ""} ${styles.buttonContainer}`}>
        <div className={styles.container}>
          <Link to="/"><img className={styles.circle} src={LogoIcon}></img></Link>
          <div className={styles.buttons}>
            <Link to="/" className={`${styles.button} ${window.location.href == `${window.location.origin}/` ? `${styles.bold_navitem}`: null}`}>Homepage </Link>
            <Link to="/about" className={`${styles.button} ${window.location.href == `${window.location.origin}/about` ? `${styles.bold_navitem}`: null} `}>About us</Link>
            <Link to="/teamfinder" className={`${styles.button} ${window.location.href == `${window.location.origin}/teamfinder` ? `${styles.bold_navitem}`: null} `}>Team Finder</Link>
            {/* <a className={styles.button} href="">Dashboard</a> */}
          </div>
        </div>
      </div>

    </>
  );
};

export default Section_Desktop_Navbar;