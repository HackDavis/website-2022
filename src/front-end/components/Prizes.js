import React from "react";
import styles from "../css/prizes.module.scss";
import { PrizeCard } from "./PrizeCard";
import { PrizeCardInfo } from "../../back-end/PrizeCardInfo";

export function Prizes() {
  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.title}>APIs & Prizes</h2>
        <div className={styles.prizes}>
          {PrizeCardInfo.map((prizeInfo, index) => {
            return <PrizeCard key={index} prizeInfo={prizeInfo} />;
          })}
        </div>
      </div>
    </>
  );
}