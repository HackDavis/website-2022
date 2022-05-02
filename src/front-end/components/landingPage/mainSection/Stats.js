import React from "react";
import styles from "../../../css/landingPage/mainSection/Stats.module.scss";
import Fade from "react-reveal/Fade";

export function Stats() {

  return (
    <>
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2>
          <span>750+</span> hackers
          <br />
          <span>36 </span>hours
          <br />
          <span>150+</span> projects
          <br />
          <span>&#36;14,000+</span> prizes
        </h2>
        <a href="https://hackdavis.devpost.com/project-gallery" target="_blank">
          <button className={styles.hover_winners}>VIEW 2022 WINNERS</button>
        </a>
      </section>
    </div>
    </>
  );
}
