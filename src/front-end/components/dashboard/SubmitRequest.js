import React, { useState } from "react";
import TeamCard from "./TeamCard";
import SubmitModal from "./SubmitModal";
import styles from "../../css/dashboard/submitrequest.module.scss";
import backarrow from "../../images/dashboard/whiteBackArrow.svg";
import { groupApplication } from "../../../back-end/DBQueries/groupApplication";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { updateUserPendingGroup } from "../../../recoil/selectors/updateUserPendingGroup";
import { updateGroupPendingMember } from "../../../recoil/selectors/updateGroupPendingMember";

export default function SubmitRequest(props) {
  const [reason, setReason] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [user] = useRecoilState(userStateAtom);
  const setUpdateUserPendingGroup = useSetRecoilState(updateUserPendingGroup);
  const setUpdateGroupPendingMember = useSetRecoilState(updateGroupPendingMember);

  const handleDescChange = (e) => {
    setReason(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    // probably need to change this to an actual page redirection
    e.preventDefault();
    let pending_members_map_copy = await groupApplication(user.user_id, props.group.group_id, reason);
    setUpdateUserPendingGroup(props.group.group_id);
    setUpdateGroupPendingMember(pending_members_map_copy);
    setShowModal(true);
  };

  return (
    <div>
      <div className={styles.container}>
        <a onClick={() => props.setShowRequest(false)} className={styles.back}>
          <img src={backarrow} className={styles.backarrow} />
          Back to Search
        </a>
        <TeamCard showRequest={props.showRequest} data={props.group} />
        <form onSubmit={handleSubmit}>
          <label>
            Join the team
            <textarea
              className={styles.textArea}
              placeholder="Why would you like to join our team? What are your goals? Tell us about yourself."
              name="request"
              onChange={handleDescChange}
              maxLength={250}
              required
            />
            <div className={styles.characterCount}>
              {reason.length}/250 Characters
            </div>
          </label>
          <input
            type="submit"
            value="SUBMIT REQUEST"
            className={styles.submit}
          />
        </form>
      </div>
      {showModal ? <SubmitModal setShowModal={setShowModal} setShowRequest={props.setShowRequest}/> : null}
    </div>
  );
}