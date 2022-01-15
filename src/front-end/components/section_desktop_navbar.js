import React from 'react';
import styles from "../css/section_desktop_navbar.module.scss";

const Section_Desktop_Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.buttons}>
        <a className={styles.button} href="">About us</a>
        <a className={styles.button} href="">Info</a>
        <a className={styles.button} href="">FAQ</a>
        <a className={styles.button} href="">Sponsors</a>
        <a className={styles.button} href="">Profile</a>
      </div>
    </div>
  );
}

export default Section_Desktop_Navbar;