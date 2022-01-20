import React from "react";
import styles from '../../../css/landingPage/mainSection/FlyingAnimals.module.scss';
import bottomright_cloud from "../../../images/main_section/flying_animals/bottomright_cloud.svg";
import top_left_cloud from "../../../images/main_section/flying_animals/top_left_cloud.svg";

// Note: The block below the main block

export function FlyingAnimals() {
  return (
    <section className={styles.container}>
      <img src={bottomright_cloud}></img>
    </section>
  );
}
