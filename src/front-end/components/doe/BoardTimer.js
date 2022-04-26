// import MainBG from "front-end/images/doe/MainBackground.svg";
// import CowBalloon from "front-end/images/doe/CowBalloon.svg";
// import Froggy from "front-end/images/doe/Froggy.svg";
// import Chicky from "front-end/images/doe/Chicky.svg";
// import LeftCloud from "front-end/images/doe/LeftCloud.svg";
// import RightCloud from "front-end/images/doe/RightCloud.svg";
import styles from "front-end/css/doe/boardtimer.module.scss";
// import DiscordBlue from "front-end/images/doe/DiscordBlue.svg";
// import ArrowForwardBlue from "front-end/images/doe/ArrowForwardBlue.svg";
// import ArrowForwardWhite from "front-end/images/doe/ArrowForwardWhite.svg";
// import MLHBanner from "front-end/images/MLHBanner.svg";
// import DiscordWhite from "front-end/images/doe/DiscordWhite.svg";
import Countdown from "react-countdown";
import BoardTimerBG from "front-end/images/doe/BoardTimerBG.svg";

export function BoardTimer() {
  // GMT-0700 during DST, GMT-0800 otherwise
  const start = new Date("April 16, 2022, 11:45:00 GMT-0700");
  const end = new Date("April 17, 2022, 11:45:00 GMT-0700");
  const ongoing = new Date() > start;

  const Timer = ({ hours, minutes, seconds, completed }) => {
    return (
      <div className={styles.timeBoxContainer}>
        <div className={styles.timeBox}>
          <p>HOURS</p>
          <span>{ongoing ? hours : "24"}</span>
        </div>
        <div className={styles.timeBox}>
          <p>MINUTES</p>
          <span>{ongoing ? minutes : "00"}</span>
        </div>
        <div className={styles.timeBox}>
          <p>SECONDS</p>
          <span>{ongoing ? seconds : "00"}</span>
        </div>
      </div>
    );
  };

  return (
    <main className={styles.container}>
      <img className={styles.boardtimer} src={BoardTimerBG} alt="board timer" />
      {/* <h1>HackDavis</h1>
      <h2>// code for social good_</h2> */}
      <Countdown
        date={end}
        intervalDelay={0}
        precision={3}
        renderer={Timer}
      />
    </main>
  );
}