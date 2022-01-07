import React from 'react';
import styles from "../css/section_navbar.module.scss";
import Hamburger from "../images/HamburgerMenu.svg";

const Section_Navbar = () => {
    return(
        <div className={styles.container}>
          <div className={styles.circle}/>
          <img className={styles.hamburger} src={Hamburger}/>
        </div>
    )
}

export default Section_Navbar;