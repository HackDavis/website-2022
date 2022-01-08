import React from "react";
import styles from "../../../css/landingPage/BlockBelowStat.module.scss"

export function BlockBelowStat() {
  return (
    <>
      <div className={styles.top_diagonal}></div>
      <section className={styles.contents}></section>
      <div className={styles.bottom_diagonal}></div>
    </>  
  );
}
