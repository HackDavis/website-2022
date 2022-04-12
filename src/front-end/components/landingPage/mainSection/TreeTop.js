import React from "react";
import styles from "../../../css/landingPage/mainSection/TreeTop.module.scss";
import tree_base_image from "../../../images/main_section/treetop/tree_base_image.svg";
import cow from "../../../images/main_section/treetop/cow.svg";
import lightbulb from "../../../images/main_section/treetop/lightbulb.svg";
import leaves_canopy from "../../../images/main_section/treetop/leaves_canopy.svg";
import leaves_branch from "../../../images/main_section/treetop/leaves_branch.svg";
import left_sunrays from "../../../images/main_section/treetop/left_sunrays.svg";
import Fade from "react-reveal/Fade";

export function TreeTop() {

  return (
    <section className={styles.container}>
      <img src={tree_base_image} className={styles.tree_base_image} alt="tree image" />
      <div className={styles.floating_cow_wrap}>
        <img src={cow} className={styles.floating_cow} alt="flying cow" />
      </div>
      <img src={lightbulb} className={styles.lightbulb} alt="lightbulb" />
      <img src={leaves_branch} className={styles.leaves_branch} alt="branch leaves" />
      <img src={leaves_canopy} className={styles.leaves_canopy} alt="canopy leaves" />
      <img src={left_sunrays} className={styles.left_sunrays} alt="sun rays" />
    </section>
  );
}
