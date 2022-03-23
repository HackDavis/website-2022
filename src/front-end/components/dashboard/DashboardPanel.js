import React from "react";
import styles from "../../css/dashboard/dashboardpanel.module.scss";
import x from "../../images/dashboard/x.svg";
import discord from "../../images/dashboard/discord.svg";
import email from "../../images/dashboard/email.svg";

export default function DashboardPanel(props) {
  console.log("user: ", props.user);
 // console.log(user.user_id);

  return (
    <div className={styles.dashboardContainer}>
      <img
        src={x}
        className={styles.x}
        alt="close"
        onClick={() => props.setShowDashboard(!props.showDashboard)}
      />
      <div className={styles.text}>Profile</div>
      <div className={styles.profileCard}>
        <div
          className={styles.edit}
          onClick={() => props.setShowEdit(!props.showEdit)}
        >
          EDIT
        </div>
        <div className={styles.dashPfp}>
          <img src={props.user.profile_picture} className={styles.pfp} alt="profile picture" />
        </div>
        <div className={styles.name}>{props.user.name}</div>
        <div>
          <div className={styles.email}>
            <img className={styles.icons} src={email} alt="email icon" />
            {props.user.email}
          </div>
          <div className={styles.discord}>
            <img className={styles.icons} src={discord} alt="discord icon" />
            {props.user.discord_id}
          </div>
        </div>
        <div className={styles.bio}>{props.user.description}</div>
        <div className={styles.tags}></div>
      </div>
      <div className={styles.text}>Application Status</div>
      <div className={styles.appStatusCard}>{props.user.app_status}</div>
    </div>
  );
}