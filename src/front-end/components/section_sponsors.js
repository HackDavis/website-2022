import React from "react";
import styles from '../css/section_sponsors.module.scss';

const Section_Sponsors = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerText}>Sponsors</div>
                <div className={styles.sponsors}>
                    {/* sponsors will go here */}
                </div>
            </div>
        </div>
    )
}

export default Section_Sponsors;