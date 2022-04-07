import { useState, useEffect } from "react";
import MainBG from "front-end/images/doe/MainBackground.svg";
import CowBalloon from "front-end/images/doe/CowBalloon.svg";
import Froggy from "front-end/images/doe/Froggy.svg";
import Fade from "react-reveal/Fade";
import styles from "front-end/css/doe/timer.module.scss";
import DiscordBlue from "front-end/images/doe/DiscordBlue.svg";
import ArrowForwardBlue from "front-end/images/doe/ArrowForwardBlue.svg";
import Countdown from "react-countdown";

export function Timer() {
  const start = new Date("April 16, 2022, 10:00:00 PST");
  const end = new Date("April 17, 2022, 10:00:00 PST");

  const [ongoing, setOngoing] = useState(false);

  const Timer = ({ hours, minutes, seconds, completed }) => {
    return (
      <div className={styles.timeBoxContainer}>
        <div className={styles.timeBox}>
          <p>HRS</p>
          <span>{ongoing ? hours : "24"}</span>
        </div>
        <div className={styles.timeBox}>
          <p>MIN</p>
          <span>{ongoing ? minutes : "00"}</span>
        </div>
        <div className={styles.timeBox}>
          <p>SEC</p>
          <span>{ongoing ? seconds : "00"}</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setOngoing(new Date() > start);
  }, [])

  return (
    <Fade>
      <main className={styles.container}>
        <img src={MainBG} alt="background" />
        {/* <img src={CowBalloon} alt="cow balloon" />
      <img src={Froggy} alt="Frog on jetpack" /> */}
        <h1>HackDavis</h1>
        <h2>// code for social good_</h2>
        <Countdown
          date={end}
          intervalDelay={0}
          precision={3}
          renderer={Timer}
        />
        <div className={styles.buttons}>
          <a target="_blank" href="https://hackdavis2022.devpost.com/" className={styles.submitButton}>
            <button>SUBMIT PROJECT</button>
          </a>
          <a target="_blank" href="https://discord.gg/wc6QQEc" className={styles.helpButton}>
            <button>
              <img src={DiscordBlue} alt="Discord Icon" />HELP
            </button>
          </a>
        </div>
        <p className={styles.footer}>
          New to hackathons?&nbsp;
          <br />
          Check out our <a target="_blank" href="https://hackdavis.notion.site/hackdavis/HackDavis-2022-Starter-Pack-9295e5896d524b28914844559b087aac">Starter Pack <img src={ArrowForwardBlue} className={styles.arrow} /></a>
        </p>
      </main>
    </Fade>
  );
}