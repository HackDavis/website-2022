import React from "react";
import styles from '../../../css/landingPage/mainSection/MainBlock.module.scss';

export function MainBlock() {
  return (
    <main className={styles.container}>
      <h1>HackDavis</h1>
      <h3><strong>April 16-17, 2022</strong></h3>
      <h3>UC Davis University Credit Union</h3>
      <div>
        <button>PRE-REGISTER</button>
        <button>SPONSOR 2022</button>
      </div>
    </main>
  );
}
