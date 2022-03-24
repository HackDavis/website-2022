import React, { useState } from "react";
import styles from "../../css/dashboard/FindTeam.module.scss";
import Roles from "../../../back-end/db/Roles";
import Tags from "../../../back-end/db/Tags";
import backarrow from "../../images/dashboard/backarrow.svg";
import { Checkbox } from "./Checkbox";
import DashboardButton from "./DashboardButton";
import Dashboard from "./Dashboard";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';

export default function FindTeam() {
  const [user] = useRecoilState(userStateAtom);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div>
      <div className={styles.banner}>
        <a href="">
          <img src={backarrow} className={styles.backarrow} />
          Back to Team Finder
        </a>
      </div>
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
        <div className={styles.left}>
          <form>
            <input
              className={styles.search}
              type="text"
              placeholder="Search by ID number"
            />
          </form>
          <div className={styles.skillset}>
            <div className={styles.title}>Your Skillset</div>
            <div className={styles.roleContainer}>
              <h4>Skillset</h4>
              <div>
                {Roles.map((role) => {
                  return (
                    <div key={role}>
                      <Checkbox name={role} />
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.toolContainer}>
              <h4>Tools</h4>
              <div>
                {Tags.map((tag) => {
                  return (
                    <div key={tag}>
                      <Checkbox name={tag} />
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}