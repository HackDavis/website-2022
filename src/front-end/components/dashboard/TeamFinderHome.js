import React, { useState, useEffect } from "react";
import styles from "../../css/dashboard/teamfinderhome.module.scss";
import Dashboard from "./Dashboard";
import CreateTeam from "../../images/dashboard/CreateTeam.svg";
import JoinTeam from "../../images/dashboard/JoinTeam.svg";
import blankTicket from "../../images/dashboard/blankTicket.svg";
import DashboardButton from "./DashboardButton";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState } from 'recoil';
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../back-end/DBQueries/getUser";

export default function TeamFinderHome() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [user, setUser] = useRecoilState(userStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = setTimeout(() => {
      if (user === "") {
        navigate("/401");
      } else if (user.group_id !== "") {
        navigate("/teamfinder/myteam");
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
      <div className={styles.mainContent}>
        <div className={styles.text}>
          <h2>Hi {user.name.split(" ")[0]}</h2>
          <img src={blankTicket} alt="blank ticket" />
          <h1>Welcome to Team Finder</h1>
          <h4>Meet some cool people.</h4>
        </div>
        <div className={styles.teamButtonCont}>
          <div className={styles.teamButtons}>
            <img src={JoinTeam} alt="Join a team" />
            <div className={styles.findJoinTeam}>
              <div
                className={styles.findJoinTeamBtn}
                onClick={() => navigate("/teamfinder/findteam")}
              >
                FIND A TEAM
              </div>
            </div>
          </div>
          <div className={styles.teamButtons}>
            <img src={CreateTeam} alt="Create a team" />
            <div className={styles.findJoinTeam}>
              <div
                className={styles.findJoinTeamBtn}
                onClick={() => navigate("/teamfinder/createteam")}
              >
                CREATE A TEAM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}