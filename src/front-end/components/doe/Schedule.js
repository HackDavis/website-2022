import React, { useState, useEffect } from "react";
import styles from 'front-end/css/doe/schedule.module.scss';
import PinWhite from "front-end/images/doe/PinWhite.svg";
import { saturdayScheduleInfo, sundayScheduleInfo, activitiesInfo } from "./ScheduleInfo";

function ScheduleCard({ firstLine, type, title, location, description }, index) {
  const colorClass = type === "Workshop" ? styles.blue : type === "Activity" ? styles.yellow : type === "Menu" ? styles.green : styles.white;

  return (
    <div className={styles.cardContainer} key={index}>
      <div className={`${styles.dot} ${colorClass}`}></div>
      <div className={styles.cardInfo}>
        <p>{firstLine ? firstLine : null}</p>
        <h4 className={colorClass}>{title ? title : null}</h4>
        <h5 className={styles.desc}>{description ? description : null}</h5>
        {location ?
          <h6>
            <img src={PinWhite} alt="location icon" />
            <span>{location}</span>
          </h6>
          : null}
      </div>
    </div>
  );
}

export default function Schedule() {
  const all = 0;
  const activities = 1;
  const workshops = 2;
  const menu = 3;

  const [toShow, setToShow] = useState(all);
  const [filter, setFilter] = useState(() => (event) => true);

  useEffect(() => {
    if (toShow === all) setFilter(() => (event) => true);
    if (toShow === activities) setFilter(() => (event) => event.type === "Activity");
    if (toShow === workshops) setFilter(() => (event) => event.type === "Workshop");
    if (toShow === menu) setFilter(() => (event) => event.type === "Menu");
  }, [toShow]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2>Schedule</h2>
        <div className={styles.filters}>
          <button
            className={toShow === all ? styles.selected : undefined}
            onClick={() => setToShow(all)}
          >ALL
          </button>
          <button
            className={toShow === workshops ? styles.selected : undefined}
            onClick={() => setToShow(workshops)}
          >Workshops
          </button>
          <button
            className={toShow === activities ? styles.selected : undefined}
            onClick={() => setToShow(activities)}
          >Activities
          </button>
          <button
            className={toShow === menu ? styles.selected : undefined}
            onClick={() => setToShow(menu)}
          >Menu
          </button>
        </div>
        <h3>Saturday <span>4/16</span></h3>
        <div className={styles.scheduleCards}>
          {saturdayScheduleInfo.filter(filter).map((event, index) => ScheduleCard(event, index))}
        </div>
        <h3 className={styles.sundayTitle}>Sunday <span>4/17</span></h3>
        <div className={styles.scheduleCards}>
          {sundayScheduleInfo.filter(filter).map((event, index) => ScheduleCard(event, index))}
        </div>
        {toShow === all || toShow === activities ?
          <>
            <h3 className={styles.activityh3}>Activities available 24/7</h3>
            <div className={styles.activityCards}>
              {activitiesInfo.map((activityEvent, index) => ScheduleCard(activityEvent, index))}
            </div>
          </>
          : null
        }
      </section >
    </div >
  );
}
