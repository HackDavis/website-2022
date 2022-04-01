import React, { useState } from "react";
import styles from "../../css/dashboard/pendingteams.module.scss";
import PendingTeamCard from "./PendingTeamCard";
import Dashboard from "./Dashboard";
import DashboardButton from "./DashboardButton";
import backarrow from "../../images/dashboard/whiteBackArrow.svg";

import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';

export default function PendingTeams(props) {
  const [user] = useRecoilState(userStateAtom);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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
      <div className={styles.content}>
        <a className={styles.back} onClick={() => props.setShowPending(false)}>
          <img src={backarrow} className={styles.backarrow} />
          Back to Search
        </a>
        <h1>Your Pending Requests <span>{user.pending_groups.length}</span></h1>
        {props.pendingTeams?.map((groupId) => {
          return <PendingTeamCard groupId={groupId} key={groupId} />;
        })}
      </div>
    </div>
  );
}