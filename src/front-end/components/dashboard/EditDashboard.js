import React from "react";
import styles from "../../css/dashboard/editdashboard.module.scss";

export default function EditDashboard() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.pfp}></div>
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