import React from "react";
import DiscordWhite from "front-end/images/doe/DiscordWhite.svg";
import FacebookWhite from "front-end/images/doe/FacebookWhite.svg";
import InstagramWhite from "front-end/images/doe/InstagramWhite.svg";
import styles from "front-end/css/doe/socials.module.scss";

export function Socials() {
    return(
        <>
        <div className={styles.container}>
            <h2 className={styles.heading}> Let's stay in touch! </h2>
            <p className={styles.text}>Follow us on social media </p>
            <div className={styles.iconcontainer}>
                <a href="https://m.facebook.com/HackDavis/" target="_blank">
                    <img src={FacebookWhite} className={styles.iconfb}/>
                </a>
                <a href="https://www.instagram.com/hackdavis/?hl=en" target="_blank">
                    <img src={InstagramWhite} className={styles.icon} />
                </a>
                <a href="https://discord.gg/wc6QQEc" target="_blank">
                    <img src={DiscordWhite} className={styles.icon} />
                </a>
            </div>
        </div>
        </>
    );
}
