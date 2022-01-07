import React from "react";
import styles from "../css/section_contact.module.scss";

const Section_Contact = () => {
    return (
        <div className={`text-xs-left text-md-center ${styles.body}`}>
            Need help? Contact <br className="d-md-none d-lg-none"></br> 
            <strong>team@hackdavis.io</strong>.
        </div>
    )
}

export default Section_Contact;