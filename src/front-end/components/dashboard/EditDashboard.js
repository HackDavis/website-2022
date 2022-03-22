import React from "react";
import styles from "../../css/dashboard/editdashboard.module.scss";
import x from "../../images/dashboard/x.svg";

export default function EditDashboard(props) {
  return (
    <div>
      <div className={styles.container}>
        <img src={x} className={styles.x} alt="close" onClick={() => props.setShowEdit(!props.showEdit)}/>
        <div className={styles.pfp}/>
        <div className={styles.text}>Edit Profile Picture</div>
        <form>
          <input
            className={styles.textField}
            type="text"
            placeholder="Discord Handle"
            name="Discord"
          />
          <textarea
            className={styles.textArea}
            maxLength="250"
            placeholder="Write a 250 character bio here. Share what your skills and hackathon interests..."
            name="bio"
          />
        </form>
      </div>
      <div className={styles.submit}>SUBMIT</div>
    </div>
  );
}