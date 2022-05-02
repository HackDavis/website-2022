import React, { useState } from 'react';
import styles from "../css/section_adventure.module.scss";
import AdventureDesktop from "../images/AdventureDesktop.svg";
import AdventureMobile from "../images/AdventureMobile.svg";
import Lottie from 'react-lottie';
import animationData from '../lotties/confetti.json';
import Fade from "react-reveal/Fade";

const Section_Adventure = () => {
  const[isPaused, setIsPaused] = useState(true);
  
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Fade>
      <div>
        {isPaused ? (
          // if animation is "paused", render the mouse hover event div
          <div onMouseEnter={() => setIsPaused(!isPaused)}>
            <section className={styles.container}>
              <p className={styles.headerText}>START YOUR ADVENTURE TODAY.</p>
              <button className={styles.button} onClick={() => window.open('https://hackdavis.typeform.com/hackdavis2022')}>APPLY</button>
              <img src={AdventureDesktop} className={styles.adventuredesktop} />
              <img src={AdventureMobile} className={styles.adventuremobile} />
            </section>
          </div>
        ) : (
          // else do the animation (10 seconds)
          <div className={styles.container}>
            <p className={styles.headerText}>START YOUR ADVENTURE TODAY.</p>
            <button className={styles.button} onClick={() => window.open('https://hackdavis.typeform.com/director2023')}>APPLY</button>
            <img src={AdventureDesktop} className={styles.adventuredesktop} />
            <img src={AdventureMobile} className={styles.adventuremobile} />
            <Lottie
              options={defaultOptions}
              style={{
                zIndex: "997",
                position: "absolute",
                cursor: "default"
              }}
              className={styles.confetti}
              isClickToPauseDisabled={true}
              eventListeners={[
                {
                  eventName:"complete",
                  callback: () => setIsPaused(!isPaused)
                }
              ]
              }
            />
          </div>
        )}
      </div>
    </Fade>
  );
};

export default Section_Adventure;