import React from "react";
import styles from "../../../css/landingPage/BlockBelowStat.module.scss"

export function BlockBelowStat({media}) {
  const bottom_diagonal = media === "mobile" ? styles.bottom_diagonal_mobile : styles.bottom_diagonal_non_mobile;

  return (
    <>
      { media == "mobile" ? <div className={styles.top_diagonal_mobile}></div> : null }
      <section className={styles.contents}></section>
      <div className={bottom_diagonal}></div>
    </>  
  );
}
