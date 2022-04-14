import React from "react";
import styles from "../../css/doe/prizecard.module.scss";

export function PrizeCard({ prizeInfo }) {
  const colorClass = prizeInfo.color == "yellow" ? styles.yellow : styles.green;

  return (
    <>
      <div className={styles.container}>
        <details className={styles.card}>
          <summary className={colorClass}>
            <h3>{prizeInfo.title}</h3>
          </summary>
          <p>
            {prizeInfo.prize &&
              <>
                {prizeInfo.prize}
                <br />
                <br hidden={prizeInfo.description === ""} />
              </>
            }
            {prizeInfo.description}
          </p>
        </details>
      </div>
    </>
  );
}