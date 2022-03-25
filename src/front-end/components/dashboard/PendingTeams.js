import React, { useState } from "react";
import styles from "../../css/dashboard/pendingteams.module.scss";
import PendingTeamCard from "./PendingTeamCard";
import Dashboard from "./Dashboard";
import DashboardButton from "./DashboardButton";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';

export default function PendingTeams() {
  const [user] = useRecoilState(userStateAtom);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div>
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
      <div className={styles.container}>
        <h1>Your Pending Requests</h1>
        <PendingTeamCard />
        <PendingTeamCard />
        <PendingTeamCard />
        <PendingTeamCard />
        <PendingTeamCard />
        <PendingTeamCard />
      </div>
    </div>
  );
}