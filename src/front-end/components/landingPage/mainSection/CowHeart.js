import React, { useState } from "react";
import styles from "../../../css/landingPage/mainSection/CowHeart.module.scss";
import base_image from '../../../images/main_section/cow_heart/base_image.svg';
import code_box from '../../../images/main_section/cow_heart/code_box.svg';
import heart from '../../../images/main_section/cow_heart/heart.svg';
import lightbulb from '../../../images/main_section/cow_heart/lightbulb.svg';
import hand_up from '../../../images/main_section/cow_heart/hand_up.svg';
import hand_down from '../../../images/main_section/cow_heart/hand_down.svg';
import Fade from "react-reveal/Fade";

export function CowHeart() {
  const [animateHand, setAnimateHand] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);

  return (
    <Fade>
      <section className={styles.container}>
        <img className={styles.base_image} src={base_image} alt="cow image" onMouseMove={() => setAnimateHand(true)} onClick={() => setAnimateHeart(true)} />
        <img className={animateHand ? `${styles.hand_up} ${styles.hand_animate}` : `${styles.hand_up}`} onAnimationEnd={() => setAnimateHand(false)} src={hand_up} alt="cow hand" />
        <img className={styles.lightbulb} src={lightbulb} alt="lightbulb" />
        <img className={styles.code_box} src={code_box} alt="code box" />
        <img className={animateHeart ? `${styles.heart} ${styles.heart_animate}` : `${styles.heart}`} onClick={() => setAnimateHeart(true)} onAnimationEnd={() => setAnimateHeart(false)} src={heart} alt="heart" />
      </section>
    </Fade>
  );
}
