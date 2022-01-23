import React from 'react';
import styles from "../css/section_adventure.module.scss";
import AdventureDesktop from "../images/AdventureDesktop.svg";
import AdventureMobile from "../images/AdventureMobile.svg";

const Section_Adventure = () => {
    return (
      <div className={styles.container}>
        <p className={styles.headerText}>START YOUR ADVENTURE TODAY.</p>
        <button className={styles.button}>PRE-REGISTER</button>
        <img src={AdventureDesktop} className={styles.adventuredesktop} />
        <img src={AdventureMobile} className={styles.adventuremobile} />
      </div>
    );
}

export default Section_Adventure;