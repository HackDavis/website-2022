import React from "react";
import styles from "../../../css/landingPage/LastSlantedBlock.module.scss";

export function LastSlantedBlock({media}) {
  const top_diagonal = media === "mobile" ? styles.top_diagonal_mobile : styles.top_diagonal_non_mobile

  return (
    <>
      <div className={top_diagonal}></div>
      <section className={styles.contents}></section>
    </>
  );
}
