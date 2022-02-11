import React, { useState, useEffect } from "react";
import styles from '../../../css/landingPage/mainSection/MainBlock.module.scss';
import date_icon from '../../../images/main_section/date_icon.svg';
import location_icon from '../../../images/main_section/location_icon.svg';
export function MainBlock() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <h1>HackDavis</h1>
        <div className={styles.info_flex}>
          <img className={styles.date_icon} src={date_icon}/>
          <h3><strong>April 16-17, 2022</strong></h3>
        </div>
        <div className={`${styles.info_flex} ${styles.location_container} `}>
          <img src={location_icon} className={styles.location_icon}/>
          <h3>UC Davis University <br></br>Credit Union Center</h3>
        </div>
        <div>
          <button className={styles.hover_prereg}>APPLY</button>
          <button className={styles.hover_sponsor} onClick={() => window.open('mailto:team@hackdavis.io')}>SPONSOR 2022</button>
        </div>
      </main>
    </div>
  );
}
