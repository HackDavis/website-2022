import React, { useState, useEffect } from "react";
import styles from "../../css/dashboard/pendingteams.module.scss";
import PendingTeamCard from "./PendingTeamCard";
import Dashboard from "./Dashboard";
import DashboardButton from "./DashboardButton";
import backarrow from "../../images/dashboard/whiteBackArrow.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState } from 'recoil';
import { getUser } from "../../../back-end/DBQueries/getUser";

export default function PendingTeams(props) {
  const [user, setUser] = useRecoilState(userStateAtom);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  // const {state} = useLocation();
  // let pendingTeams = [];
  
  useEffect(() => {
    const redirect = setTimeout(() => {
      if (user === "") {
        navigate("/401");
      } else if (user.group_id !== "") {
        navigate("/teamfinder");
      }
    }, 2500);

    // :mild-panic-intensifies:
    // Basically checks if a user got accepted
    async function checkUser() {
      const newUserData = await getUser(user.user_id);
      async function SetUser() {
        setUser(newUserData);
      }
      SetUser().
        then(newUserData.group_id !== "" ? navigate("/teamfinder/myteam") : null);
    }
    checkUser();
    // pendingTeams = user.pending_groups;
    // console.log(pendingTeams);

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  if (user === "") return null;

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
        <a className={styles.back} onClick={() => navigate("/teamfinder/findteam")}>
          <img src={backarrow} className={styles.backarrow} />
          Back to Search
        </a>
        <h1>Your Pending Requests <span>{user.pending_groups.length}</span></h1>
        {/* {pendingTeams.map((groupId) => {
          return <PendingTeamCard groupId={groupId} key={groupId} />;
        })} */}
        {user.pending_groups.map((groupId) => {
          return <PendingTeamCard groupId={groupId} key={groupId} />;
        })}
      </div>
    </div>
  );
}