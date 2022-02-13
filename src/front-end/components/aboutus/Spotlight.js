import React from 'react';
import styles from "../../css/aboutuspage/spotlight.module.scss";
import DirectorBlurb from "./DirectorBlurb";

export default function Spotlight(props) {
  
    return(
    <div className={styles.container}>
        <DirectorBlurb
          className={styles.spotlight}
          sizing={0}
          director={props.director}
          isspotlight={true}
        />
    </div>
  );
}
