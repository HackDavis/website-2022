import React, { useState, useEffect } from "react";
import styles from 'front-end/css/doe/schedule.module.scss';
import PinWhite from "front-end/images/doe/PinWhite.svg";
import { saturdayScheduleInfo, sundayScheduleInfo, activitiesInfo } from "./ScheduleInfo";


const ScheduleCard = ({ firstLine, type, title, location, description }, index) => {
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
  const [showAll, setShowAll] = useState(true);
  const [showActivities, setShowActivities] = useState(false);
  const [showWorkshops, setShowWorkshops] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState(() => (event) => true);

  function allSelectedClick() {
    setShowActivities(false);
    setShowWorkshops(false);
    setShowMenu(false);
    setShowAll(true);
    setFilter(() => (event) => true);
  }

  function workshopsSelectedClick() {
    setShowActivities(false);
    setShowMenu(false);
    setShowAll(false);
    setShowWorkshops(true);
    setFilter(() => (event) => event.type === "Workshop")
  }

  function activitiesSelectedClick() {
    setShowAll(false);
    setShowWorkshops(false);
    setShowMenu(false);
    setShowActivities(true);
    setFilter(() => (event) => event.type === "Activity");
  }

  function menuSelectedClick() {
    setShowActivities(false);
    setShowWorkshops(false);
    setShowAll(false);
    setShowMenu(true);
    setFilter(() => (event) => event.type === "Menu");
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2>Schedule</h2>
        <div className={styles.filters}>
          <button className={showAll ? styles.selected : undefined} onClick={allSelectedClick}>ALL</button>
          <button className={showWorkshops ? styles.selected : undefined} onClick={workshopsSelectedClick}>Workshops</button>
          <button className={showActivities ? styles.selected : undefined} onClick={activitiesSelectedClick}>Activities</button>
          <button className={showMenu ? styles.selected : undefined} onClick={menuSelectedClick}>Menu</button>
        </div>
        <h3>Saturday <span>4/16</span></h3>
        <div className={styles.scheduleCards}>
          {saturdayScheduleInfo.filter(filter).map((event, index) => ScheduleCard(event, index))}
        </div>
        <h3 className={styles.sundayTitle}>Sunday <span>4/17</span></h3>
        <div className={styles.scheduleCards}>
          {sundayScheduleInfo.filter(filter).map((event, index) => ScheduleCard(event, index))}
        </div>
        {showAll || showActivities ?
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
