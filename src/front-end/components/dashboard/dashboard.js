import React, {useState} from "react";
import styles from "../../css/dashboard/dashboard.module.scss";
import DashboardPanel from "./DashboardPanel";
import EditDashboard from "./EditDashboard";
import CreateTeam from "../../images/dashboard/CreateTeam.svg";
import JoinTeam from "../../images/dashboard/JoinTeam.svg";
import { SignInHardCode } from "./SignInHardcode";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';

function DashboardButton(props) {
  return (
    <div className={styles.profileBtn} onClick={() => props.setShowDashboard(!props.showDashboard)}>
      <div className={styles.circle}>
        <div className={styles.pfpContainer}>
          <img src={props.user.profile_picture} className={styles.pfp} alt="profile picture"/>
        </div>
        <div className={styles.rectangle}/>
        <p className={styles.myProfile}>My Profile</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [user, setUser] = useRecoilState(userStateAtom);
  return (
    <div className={styles.container}>
      <SignInHardCode />
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