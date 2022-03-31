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
import PendingTeams from "./PendingTeams";
import SubmitRequest from "./SubmitRequest";
import { SignInHardCode } from "./SignInHardcode";

export default function FindTeam(props) {
  const [allGroups, setAllGroups] = useState([]);
  const [constAllGroups, setConstAllGroups] = useState([]);
  const [groupId, setGroupId] = useState();
  const [requestGroup, setRequestGroup] = useState({});
  const [tags, setTags] = useState(new Set());
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showPending, setShowPending] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [user] = useRecoilState(userStateAtom);
    
  useEffect(() => {
    if(tags.size > 0 && allGroups.length > 0) {
      filterGroupsByTags();
    } else if(tags.size == 0 && allGroups.length > 0) {
      setAllGroups(constAllGroups);
    } else {
      const fetchData = async () => {
        const data = await getAllGroups();
        setAllGroups(data);
        setConstAllGroups(data);
        console.log("group data: ", data);
      };
      fetchData()
        .catch(console.error);
    }
  }, [tags]);

  // Update the allGroups state to only show groups that have tags equal to the tags selected
  const filterGroupsByTags = () => {
    let tagArray = Array.from(tags);
    
    let filteredGroups = [];
    allGroups.forEach(group => {
      if(group.tags1.some(tag1 => tagArray.indexOf(tag1) >= 0) || group.tags2.some(tag2 => tagArray.indexOf(tag2) >= 0)) {
        filteredGroups.push(group);
      }
    });
    console.log("filtered Groups: ", filteredGroups);
    setAllGroups(filteredGroups);
  };

  const handleCheck = (e) => {
    // If tags set contains the tag, user is unchecking the check box
    const newTags = new Set(tags);
    if(e.target.checked) {
      newTags.add(e.target.name);
    } else {
      newTags.delete(e.target.name);
    }
    setTags(newTags);
    setAllGroups(constAllGroups);
  };

  const onCardClick = (group) => {
    setShowRequest(true);
    console.log("Groupaaaa: " + group);
    setRequestGroup(group);
  };

  return (
    <div>
      {showPending ? (
        <PendingTeams setShowPending={setShowPending} pendingTeams={user.pending_groups}/>
      ) : showRequest ? (
        <SubmitRequest group={requestGroup} showRequest={showRequest} setShowRequest={setShowRequest} />
      ) : (
        <div>
          <div className={styles.banner}>
            <a onClick={() => props.setShowFinder(false)}>
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
          <SignInHardCode/>
            <h1 className={styles.hi}>Hi {user.name.split(' ')[0]}</h1>
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
                <img
                  src={search}
                  className={styles.searchIcon}
                  alt="search icon"
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
                          <Checkbox
                            name={role}
                            onChange={(e) => handleCheck(e)}
                          />
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
                          <Checkbox name={tag} onChange={handleCheck} />
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button
                className={styles.pendingButton}
                onClick={() => setShowPending(true)}
              >
                Your Pending Requests
                <span>{user.pending_groups?.length}</span>
              </button>
            </div>
            <div className={styles.right}>
              {groupId ? null : (
                <h5 className={styles.results}>
                  Teams <span>({allGroups.length} results)</span>
                </h5>
              )}
              {groupId
                ? allGroups
                    .filter(
                      (group) =>
                        group.group_id.includes(groupId) ||
                        group.group_id.includes(groupId.substring(1))
                    )
                    .map((group, ind) => {
                      return (
                        <div onClick={() => onCardClick(group)}>
                          <TeamCard key={ind} data={group} />
                        </div>
                      );
                    })
                : allGroups.map((group, ind) => {
                    return (
                      <div onClick={() => onCardClick(group)}>
                        <TeamCard key={ind} data={group} />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}