import React from "react";
import styles from "../css/section_sponsors.module.scss";
import Fmc from "../images/sponsors/FMC.png";
import Matrix from "../images/sponsors/matrix.png";
import Ucdcls from "../images/sponsors/ucdcls.png";
import Ucdavisstore from "../images/sponsors/ucdavisstore.png";
import ucdavismsba from "../images/sponsors/ucdavismsba.png";
import coe from "../images/sponsors/coe.png";
import cs from "../images/sponsors/cs.png";
import globalaffairs from "../images/sponsors/globalaffairs.png";
import asucd from "../images/sponsors/asucd.png";
import cfc from "../images/sponsors/cfc.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";

const Section_Sponsors = () => {
  return (
    <Fade>
      <div className={styles.container}>
        <section className={styles.contentWrapper}>
          <div className={styles.headerText}>Sponsors and Partners</div>
          <div className={styles.sponsors}>
            <a href="https://www.fordfund.org/" target="_blank">
              <img className={`${styles.imageStyle}`} src={Fmc} />
            </a>
            <a href="https://engineering.ucdavis.edu/" target="_blank">
              <img className={`${styles.imageStyle}`} src={coe} />
            </a>
            <a href="https://cs.ucdavis.edu/" target="_blank">
              <img className={`${styles.imageStyle}`} src={cs} />
            </a>
            <a href="https://globalaffairs.ucdavis.edu/" target="_blank">
              <img className={`${styles.imageStyle}`} src={globalaffairs} />
            </a>
            <a href="https://mtx.gg/" target="_blank">
              <img className={`${styles.imageStyle}`} src={Matrix} />
            </a>
            <a
              href=" https://gsm.ucdavis.edu/master-science-business-analytics-msba"
              target="_blank"
            >
              <img className={`${styles.imageStyle}`} src={ucdavismsba} />
            </a>
            <a href="https://lettersandscience.ucdavis.edu/" target="_blank">
              <img className={`${styles.imageStyle}`} src={Ucdcls} />
            </a>
            <a href=" https://ucdavisstores.com/home/" target="_blank">
              <img className={`${styles.imageStyle}`} src={Ucdavisstore} />
            </a>
            <a href=" https://asucd.ucdavis.edu/" target="_blank">
              <img className={`${styles.imageStyle}`} src={asucd} />
            </a>
            <a href=" https://csi.ucdavis.edu/cfc/" target="_blank">
              <img className={`${styles.imageStyle}`} src={cfc} />
            </a>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Section_Sponsors;
