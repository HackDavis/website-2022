import React from 'react';
import styles from "../css/section_navbar.module.scss";
import Hamburger from "../images/HamburgerMenu.svg";

const Section_Navbar = () => {
    return(
        <div className={`${styles.container} container`}>
          <div className={`col-1  ${styles.circle}`}></div>
          <img className={`col-1 offset-10  ${styles.hamburger}`} src={Hamburger}/>
        </div>
    )
}

export default Section_Navbar;