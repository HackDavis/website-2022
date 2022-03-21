import React, {useState} from "react";
import styles from "../../css/dashboard/dashboard.module.scss";
import pill from "../../images/dashboard/pill.svg";
import DashboardPanel from "./DashboardPanel";
import EditDashboard from "./EditDashboard";

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

export default function Dashboard() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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
          {showEdit ? <EditDashboard/> : <DashboardPanel showEdit={showEdit} setShowEdit={setShowEdit}/>}
        </div>
      </div>
    </div>
  );
}