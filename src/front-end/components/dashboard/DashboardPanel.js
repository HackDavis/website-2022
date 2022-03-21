import React from "react";
import styles from "../../css/dashboard/dashboardpanel.module.scss";

export default function DashboardPanel(props) {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.text}>Profile</div>
      <div className={styles.profileCard}>
        <div className={styles.edit} onClick={() => props.setShowEdit(!props.showEdit)}>
          EDIT
        </div>
        <div className={styles.dashPfp}></div>
        <div className={styles.name}>Vivek Shome</div>
        <div>
          <div className={styles.email}>hoopla@gmail.com</div>
          <div className={styles.discord}>discord username</div>
        </div>
        <div className={styles.bio}>
          👋 Hey! I’m Vivek, a junior at UC Davis, where I'm double-majoring in
          Computer Science and Applied Mathematics! My strengths include C, C++,
          MATLAB, and leadership. 👋 Hey! I’m Vivek, a junior at UC Davis, where
          I'm double-majoring in Computer Science
        </div>
        <div className={styles.tags}></div>
      </div>
      <div className={styles.text}>Application Status</div>
      <div className={styles.appStatusCard}>Pending Approval</div>
    </div>
  );
}