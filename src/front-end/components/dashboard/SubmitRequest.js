import React, { useState } from "react";
import TeamCard from "./TeamCard";
import styles from "../../css/dashboard/submitrequest.module.scss";
import backarrow from "../../images/dashboard/whiteBackArrow.svg";
import { groupApplication } from "../../../back-end/DBQueries/groupApplication";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';

export default function SubmitRequest(props) {
  const [reason, setReason] = useState("");
  const [user] = useRecoilState(userStateAtom);

  const handleDescChange = (e) => {
    setReason(e.target.value);
  };
  
  const handleSubmit = (e) => {
    // probably need to change this to an actual page redirection
    e.preventDefault();
    groupApplication(user.user_id, props.group.group_id, reason);
  };

  return (
    <div>
      <div className={styles.container}>
        <a onClick={() => props.setShowRequest(false)} className={styles.back}>
          <img src={backarrow} className={styles.backarrow} />
          Back to Search
        </a>
        <TeamCard showRequest={props.showRequest}  data={props.group}/>
        <form>
          <label>
            Join the team
            <textarea
              className={styles.textArea}
              placeholder="Why would you like to join our team? What are your goals? Tell us about yourself."
              name="request"
              onChange={handleDescChange}
              maxLength={250}
            />
            <div className={styles.characterCount}>
              {reason.length}/250 Characters
            </div>
          </label>
          <button className={styles.submit} onClick={handleSubmit}>SUBMIT REQUEST</button>
        </form>
      </div>
    </div>
  );
}