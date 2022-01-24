import React from "react";
import styles from "../../../css/landingPage/mainSection/Stats.module.scss";

export function Stats() {

  return (
    <>
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2>
          <span>700+</span> hackers
          <br />
          <span>36 </span>hours
          <br />
          <span>140+</span> projects
          <br />
          <span>&#36;15,000+</span> prizes
        </h2>
        <button className={styles.hover_winners}>VIEW 2021 WINNERS</button>
      </section>
    </div>
    </>
  );
}
