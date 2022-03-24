import React, {useState} from "react";
import styles from "../../css/dashboard/teamfinderhome.module.scss";
import Dashboard from "./Dashboard";
import CreateTeam from "../../images/dashboard/CreateTeam.svg";
import JoinTeam from "../../images/dashboard/JoinTeam.svg";
import blankTicket from "../../images/dashboard/blankTicket.svg";
import DashboardButton from "./DashboardButton";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';

export default function TeamFinderHome() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [user] = useRecoilState(userStateAtom);
  return (
    <div className={styles.container}>
      <DashboardButton
        user={user}
        setShowDashboard={setShowDashboard}
        showDashboard={showDashboard}
      />
      <Dashboard
        user={user}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        showDashboard={showDashboard}
        setShowDashboard={setShowDashboard}
      />
      <div className={styles.mainContent}>
        <div className={styles.text}>
          <h2 className={styles.hi}>Hi {user.name}</h2>
          <img src={blankTicket}alt="blank ticket"/>
          <h1 className={styles.welcome}>Welcome to Team Finder</h1>
          <h4 className={styles.meet}>Meet some cool people.</h4>
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
    </div>
  );
}