import React from 'react';
import styles from "front-end/css/myteam/RemoveMemberModal.module.scss";
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { isLeaveGroupAtom } from "recoil/atoms/isLeaveGroupAtom";
import { deleteActiveMember } from "back-end/DBQueries/deleteActiveMember";
import { removeActiveMemberUIDAtom } from 'recoil/atoms/removeActiveMemberUIDAtom';
import { SetUserGroupID } from "../../../recoil/selectors/setUserGroupID.js";
import { SetGroupMembers } from "../../../recoil/selectors/setGroupMembers";
import { groupStateAtom } from 'recoil/atoms/groupAtom';
import AngryCow from "front-end/images/myteam/angryCow.svg";
import BlackX from "front-end/images/myteam/blackx.svg";
import { useNavigate } from "react-router-dom";

export function LeaveGroupModal() {
  const setIsLeaveGroup = useSetRecoilState(isLeaveGroupAtom);
  const group = useRecoilValue(groupStateAtom);
  const removeActiveMemberUID = useRecoilValue(removeActiveMemberUIDAtom);
  const setUserGroupID = useSetRecoilState(SetUserGroupID);
  const setGroupMembers = useSetRecoilState(SetGroupMembers);
  const navigate = useNavigate();

  async function Remove() {
    // console.log(` remove active member uid: ${removeActiveMemberUID}`);
    let new_group_members = await deleteActiveMember(removeActiveMemberUID, group.group_id);
    setUserGroupID("");
    setGroupMembers(new_group_members);
    setIsLeaveGroup(false);
    //console.log("successfully removed");
    navigate("/teamfinder");
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.topHalf}>
          <div className={styles.exitButtonContainer}>
            <button className={styles.exitButton} onClick={() => setIsLeaveGroup(false)}><img src={BlackX} alt="exit button"></img></button>
          </div>
          <img src={AngryCow} alt="angry cow image" />
        </div>
        <div className={styles.bottomHalf}>
          <h2 className={styles.warningText}>Are you sure you want <br/> to <span>leave</span> your team?</h2>
          <div className={styles.buttonContainer}>
            <button className={styles.keepButton} onClick={() => setIsLeaveGroup(false)}>STAY</button>
            <button className={styles.removeButton} onClick={Remove}>LEAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
