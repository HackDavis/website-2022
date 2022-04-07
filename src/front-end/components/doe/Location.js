import React from "react";
import styles from "../../css/doe/location.module.scss";
import Pin from "front-end/images/doe/Pin.svg";
import Download from "front-end/images/doe/Download.svg";
import doemap from "../../../back-end/db/doemap.pdf";
import MapPic from "front-end/images/doe/MapPic.png";

export function Location() {
    return (
        <>
          <div className={styles.content}>
            <img className={styles.mappic} src={MapPic}/>
            <div>
              <div>
                  <img className={styles.pin} src={Pin}/>
              </div>
              <h2 className={styles.location}>
                  University Credit Union Center,
                  <br/> <span> </span>
                  UC Davis
              </h2>
              <p className={styles.time}>April 16-17, 2022</p>
              <div>
                <a href={doemap} target="_blank">
                  <button className={styles.button}>
                      <img className={styles.download} src={Download}/>
                      EVENT MAP
                  </button>
                </a>
              </div>
            </div>
          </div>  
        </>
    );
}