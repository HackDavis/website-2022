import React, { useState, useEffect } from "react";
import styles from '../../../css/landingPage/mainSection/MainBlock.module.scss';
import date_icon from '../../../images/main_section/date_icon.svg';
import location_icon from '../../../images/main_section/location_icon.svg';
import arrow_forward from '../../../images/main_section/arrow_forward.svg';
import Fade from "react-reveal/Fade";

export function MainBlock() {
  return (
    <Fade>
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
            Check out our <a target="_blank" href="https://hackdavis.notion.site/hackdavis/HackDavis-2022-Starter-Pack-9295e5896d524b28914844559b087aac">Starter Pack <img src={arrow_forward} /></a>
          </p>
          <p className={styles.mentorVolunteer}>
            Apply to be a <a target="_blank" href="https://hackdavis.typeform.com/mentor2022">Mentor</a> or <a target="_blank" href="https://hackdavis.typeform.com/volunteer2022">Volunteer</a> 
          </p>
        </main>
      </div>
    </Fade>
  );
}
