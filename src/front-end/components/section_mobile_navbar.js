import React, { useState } from 'react';
import styles from "../css/section_mobile_navbar.module.scss";
import Hamburger from "../images/HamburgerMenu.svg";

const Section_Mobile_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={`d-flex justify-content-between align-items-center ${styles.container}`}>
        <div className={`${styles.circle}`} />
        <img className={`${styles.hamburger}`} src={Hamburger} onClick={() => (setIsOpen(!isOpen))}/>
      </div>
      <div className={`${styles.menuNav} ${isOpen ? `${styles.showMenu}` : ""}`}>
        <div className={"d-flex flex-column align-items-center justify-content-between align-items-center"}>
          <button className={styles.exitDash} onClick={() => (setIsOpen(!isOpen))}> X </button>
          <h1 style={{display: 'block'}}>This is the dashboard!</h1>
          <h2 style={{display: 'block'}}>Hackers will see their information here</h2>
        </div>
      </div>
    </div>
  );
}

export default Section_Mobile_Navbar;