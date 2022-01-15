import React from 'react'
import styles from "../../../css/landingPage/mainSection/SmallBoxes.module.scss";

function Box() {
  return (
    <div className={styles.box}></div>
  );
}

export function SmallBoxes() {
  return (
    
    <div className={styles.container}>
      <div>
        <Box />
        <Box />
      </div>
      <div>
        <Box />
        <Box />
      </div>
    </div>
  );
}
