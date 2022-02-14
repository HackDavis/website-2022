import React from "react";
import styles from "../../../css/landingPage/mainSection/About.module.scss";

export function About() {

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2>
          hack for <br /> social good
        </h2>
        <p>
          With the rapid advancement of technology, it is important to use its
          power in ways that benefit society. HackDavis challenges its
          participants to hack for social good, and create an opportunity for us
          to explore the intersection between technology and society.
          <br /> <br />
          This April, over 800 students, hackers, and creators will come 
          together for a weekend of hacking. For the 7th year in a row, 
          we will bring the most talented students in California 
          (and beyond!) to address the world’s most pressing issues.
        </p>
      </section>
    </div>
  );
}
