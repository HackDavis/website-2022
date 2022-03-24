import React from "react";
import styles from "front-end/css/myteamadmin/DissolveGroupModal.module.scss";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { isDissolveGroupAtom } from "recoil/atoms/isDissolveGroupAtom";
import { deleteGroup } from "back-end/DBQueries/deleteGroup";
import { groupStateAtom } from "recoil/atoms/groupAtom";
import AngryCow from "front-end/images/myteam/angryCow.svg";
import BlackX from "front-end/images/myteam/blackx.svg";
import { SetUserGroupID } from "../../../recoil/selectors/setUserGroupID.js";
import { useNavigate } from "react-router-dom";

export function DissolveGroupModal() {
  const setIsDissolveGroupModal = useSetRecoilState(isDissolveGroupAtom);
  const [group, setGroup] = useRecoilState(groupStateAtom);
  const setUserGroupID = useSetRecoilState(SetUserGroupID);
  const navigate = useNavigate();

  async function Dissolve() {
    try {
      await deleteGroup(group.group_id);
    } catch (e) {
      console.log("delete group api error: ", e);
      return;
    }
    setIsDissolveGroupModal(false);
    console.log("dissolved");
    navigate("/createteam");
    setGroup([]);
    setUserGroupID("");
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.topHalf}>
          <div className={styles.exitButtonContainer}>
            <button
              className={styles.exitButton}
              onClick={() => setIsDissolveGroupModal(false)}
            >
              <img src={BlackX} alt="exit button"></img>
            </button>
          </div>
          <img src={AngryCow} alt="angry cow image" />
        </div>
        <div className={styles.bottomHalf}>
          <h2 className={styles.warningText}>
            Are you sure you want to <span>dissolve</span> your team?
          </h2>
          <div className={styles.buttonContainer}>
            <button
              className={styles.keepButton}
              onClick={() => setIsDissolveGroupModal(false)}
            >
              KEEP
            </button>
            <button className={styles.dissolveButton} onClick={Dissolve}>
              DISSOLVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
