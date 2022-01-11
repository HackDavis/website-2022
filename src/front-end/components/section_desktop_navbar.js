import React, { useState } from 'react';
import styles from "../css/section_desktop_navbar.module.scss";
import Hamburger from "../images/HamburgerMenu.svg";

const Section_Desktop_Navbar = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles.circle}`}/>
        <div className={`${styles.buttons}`}>
            <p className={styles.button}>About us</p>
            <p className={styles.button}>Info</p>
            <p className={styles.button}>FAQ</p>
            <p className={styles.button}>Sponsors</p>
            <p className={styles.button}>Profile</p>
        </div>
      </div>
    </div>
  );
}

export default Section_Desktop_Navbar;