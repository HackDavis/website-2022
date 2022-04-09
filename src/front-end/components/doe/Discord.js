import React from "react";
import DiscordWhite from "front-end/images/doe/DiscordWhite.svg";
import styles from "front-end/css/doe/discord.module.scss";

export function Discord() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2 className={styles.heading}> Join our discord to speak with mentors and connect with hackers. </h2>
        <p className={styles.text}>Read and follow popup instructions to gain access to the server. Discord will be the fastest way to reach the HackDavis team. </p>
        <a href="https://discord.gg/wc6QQEc" target="_blank">
          <button className={styles.button}>
            <img src={DiscordWhite} className={styles.icon} />
            JOIN DISCORD
          </button>
        </a>
      </section>
    </div>
  );
}
