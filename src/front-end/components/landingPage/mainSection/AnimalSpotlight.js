import React from 'react'
import styles from "../../../css/landingPage/mainSection/AnimalSpotlight.module.scss";
import cow from "../../../images/main_section/animal_spotlight/cow.svg";
import bunny from "../../../images/main_section/animal_spotlight/bunny.svg";
import frog from "../../../images/main_section/animal_spotlight/frog.svg";
import chick from "../../../images/main_section/animal_spotlight/chick.svg";
import spotlight from "../../../images/main_section/animal_spotlight/spotlight.svg";

export function AnimalSpotlight() {
  return (
    <div className={styles.container}>
      <div>
        <div className={`${styles.box} ${styles.cow}`}>
          <img src={spotlight} className={styles.spotlight} alt="spotlight"/>
          <img src={cow} alt="cow image" />
        </div>
        <div className={`${styles.box} ${styles.bunny}`}>
          <img src={spotlight} className={styles.spotlight} alt="spotlight"/>
          <img src={bunny} alt="bunny image"/>
        </div>
      </div>
      <div>
        <div className={`${styles.frog} ${styles.box}`}>
          <img src={spotlight} className={styles.spotlight} alt="spotlight"/>
          <img src={frog} alt="frog image" />
        </div>
        <div className={`${styles.chick} ${styles.box}`}>
          <img src={spotlight} className={styles.spotlight} alt="spotlight"/>
          <img src={chick} alt="chick image" />
        </div>
      </div>
    </div>
  );
}