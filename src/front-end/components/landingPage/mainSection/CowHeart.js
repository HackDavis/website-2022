import React from "react";
import styles from "../../../css/landingPage/mainSection/CowHeart.module.scss";
import base_image from '../../../images/main_section/cow_heart/base_image.svg';
import code_box from '../../../images/main_section/cow_heart/code_box.svg';
import heart from '../../../images/main_section/cow_heart/heart.svg';
import lightbulb from '../../../images/main_section/cow_heart/lightbulb.svg';
import hand_up from '../../../images/main_section/cow_heart/hand_up.svg';
import hand_down from '../../../images/main_section/cow_heart/hand_down.svg';

export function CowHeart() {

  return (
    <>
      <section className={styles.container}>
        <img className={styles.base_image} src={base_image} alt="cow image" />
        <img className={styles.hand_up} src={hand_up} alt="cow hand" />
        <img className={styles.lightbulb} src={lightbulb} alt="lightbulb" />
        <img className={styles.code_box} src={code_box} alt="code box" />
        <img className={styles.heart} src={heart} alt="heart" />
      </section>
    </>
  );
}
