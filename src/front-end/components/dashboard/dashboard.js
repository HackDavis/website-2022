import React, {useState} from "react";
import styles from "../../css/dashboard/dashboard.module.scss";
import DashboardPanel from "./DashboardPanel";
import EditDashboard from "./EditDashboard";
import CreateTeam from "../../images/dashboard/CreateTeam.svg";
import JoinTeam from "../../images/dashboard/JoinTeam.svg";
import DashboardButton from "./DashboardButton";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';



export default function Dashboard() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [user] = useRecoilState(userStateAtom);
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.text}>
          <div className={styles.hi}>Hi {user.name}</div>
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
              <div className={styles.findJoinTeamBtn}>CREATE A TEAM</div>
            </div>
          </div>
        </div>
      </div>
      <DashboardButton
        user={user}
        setShowDashboard={setShowDashboard}
        showDashboard={showDashboard}
      />
      <div
        className={`${showDashboard ? `${styles.showDashboard}` : ""} ${
          styles.dashboard
        }`}
      >
        {showEdit ? (
          <EditDashboard
            user={user}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          />
        ) : (
          <DashboardPanel
            user={user}
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