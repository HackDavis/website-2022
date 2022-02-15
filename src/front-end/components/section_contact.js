import React from "react";
import styles from "../css/section_contact.module.scss";
import ContactImage from "../images/Contact.svg";

const Section_Contact = () => {
    return (
        <div className={styles.container}>
            <img src={ContactImage} alt="contact image"/>
        </div>
    );
};

export default Section_Contact;