import React from 'react';
import styles from "../../css/aboutuspage/abouttop.module.scss";
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

export function AboutTop() {
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
            <h1>About Us</h1>
            <p>
              HackDavis is UC Davis’ 36-hour collegiate hackathon dedicated to empowering student hackers to collaborate and build impactful projects that make the world a better place. HackDavis 2021 featured <span>750+ student attendees</span> and <span>150+ project submissions</span> dedicated to social good, making the event a huge success and the <span>second-largest hackathon in California</span>. We also partnered with non-profit organizations like Aging 2.0, The Children’s Scoliosis Foundation, and Breathe California to support our local communities.
            </p>
            <button>SPONSOR 2022</button>
          </main>
          <section className={styles.stats_block}>
            <figure className={styles.stat}>
              <img src={AttendeeLogo} />
              <figcaption>
                <span>750+</span>
                <br />
                attendees
              </figcaption>
            </figure>
            <figure className={styles.stat}>
              <img src={ProjectsLogo} />
              <figcaption>
                <span>150+</span>
                <br />
                projects submitted
              </figcaption>
            </figure>
            <figure className={styles.stat}>
              <img src={FirstTimeLogo} />
              <figcaption>
                <span>40%</span>
                <br />
                first time hackers
              </figcaption>
            </figure>
            <figure className={styles.stat}>
              <img src={GenderLogo} />
              <figcaption>
                <span>37%</span>
                <br />
                female or nonbinary
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
      <div className={styles.diagonal}></div>
      </div>
  );
}