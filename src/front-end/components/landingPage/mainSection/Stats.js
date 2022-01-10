import React from "react";
import styles from "../../../css/landingPage/Stats.module.scss";

export function Stats({media}) {
  const bottom_diagonal = media === "mobile" ? styles.bottom_diagonal_mobile : styles.bottom_diagonal_non_mobile

  return (
    <>
      <section className={styles.container}>
        <h1>
          700+ hackers
          <br />
          36 hours
          <br />
          140+ projects
          <br />
          &#36;15,000+ prizes
        </h1>
        <button>VIEW 2021 WINNERS</button>
      </section>
      <div className={bottom_diagonal}></div>
    </>
  );
}
