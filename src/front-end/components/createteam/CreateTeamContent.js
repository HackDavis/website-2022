import React, { useState, useEffect, Fragment } from "react";
import styles from "../../css/createteam/CreateTeamContent.module.scss";
import BackArrow from "../../images/createteam/backArrow.svg";
import goldenTicket from "../../images/createteam/goldenTicket.svg";
import Roles from "../../../back-end/db/Roles.js";
import Tags from "../../../back-end/db/Tags.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
import { SetUserGroupID } from "../../../recoil/selectors/setUserGroupID";
import { SetUserPendingGroups } from "../../../recoil/selectors/setUserPendingGroups";
import { SetUserPendingInvitations } from "../../../recoil/selectors/setUserPendingInvitations.js";
import { createGroup } from "../../../back-end/DBQueries/createGroup.js";
import { setRoles } from "../../../back-end/DBQueries/setRoles.js";
import { setTags } from "../../../back-end/DBQueries/setTags.js";
import { SetRolesState } from "../../../recoil/selectors/setRolesState";
import { SetTagsState } from "../../../recoil/selectors/setTagsState.js";
import { useNavigate } from "react-router-dom";
import { SignInHardCode } from "./SignInHardCode.js";
import { Checkbox } from './Checkbox';

export function CreateTeamContent() {
  const [user, setUser] = useRecoilState(userStateAtom);
  const [roles, setUserRoles] = useState(new Set());
  const [tags, setUserTags] = useState(new Set());
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [group, setGroup] = useRecoilState(groupStateAtom);
  
  const navigate = useNavigate();

  const setUserGroupID = useSetRecoilState(SetUserGroupID);
  const setUserPendingGroups = useSetRecoilState(SetUserPendingGroups);
  const setUserPendingInvitations = useSetRecoilState(
    SetUserPendingInvitations
  );
  const setRolesSelector = useSetRecoilState(SetRolesState);
  const setTagsSelector = useSetRecoilState(SetTagsState);

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeDesc = (event) => {
    setDesc(event.target.value);
  };

  async function createGroupClick(e) {
    e.preventDefault();
    const newGroup = await createGroup(user.email, user.user_id, name, desc);

    if (newGroup == null) {
      console.log("createGroup Error: user is already in a group");
    } else {
      // setRSVP for front-end Recoil atom
      setGroup(newGroup);
      setUserGroupID(newGroup.group_id);
      setUserPendingGroups([]);
      setUserPendingInvitations([]);
      console.log(Array.from(roles));
      console.log(Array.from(tags));
      await setRoles(newGroup.group_id, Array.from(roles));
      await setTags(newGroup.group_id, Array.from(tags));
      setRolesSelector(Array.from(roles));
      setTagsSelector(Array.from(tags));
      navigate("/myteam");
    }
  }

  function changeRole(e) {
    const newRoles = new Set(roles);
    if (e.target.checked) {
      newRoles.add(e.target.name);
    } else {
      newRoles.delete(e.target.name);
    }
    setUserRoles(newRoles);
  }

  function changeTags(e) {
    const newTags = new Set(tags);
    if (e.target.checked) {
      newTags.add(e.target.name);
    } else {
      newTags.delete(e.target.name);
    }
    setUserTags(newTags);
  }

  useEffect(() => {
    console.log({ roles: Array.from(roles), tags: Array.from(tags) });
  }, [roles, tags]);

  return (
    <>
      <div className={styles.banner}>
        <div>
          <a href="">
            <img src={BackArrow} className={styles.backarrow} />
            Back to Team Finder
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <h2>
          Hi {user.name}!{" "}
          <img
            src={goldenTicket}
            className={styles.goldenTicket}
            alt="golden ticket"
          />
        </h2>
        {/* <SignInHardCode /> */}
        <form onSubmit={createGroupClick} className={styles.setup}>
          <div className={styles.column1}>
            <label>Team Name</label>
            <textarea
              type="text"
              placeholder="Best team ever"
              value={name}
              maxLength="20"
              onChange={changeName}
              rows="1"
              required
            ></textarea>
            <p>{name.length}/20 characters</p>
            <label>Team Description</label>
            <textarea
              type="text"
              placeholder="Project goals, professional interests, what you are looking for..."
              value={desc}
              maxLength="250"
              onChange={changeDesc}
              // rows="9"
              required
            ></textarea>
            <p>{desc.length}/250 characters</p>
          </div>
          <div className={styles.column2}>
            <label>What skills/tools are you looking for?</label>
            <div className={styles.tags}>
              <div className={styles.skillsContainer}>
                <h4>Skillset</h4>
                <div>
                  {Roles.map((role) => {
                    return (
                      <div key={role}>
                        <Checkbox name={role} onChange={changeRole} />
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.toolsContainer}>
                <h4>Tools</h4>
                <div>
                  {Tags.map((tag) => {
                    return (
                      <div key={tag}>
                        <Checkbox name={tag} onChange={changeTags} />
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <input
              type="submit"
              className={styles.createTeamButton}
              value="CREATE YOUR TEAM"
            />
          </div>
          {/* {user ? <h1>{user.group_id}</h1> : <h1>createGroup not called yet</h1>} */}
        </form>
      </div>
    </>
  );
}
