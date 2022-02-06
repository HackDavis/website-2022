import React, { useState } from 'react';
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
  }
  window.addEventListener('scroll', setNavbarShadow);

  return (
    <div className={`${shadow ? `${styles.scroll}` : ""} ${styles.buttonContainer}`}>
      <div className={styles.container}>
          <img className={styles.circle} src={LogoIcon}></img>
          <div className={styles.buttons}>
            <a className={styles.button} href="">Homepage</a>
            <Link to="/about" className={styles.button}>About us</Link>
            <a className={styles.button} href="">Dashboard</a>
          </div>
      </div>
    </div>
  );
}

export default Section_Desktop_Navbar;