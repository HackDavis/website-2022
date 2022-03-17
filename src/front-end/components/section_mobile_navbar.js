import React, { useState, useEffect } from 'react';
import styles from "../css/section_mobile_navbar.module.scss";
import Hamburger from "../images/HamburgerMenu.svg";
import MLHBanner from "../images/MLHBanner.svg";
import LogoIcon from "../images/HackDavisLogo.svg";
import { Link } from "react-router-dom";

const Section_Mobile_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(true);

  const setNavbarLogo = () => {
    if(window.scrollY > 0) {
      setLogo(false);
    } else {
      setLogo(true);
    }
  };
  useEffect(()=> {
    window.addEventListener('scroll', setNavbarLogo);
    return () => {
      window.removeEventListener('scroll', setNavbarLogo);
    };
  }, []);

  return (
    <>
      <a href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white" target="_blank"><img src={MLHBanner} className={`${logo ? "" : `${styles.hide}`} ${isOpen ? `${styles.hide}` : ""} ${styles.mlhbanner}`}/></a>
      <div className={`d-flex justify-content-between align-items-center ${logo ? "" : isOpen ? "" : `${styles.scroll}`} ${styles.container}`}>
        { logo ?
          isOpen ? <Link to="/"><img src={LogoIcon} className={styles.logo} /></Link>: <div className={styles.logo}/> 
          : <Link to="/"><img src={LogoIcon} className={styles.logo} /></Link>
        }
        <img className={`${styles.hamburger}`} src={Hamburger} onClick={() => setIsOpen(!isOpen)}/>
      </div>
        <div className={`${styles.menuNav} ${isOpen ? `${styles.showMenu}` : ""}`}>
          <div className={styles.buttons}>
            <p><Link to="/" className={`${window.location.href == `${window.location.origin}/` ? `${styles.bold_navitem}`: `${styles.button}`}`} >Homepage</Link></p>
            <p><Link to="/about" className={`${window.location.href == `${window.location.origin}/about` ? `${styles.bold_navitem}`: `${styles.button}`}`}>About us</Link></p>
            {/* <a className={styles.button} href="">Dashboard</a> */}
          </div>
        </div>
      <div className={`${isOpen ? `${styles.removeBg}` : ""}`}/>
    </>
  );
};

export default Section_Mobile_Navbar;