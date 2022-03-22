import React, {useState} from "react";
import styles from "../../css/dashboard/dashboard.module.scss";
import DashboardPanel from "./DashboardPanel";
import EditDashboard from "./EditDashboard";
import CreateTeam from "../../images/dashboard/CreateTeam.svg";
import JoinTeam from "../../images/dashboard/JoinTeam.svg";

function DashboardButton(props) {
  return (
    <div className={styles.profile} onClick={() => props.setShowDashboard(!props.showDashboard)}>
      <div className={styles.circle}>
        <div className={styles.pfp}/>
        <div className={styles.rectangle}/>
        <p className={styles.myProfile}>My Profile</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.text}>
          <div className={styles.hi}>Hi Vivek</div>
          <div className={styles.welcome}>Welcome to Team Finder</div>
          <div className={styles.meet}>Meet some cool people.</div>
        </div>
        <div className={styles.teamButtonCont}>
          <div className={styles.teamButtons}>
            <img src={JoinTeam} alt="Join a team" />
            <div className={styles.findJoinTeam}>
              <div className={styles.findJoinTeamBtn}>FIND A TEAM</div>
            </div>
          </div>
          <div className={styles.teamButtons}>
            <img src={CreateTeam} alt="Create a team" />
            <div className={styles.findJoinTeam}>
              <div className={styles.findJoinTeamBtn}>JOIN A TEAM</div>
            </div>
          </div>
        </div>
      </div>
      <DashboardButton
        setShowDashboard={setShowDashboard}
        showDashboard={showDashboard}
      />
      <div
        className={`${showDashboard ? `${styles.showDashboard}` : ""} ${
          styles.dashboard
        }`}
      >
        {showEdit ? (
          <EditDashboard showEdit={showEdit} setShowEdit={setShowEdit} />
        ) : (
          <DashboardPanel
            showDashboard={showDashboard}
            setShowDashboard={setShowDashboard}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          />
        )}
      </div>
    </div>
  );
}