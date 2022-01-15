import React from 'react';
import styles from "../css/section_desktop_navbar.module.scss";

const Section_Desktop_Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.buttons}>
        <a href=""><p className={styles.button}>About us</p></a>
        <a href=""><p className={styles.button}>Info</p></a>
        <a href=""><p className={styles.button}>FAQ</p></a>
        <a href=""><p className={styles.button}>Sponsors</p></a>
        <a href=""><p className={styles.button}>Profile</p></a>
      </div>
    </div>
  );
}

export default Section_Desktop_Navbar;