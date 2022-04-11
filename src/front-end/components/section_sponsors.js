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
import twilio from "../images/sponsors/twilio.png";
import citris from "../images/sponsors/citris.png";
import visityolo from "../images/sponsors/visityolo.png";
import eclipse from "../images/sponsors/eclipse.png";
import gsec from "../images/sponsors/gsec.png";
import athletics from "../images/sponsors/athletics.png";
import iet from "../images/sponsors/iet.png";
import cpe from "../images/sponsors/cpe.png";
import shds from "../images/sponsors/shds.png";
import visitdavis from "../images/sponsors/visitdavis.jpeg";
import reign from "../images/sponsors/reign.png";
import ultrapress from "../images/sponsors/ultrapress.png";
import datalab from "../images/sponsors/datalab.svg";
import standout from "../images/sponsors/standout.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";

const Section_Sponsors = () => {
  return (
    <Fade>
      <div className={styles.container}>
        <section className={styles.contentWrapper}>
          <h2 className={styles.headerText}>Sponsors and Partners</h2>
          <div className={styles.sponsors}>
            <a className={styles.ford} href="https://www.fordfund.org/" target="_blank">
              <img className={`${styles.imageStyle}`} src={Fmc} />
            </a>
            <a className={styles.twilio} href="https://www.twilio.com/" target="_blank">
              <img className={`${styles.imageStyle}`} src={twilio} />
            </a>
            <a className={styles.matrix} href="https://mtx.gg/" target="_blank">
              <img className={`${styles.imageStyle}`} src={Matrix} />
            </a>
            <div className={styles.mini}>
              <a className={styles.citris} href="https://citris-uc.org/" target="_blank">
                <img className={`${styles.imageStyle}`} src={citris} />
              </a>
              <a className={styles.eclipse} href="https://www.eclipsefoods.com/" target="_blank">
                <img className={`${styles.imageStyle}`} src={eclipse} />
              </a>
              <a className={styles.gsec} href="https://www.greatersacramento.com/" target="_blank">
                <img className={`${styles.imageStyle}`} src={gsec} />
              </a>
              <div className={styles.break}></div>
              <a className={styles.cls} href="https://lettersandscience.ucdavis.edu/" target="_blank">
                <img className={`${styles.imageStyle}`} src={Ucdcls} />
              </a>
              <a className={styles.coe} href="https://engineering.ucdavis.edu/" target="_blank">
                <img className={`${styles.imageStyle}`} src={coe} />
              </a>
              <div className={styles.break}></div>
              <a className={styles.globalaffairs} href="https://globalaffairs.ucdavis.edu/" target="_blank">
                <img className={`${styles.imageStyle}`} src={globalaffairs} />
              </a>
              <a className={styles.cs} href="https://cs.ucdavis.edu/" target="_blank">
                <img className={`${styles.imageStyle}`} src={cs} />
              </a>
              <a className={styles.athletics} href="https://ucdavisaggies.com/" target="_blank">
                <img className={`${styles.imageStyle}`} src={athletics} />
              </a>
              <div className={styles.break}></div>
              <a
                className={styles.msba}
                href=" https://gsm.ucdavis.edu/master-science-business-analytics-msba"
                target="_blank"
              >
                <img className={`${styles.imageStyle}`} src={ucdavismsba} />
              </a>
              <a className={styles.iet} href="https://iet.ucdavis.edu/" target="_blank">
                <img className={`${styles.imageStyle}`} src={iet} />
              </a>
              <a className={styles.datalab} href="https://datalab.ucdavis.edu/" target="_blank">
                <img className={`${styles.imageStyle}`} src={datalab} />
              </a>
              <div className={styles.break}></div>
              <a className={styles.cpe} href="https://cpe.ucdavis.edu/" target="_blank">
                <img className={`${styles.imageStyle}`} src={cpe} />
              </a>
              <a className={styles.shds} href="https://housing.ucdavis.edu/dining/" target="_blank">
                <img className={`${styles.imageStyle}`} src={shds} />
              </a>
              <div className={styles.break}></div>
              <a className={styles.store} href="https://ucdavisstores.com/home/" target="_blank">
                <img className={`${styles.imageStyle}`} src={Ucdavisstore} />
              </a>
              <a className={styles.asucd} href="https://asucd.ucdavis.edu/" target="_blank">
                <img className={`${styles.imageStyle}`} src={asucd} />
              </a>
              <a className={styles.cfc} href="https://csi.ucdavis.edu/cfc/" target="_blank">
                <img className={`${styles.imageStyle}`} src={cfc} />
              </a>
              <div className={styles.break}></div>
              <a className={styles.visitdavis} href="https://visitdavis.org/" target="_blank">
                <img className={`${styles.imageStyle}`} src={visitdavis} />
              </a>
              <a className={styles.yolo} href="https://visityolo.com/" target="_blank">
                <img className={`${styles.imageStyle}`} src={visityolo} />
              </a>
              <div className={styles.break}></div>
              <a className={styles.reign} href="https://reignbodyfuel.com/en-us/" target="_blank">
                <img className={`${styles.imageStyle}`} src={reign} />
              </a>
              <a className={styles.ultrapress} href="https://ultrapress.com/" target="_blank">
                <img className={`${styles.imageStyle}`} src={ultrapress} />
              </a>
              <div className={styles.break}></div>
              <a className={styles.standout} href="http://hackp.ac/mlh-StandOutStickers-hackathons" target="_blank">
                <img className={`${styles.imageStyle}`} src={standout} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Section_Sponsors;
