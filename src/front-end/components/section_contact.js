import React from "react";
import styles from "../css/section_contact.module.scss";

const Section_Contact = () => {
    return (
        <div className={styles.container}>
            <span>Need help? Contact <strong>team@hackdavis.io</strong></span>
            {/* <strong className={styles.strong}>team@hackdavis.io</strong> */}
        </div>
    )
}

export default Section_Contact;