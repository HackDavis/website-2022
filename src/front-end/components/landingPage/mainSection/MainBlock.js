import React, { useState, useEffect } from "react";
import styles from '../../../css/landingPage/mainSection/MainBlock.module.scss';
import date_icon from '../../../images/main_section/date_icon.svg';
import location_icon from '../../../images/main_section/location_icon.svg';
import arrow_forward from '../../../images/main_section/arrow_forward.svg';
export function MainBlock() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <h1>HackDavis</h1>
        <div className={styles.info_flex}>
          <img className={styles.date_icon} src={date_icon} />
          <h3><strong>April 16-17, 2022</strong></h3>
        </div>
        <div className={`${styles.info_flex} ${styles.location_container} `}>
          <img src={location_icon} className={styles.location_icon} />
          <p><a target="_blank" href="https://goo.gl/maps/hQkGyYxFzoFgbRwf7" >University Credit Union <br className={styles.linebreak}></br>Center, UC Davis</a></p>
        </div>
        <div>
          <button className={styles.hover_prereg} onClick={() => window.open('https://hackdavis.typeform.com/hackdavis2022')}>APPLY</button>
          <button className={styles.hover_sponsor} onClick={() => window.open('mailto:team@hackdavis.io')}>SPONSOR 2022</button>
        </div>
        <p>
          New to hackathons?&nbsp;
          <br />
          Check out our <a target="_blank" href="https://tinyurl.com/hackdavis-starterpack">Starter Pack <img src={arrow_forward} /></a>
        </p>
      </main>
    </div>
  );
}
