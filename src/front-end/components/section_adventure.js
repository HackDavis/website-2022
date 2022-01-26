import React, { useState } from 'react';
import styles from "../css/section_adventure.module.scss";
import AdventureDesktop from "../images/AdventureDesktop.svg";
import AdventureMobile from "../images/AdventureMobile.svg";
import Lottie from 'react-lottie';
import animationData from '../lotties/confetti.json';

const Section_Adventure = () => {
  // const[isPaused, setIsPaused] = useState(true);
  const defaultOptions = {
    // loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <div className={styles.container}>
      {/* <div onMouseEnter={() => setIsPaused(!isPaused)}> */}
      <Lottie
        style={{
          "z-index": "998",
          position: "absolute",
          cursor:"default",
        }}
        className={styles.confetti}
        options={defaultOptions}
        isClickToPauseDisabled={true}
        // isPaused={isPaused}
      />
      {/* </div> */}
      <p className={styles.headerText}>START YOUR ADVENTURE TODAY.</p>
      <button className={styles.button}>PRE-REGISTER</button>
      <img src={AdventureDesktop} className={styles.adventuredesktop} />
      <img src={AdventureMobile} className={styles.adventuremobile} />
    </div>
  );
}

export default Section_Adventure;