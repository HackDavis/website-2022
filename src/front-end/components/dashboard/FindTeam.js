import React, { useState, useEffect } from "react";
import styles from "../../css/dashboard/findteam.module.scss";
import { Checkbox } from "./Checkbox";
import DashboardButton from "./DashboardButton";
import Dashboard from "./Dashboard";
import TeamCard from "./TeamCard";
import backarrow from "../../images/dashboard/backarrow.svg";
import search from "../../images/dashboard/search.svg";
import blankTicket from "../../images/dashboard/blankTicket.svg";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';
import Roles from "../../../back-end/db/Roles";
import Tags from "../../../back-end/db/Tags";
import { getAllGroups } from "../../../back-end/DBQueries/getAllGroups";

export default function FindTeam() {
  const [allGroups, setAllGroups] = useState([]);
  const [groupId, setGroupId] = useState();
  const [tags, setTags] = useState(new Set())
  const [user] = useRecoilState(userStateAtom);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
    
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllGroups();
      setAllGroups(data);
      console.log("group data: ", data);
    };
    fetchData()
      .catch(console.error);
  }, []);

  const handleCheck = (e) => {
    // If tags set contains the tag, user is unchecking the check box
    const newTags = new Set(tags);
    if(e.target.checked) {
      newTags.add(e.target.name);
    } else {
      newTags.delete(e.target.name);
    }
    setTags(newTags);
    console.log("tags: ", tags);
  }

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
      <div className={styles.greeting}>
        <h1 className={styles.hi}>Hi Vivek</h1>
        <img
          src={blankTicket}
          className={styles.blankTicket}
          alt="blank ticket"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <form>
            <input
              className={styles.search}
              type="text"
              placeholder="Search by ID number"
              onChange={(e) => setGroupId(e.target.value)}
            />
            <img src={search} className={styles.searchIcon} alt="search icon" />
          </form>
          <div className={styles.skillset}>
            <div className={styles.title}>Your Skillset</div>
            <div className={styles.roleContainer}>
              <h4>Skillset</h4>
              <div>
                {Roles.map((role) => {
                  return (
                    <div key={role}>
                      <Checkbox name={role} onChange={handleCheck}/>
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
                      <Checkbox name={tag} onChange={handleCheck}/>
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button className={styles.pendingButton}>
            Your Pending Requests
          </button>
        </div>
        <div className={styles.right}>
          {groupId ? null : <h5>Teams <span>({allGroups.length} results)</span></h5>}
          {groupId ? allGroups.filter(group => group.group_id.includes(groupId) || group.group_id.includes(groupId.substring(1)))
            .map((group, ind) => {
              return <TeamCard key={ind} data={group}/>})
            : 
            allGroups.map((group, ind) => {
              return <TeamCard key={ind} data={group}/>
            })
          }
        </div>
      </div>
    </div>
  );
}