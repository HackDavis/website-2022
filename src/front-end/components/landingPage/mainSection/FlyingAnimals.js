import React from "react";
import styles from '../../../css/landingPage/mainSection/FlyingAnimals.module.scss';
import hero_image from '../../../images/main_section/flying_animals/hero_image.svg';
import swinging_chicky from "../../../images/main_section/flying_animals/swinging_chicky.svg";
import leftjetpack from "../../../images/main_section/flying_animals/leftjetpackclouds.svg";
import rightjetpack from "../../../images/main_section/flying_animals/rightjetpackclouds.svg";


// Note: The block below the main block

export function FlyingAnimals() {
  return (
    <section className={styles.container}>
      <img src={swinging_chicky} className={styles.chick}/>
      <img src={hero_image} className={styles.hero_image}/>
      <img src={leftjetpack} className={styles.left_jetpack}/>
      <img src={rightjetpack} className={styles.right_jetpack}/>
    </section>
  );
}
