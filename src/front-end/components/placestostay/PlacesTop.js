import React from 'react';
import styles from "../../css/placestostay/placestop.module.scss";
import AttendeeLogo from "../../images/about/attendee_logo.svg";
import ProjectsLogo from "../../images/about/projects_logo.svg";
import FirstTimeLogo from "../../images/about/first_time_logo.svg";
import GenderLogo from "../../images/about/gender_logo.svg";
import Chicky from "../../images/about/chicky.svg";
import CowWithHat from "../../images/about/CowWithHat.svg";
import Leaves from "../../images/about/leaves.svg";
import AboutUsGraphic from "../../images/about/AboutUsGraphic.svg";
import AboutUsGraphicMobile from "../../images/about/AboutUsGraphicMobile.svg";
import AboutUsGraphicBackgroundMobile from "../../images/about/AboutUsGraphicBackgroundMobile.svg";
import BlueSkyBG from "../../images/about/BlueSkyBG.svg";
import BunnyBushRay from "../../images/about/BunnyBushRay.svg";
import FrontRays from "../../images/about/FrontRays.svg";
import visityolo from "../../images/sponsors/visityolo.jpeg";
import visitdavis from "../../images/sponsors/visitdavis.jpeg";

export function PlacesTop() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.graphic_wrapper}>
          <img className={styles.graphic_mobile} src={AboutUsGraphicBackgroundMobile} />
          <img className={`${styles.graphic_mobile} ${styles.tree_meeting}`} src={AboutUsGraphicMobile} />
          
          <img className={styles.chicky} src={Chicky} />
          <img className={styles.cow} src={CowWithHat} />
          <img className={styles.leaves} src={Leaves}/>
          <img className={styles.sky} src={BlueSkyBG} />
          <img className={styles.bunny_bush_ray} src={BunnyBushRay} />
          <img className={styles.front_rays} src={FrontRays} />
          <img className={styles.about_us_graphic} src={AboutUsGraphic} />
        </div>
        <div className={styles.content}>
          <main className={styles.main_block}>
            <h1>Places to Stay</h1>
            <p>
              Looking for somewhere to sleep during the hackathon? Check out these great places to stay in Davis!
            </p>
            <br/>
            <p>
              Brought to you by: 
            </p>
            <a href="https://visityolo.com/"><img src={visityolo} alt="logo"/></a>
            <a href="https://www.visitdavis.org/"><img src={visitdavis} alt="logo"/></a>
          </main>
        </div>
      </div>
      <div className={styles.diagonal}></div>
      </div>
  );
}