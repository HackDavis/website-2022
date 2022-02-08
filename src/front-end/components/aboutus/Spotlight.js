import React from 'react';
import styles from "../../css/aboutuspage/spotlight.module.scss";
import DirectorBlurb from "./DirectorBlurb";

export default function Spotlight(props) {
  
    return(
    <div className={styles.container}>
        <DirectorBlurb
          sizing={0}
          director={props.director}
          // directorImage={props.directorImage}
          // directorName={props.director.name}
          // directorDesc={props.director.description}
          // linkedin={props.director.linkedin}
        />
    </div>
  );
}
