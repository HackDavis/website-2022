import MainBG from "front-end/images/doe/MainBackground.svg";
import CowBalloon from "front-end/images/doe/CowBalloon.svg";
import Froggy from "front-end/images/doe/Froggy.svg";
import Chicky from "front-end/images/doe/Chicky.svg";
import LeftCloud from "front-end/images/doe/LeftCloud.svg";
import RightCloud from "front-end/images/doe/RightCloud.svg";
import styles from "front-end/css/doe/timer.module.scss";
import DiscordBlue from "front-end/images/doe/DiscordBlue.svg";
import ArrowForwardBlue from "front-end/images/doe/ArrowForwardBlue.svg";
import ArrowForwardWhite from "front-end/images/doe/ArrowForwardWhite.svg";
import Countdown from "react-countdown";
import MLHBanner from "front-end/images/MLHBanner.svg";
import DiscordWhite from "front-end/images/doe/DiscordWhite.svg";

export function Timer() {
  // GMT-0700 during DST, GMT-0800 otherwise
  const start = new Date("April 16, 2022, 11:45:00 GMT-0700");
  const end = new Date("April 17, 2022, 11:45:00 GMT-0700");
  const ongoing = new Date() > start;

  const Timer = ({ hours, minutes, seconds, completed }) => {
    return (
      <div className={styles.timeBoxContainer}>
        <div className={styles.timeBox}>
          <p>HRS</p>
          <p className={styles.desktopText}>HOURS</p>
          <span>{ongoing ? hours : "24"}</span>
        </div>
        <div className={styles.timeBox}>
          <p>MIN</p>
          <p className={styles.desktopText}>MINUTES</p>
          <span>{ongoing ? minutes : "00"}</span>
        </div>
        <div className={styles.timeBox}>
          <p>SEC</p>
          <p className={styles.desktopText}>SECONDS</p>
          <span>{ongoing ? seconds : "00"}</span>
        </div>
      </div>
    );
  };

  return (
    <main className={styles.container}>
      <img className={styles.leftCloud} src={LeftCloud} alt="color cloud" />
      <img className={styles.rightCloud} src={RightCloud} alt="color cloud" />
      <img className={styles.mobileBG} src={MainBG} alt="background" />
      <img className={styles.froggy} src={Froggy} alt="Froggy" />
      <img className={styles.cowBalloon} src={CowBalloon} alt="cow balloon" />
      <img className={styles.chicky} src={Chicky} alt="chicky" />
      <a
        className={styles.mlhBanner}
        href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white"
        target="_blank"
      >
        <img src={MLHBanner} alt="mlh banner" />
      </a>
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
            <img className={styles.discordBlue} src={DiscordBlue} alt="Discord Icon" />
            <img className={styles.discordWhite} src={DiscordWhite} alt="Discord Icon" />HELP
          </button>
        </a>
      </div>
      <p className={styles.footer}>
        New to hackathons?&nbsp;
        <br />
        Check out our <a target="_blank" href="https://hackdavis.notion.site/hackdavis/HackDavis-2022-Starter-Pack-9295e5896d524b28914844559b087aac">Starter Pack <img className={`${styles.arrowBlue} ${styles.arrow}`} src={ArrowForwardBlue} /><img src={ArrowForwardWhite} className={`${styles.arrowWhite} ${styles.arrow}`} /></a>
      </p>
    </main>
  );
}