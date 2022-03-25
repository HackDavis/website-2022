import React from "react";
import styles from "../../css/dashboard/pendingteamcard.module.scss";

export default function PendingTeamCard() {
  return (
    <div className={styles.container}>
      {/* for denied teams: */}
      {/* <div style={{opacity:"50%"}}> */}
      <div className={styles.status}>Pending</div>
      <h3>
        Team name <span>3/4</span>
      </h3>
      <h5 className={styles.id}>ID #12345678910</h5>
      <p>
        This is my description!! computer science and hack davis and cows and
        hack davis operations team is the best
      </p>
      <h5>TEAM</h5>
      <div className={styles.group}>
        <div className={styles.names}>
          <div className={styles.pfp}></div>
          <div className={styles.memberName}>Name</div>
        </div>
        <div className={styles.names}>
          <div className={styles.pfp}></div>
          <div className={styles.memberName}>Name</div>
        </div>
        <div className={styles.names}>
          <div className={styles.pfp}></div>
          <div className={styles.memberName}>Name</div>
        </div>
        <div className={styles.names}>
          <div className={styles.pfp}></div>
          <div className={styles.memberName}>Name</div>
        </div>
      </div>
      <h5>We are looking for:</h5>
      <div className={styles.skillsetGroup}>
        <div className={styles.skill}>HHHHHHHHHH</div>
        <div className={styles.skill}>Kotlin</div>
        <div className={styles.skill}>UI/UX</div>
        <div className={styles.skill}>Android</div>
        <div className={styles.skill}>Text here</div>
        <div className={styles.skill}>Text here</div>
        <div className={styles.skill}>Text here</div>
      </div>
      {/* </div> */}
      <button className={styles.btn}>JOIN TEAM</button>
    </div>
  );
}