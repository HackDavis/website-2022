import React from "react";
import TeamCard from "./TeamCard";
import styles from "../../css/dashboard/submitrequest.module.scss";
import backarrow from "../../images/dashboard/whiteBackArrow.svg";

export default function SubmitRequest() {
  return (
    <div>
      <div className={styles.container}>
        <a href="" className={styles.back}>
          <img src={backarrow} className={styles.backarrow} />
          Back to Search
        </a>
        <div className={styles.teamCard}></div>
        <form>
          <label>
            Join the team
            <textarea
              className={styles.textArea}
              placeholder="Why would you like to join our team? What are your goals? Tell us about yourself."
              name="request"
              // onChange={handleDescChange}
              maxLength={250}
            />
            <div className={styles.characterCount}>
              {/* {text.length}/250 Characters */}
            </div>
          </label>
          <button className={styles.submit}>SUBMIT REQUEST</button>
        </form>
      </div>
    </div>
  );
}