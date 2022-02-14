import React, { useState } from 'react';
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
  window.addEventListener('scroll', setNavbarLogo);
  return (
    <>
      <img src={MLHBanner} className={`${logo ? "" : `${styles.hide}`} ${isOpen ? `${styles.hide}` : ""} ${styles.mlhbanner}`}/>
      <div className={`d-flex justify-content-between align-items-center ${logo ? "" : isOpen ? "" : `${styles.scroll}`} ${styles.container}`}>
        { logo ?
          isOpen ? <Link to="/"><img src={LogoIcon} className={styles.logo} /></Link>: <div className={styles.logo}/> 
          : <Link to="/"><img src={LogoIcon} className={styles.logo} /></Link>
        }
        <img className={`${styles.hamburger}`} src={Hamburger} onClick={() => setIsOpen(!isOpen)}/>
        <div className={`${styles.menuNav} ${isOpen ? `${styles.showMenu}` : ""}`}>
          <div className={styles.buttons}>
            <Link to="/" className={styles.button} >Homepage</Link>
            <Link to="/about" className={styles.button}>About us</Link>
            {/* <a className={styles.button} href="">Dashboard</a> */}
          </div>
        </div>
      </div>
      <div className={`${isOpen ? `${styles.removeBg}` : ""}`}/>
    </>
  );
};

export default Section_Mobile_Navbar;