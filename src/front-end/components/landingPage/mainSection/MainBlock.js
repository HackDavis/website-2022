import React, { useState, useEffect } from "react";
import styles from '../../../css/landingPage/mainSection/MainBlock.module.scss';
import date_icon from '../../../images/main_section/date_icon.svg';
import location_icon from '../../../images/main_section/location_icon.svg';
import arrow_forward from '../../../images/main_section/arrow_forward.svg';
import Fade from "react-reveal/Fade";

export function MainBlock() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <h1>HackDavis</h1>
        <div className={styles.info_flex}>
          <p>Look out, HackDavis 2023 Director Applications are now OPEN!</p>
        </div>
        <div className={`${styles.info_flex} ${styles.location_container} `}>
          {/* <img src={location_icon} className={styles.location_icon} /> */}
          {/* <p><a target="_blank" href="https://hackdavis.typeform.com/director2023" >Want to be a director for HackDavis 2023? Now's your chance!</a></p> */}
          <p>Apply to join the director team by <b>May 15!</b> :)</p>
        </div>
        <div>
          <button className={styles.hover_prereg} onClick={() => window.open('https://hackdavis.typeform.com/director2023')}>APPLY</button>
          <button className={styles.hover_sponsor} onClick={() => window.open('mailto:team@hackdavis.io')}>SPONSOR 2023</button>
        </div>
        <p>
          {/* New to hackathons?&nbsp;
          <br /> */}
          Check out our <a target="_blank" href="https://hackdavis.notion.site/hackdavis/HackDavis-2022-Starter-Pack-9295e5896d524b28914844559b087aac">Starter Pack <img src={arrow_forward} /></a>
        </p>
      </main>
    </div>
  );
}
