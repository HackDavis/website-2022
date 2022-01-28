import React from "react";
import styles from '../css/section_sponsors.module.scss';
import Fmc from "../images/sponsors/FMC.png";
import Matrix from "../images/sponsors/matrix.png";
import Ucdcls from "../images/sponsors/ucdcls.png";
import Ucdavisstore from "../images/sponsors/ucdavisstore.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Section_Sponsors = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerText}>Sponsors</div>
                <div className={styles.sponsors}>
                    <a href="https://www.fordfund.org/" target="_blank">
                        <img className={`${styles.imageStyle}`} src={Fmc} />
                    </a>
                    <a href="https://mtx.gg/" target="_blank">
                        <img className={`${styles.imageStyle} ${styles.imageStyle_medium}`} src={Matrix} />
                    </a>
                    <a href="https://lettersandscience.ucdavis.edu/" target="_blank">
                        <img className={`${styles.imageStyle} ${styles.imageStyle_small}`} src={Ucdcls} />
                    </a>
                    <a href=" https://ucdavisstores.com/home/" target="_blank">
                        <img className={`${styles.imageStyle} ${styles.imageStyle_small}`} src={Ucdavisstore} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Section_Sponsors;