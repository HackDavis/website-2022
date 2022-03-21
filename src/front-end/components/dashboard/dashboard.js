import React, {useState} from "react";
import styles from "../../css/dashboard/dashboard.module.scss";
import pill from "../../images/dashboard/pill.svg";

function DashboardButton(props) {
  return (
    <div className={styles.profile} onClick={() => props.setShowDashboard(!props.showDashboard)}>
      <div className={styles.circle}>
        <div className={styles.pfp}></div>
        <div className={styles.rectangle}></div>
        <p className={styles.myProfile}>My Profile</p>
      </div>
    </div>
  );
}

export default function dashboard() {
  const [showDashboard, setShowDashboard] = useState(false);
  return (
    <div>
      <DashboardButton
        setShowDashboard={setShowDashboard}
        showDashboard={showDashboard}
      />
      <div className={styles.container}>
        {/* <div className={`${shadow ? `${styles.scroll}` : ""} ${styles.buttonContainer}`}> */}
        <div
          className={`${showDashboard ? `${styles.showDashboard}` : ""} ${
            styles.dashboard
          }`}
        >
          <div className={styles.dashboardContainer}>
            <div className={styles.text}>Profile</div>
            <div className={styles.profileCard}>
              <div className={styles.edit}>Edit</div>
              <div className={styles.dashPfp}></div>
              <div className={styles.name}>Vivek Shome</div>
              <div>
                <div className={styles.email}>hoopla@gmail.com</div>
                <div className={styles.discord}>discord username</div>
              </div>
              <div className={styles.bio}>
                👋 Hey! I’m Vivek, a junior at UC Davis, where I'm
                double-majoring in Computer Science and Applied Mathematics! My
                strengths include C, C++, MATLAB, and leadership. 👋 Hey! I’m
                Vivek, a junior at UC Davis, where I'm double-majoring in
                Computer Scien
              </div>
              <div className={styles.tags}></div>
            </div>
            <div className={styles.text}>Application Status</div>
            <div className={styles.appStatusCard}>Pending Approval</div>
          </div>
        </div>
      </div>
    </div>
  );
}