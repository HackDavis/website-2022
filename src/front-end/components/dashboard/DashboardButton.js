import React from "react";
import styles from "../../css/dashboard/dashboardbutton.module.scss";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';

export default function DashboardButton(props) {
  const [user] = useRecoilState(userStateAtom);
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