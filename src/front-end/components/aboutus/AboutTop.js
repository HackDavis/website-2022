import React from 'react';
import styles from "../../css/aboutuspage/abouttop.module.css";
import AttendeeLogo from "../../images/about/attendee_logo.svg";
import ProjectsLogo from "../../images/about/projects_logo.svg";
import FirstTimeLogo from "../../images/about/first_time_logo.svg";
import GenderLogo from "../../images/about/gender_logo.svg";
// import Chicky from "../../images/about/chicky.svg";
import CowWithHat from "../../images/about/CowWithHat.svg";
import Leaves from "../../images/about/leaves.svg";
import AboutUsGraphic from "../../images/about/AboutUsGraphic.svg";
import BlueSkyBG from "../../images/about/BlueSkyBG.svg";
import BunnyBushRay from "../../images/about/BunnyBushRay.svg";
import FrontRays from "../../images/about/FrontRays.svg";

export function AboutTop() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={BlueSkyBG} className={styles.blue_sky}/>
        {/* <img src={AboutUsGraphic} className={styles.about_us_graphic}/> */}
      </div>
      <div className={styles.rightSide}>
          <div className={`${styles.about_header}`}>
            About Us
          </div>
          
          <div className={`${styles.about_text}`}>
            HackDavis is UC Davis' 36-hour collegiate hackathon dedicated to empowering student hackers to collaborate 
            and build impactful projects that make the world a better place. HackDavis 2021 featured 
            <span className={`${styles.about_text_alt}`}> 750+ student attendees </span> and 
            <span className={`${styles.about_text_alt}`}> 150+ project submissions </span> 
            dedicated to social good, making the event a huge success and the 
            <span className={`${styles.about_text_alt}`}> second-largest hackathon in California. </span> 
            We also partnered with non-profit organizations like Aging 2.0, The Children's 
            Scoliosis Foundation, and Breathe California to support our local communities.
          </div>

            <button className = {styles.sponsor_button} onClick={() => window.open('mailto:team@hackdavis.io')}>
                    SPONSOR 2022
          </button>
          
          <div className={styles.stats}>
            <div className={styles.statscontainer}>
                <img className={styles.statsimg} src={AttendeeLogo}></img>
                <div className={styles.about_stats_text_container}>
                    <div className = {styles.about_stats_big}>
                        750+
                    </div>
                    <div className = {styles.about_stats_small}>
                        <p className={styles.attendeestext}>attendees</p>
                        {/* <br className = {styles.linebreak} ></br> */}
                    </div>
                </div>
            </div>
            <div className={styles.statscontainer}>
                <img className={styles.statsimg} src={ProjectsLogo}></img>
                <div className={styles.about_stats_text_container}>
                    <div className = {styles.about_stats_big}>
                        150+
                    </div>
                    <div className = {styles.about_stats_small}>
                        projects submitted
                    </div>
                </div>
            </div>
            <div className={styles.statscontainer}>
                <img className={styles.statsimg} src={FirstTimeLogo}></img>
                <div className={styles.about_stats_text_container}>
                    <div className = {styles.about_stats_big}>
                        40%
                    </div>
                    <div className = {styles.about_stats_small}>
                        first time hackers
                    </div>
                </div>
            </div>
            <div className={styles.statscontainer}>
                <img className={styles.statsimg} src={GenderLogo}></img>
                <div className={styles.about_stats_text_container}>
                    <div className = {styles.about_stats_big}>
                        37%
                    </div>
                    <div className = {styles.about_stats_small}>
                        female or nonbinary
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className={styles.bottom_diagonal_about}></div>
    </div>
  );
}