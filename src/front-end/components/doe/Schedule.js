import React, { useState, useEffect, useRef } from "react";
import styles from "front-end/css/doe/schedule.module.scss";
import PinWhite from "front-end/images/doe/PinWhite.svg";
import {
  saturdayScheduleInfo,
  sundayScheduleInfo,
  activitiesInfo
} from "../../../back-end/db/ScheduleInfo";

function ScheduleCard(
  { firstLine, type, title, location, description, start, end },
  index
) {
  const colorClass =
    type === "Workshop"
      ? styles.blue
      : type === "Activity"
        ? styles.yellow
        : type === "Menu"
          ? styles.green
          : styles.white;
  const now = new Date();
  const ongoing = now > start && now < end;
  let cardClass = ongoing
    ? [styles.cardContainer, styles.ongoing].join(" ")
    : styles.cardContainer;

  function Description() {
    if (!description) return null;
    if (type === "Menu") {
      return (
        <h5 className={styles.desc}>{description.split("\n").map(food => {
          return <>{food}<br /></>;
        })}</h5>
      );
    }
    return <h5 className={styles.desc}>{description}</h5>;
  }

  return (
    <div className={cardClass} key={index}>
      <div className={`${styles.dot} ${colorClass}`}></div>
      <div className={styles.cardInfo}>
        <p>{firstLine && firstLine}</p>
        <h4 className={colorClass}>{title && title}</h4>
        <Description />
        {location && (
          <h6>
            <img src={PinWhite} alt="location icon" />
            <span>{location}</span>
          </h6>
        )}
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
  const [saturdaySchedule, setSaturdaySchedule] =
    useState(saturdayScheduleInfo);
  const [sundaySchedule, setSundaySchedule] = useState(sundayScheduleInfo);

  useEffect(() => {
    if (toShow === all) setFilter(() => (event) => true);
    if (toShow === activities)
      setFilter(() => (event) => event.type === "Activity");
    if (toShow === workshops)
      setFilter(() => (event) => event.type === "Workshop");
    if (toShow === menu) setFilter(() => (event) => event.type === "Menu");
  }, [toShow]);

  useEffect(() => {
    setSaturdaySchedule(saturdayScheduleInfo.filter(filter));
    setSundaySchedule(sundayScheduleInfo.filter(filter));
  }, [filter]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2>Schedule</h2>
        <div className={styles.filters}>
          <button
            className={toShow === all ? styles.selected : undefined}
            onClick={() => setToShow(all)}
          >
            ALL
          </button>
          <button
            className={toShow === activities ? styles.selected : undefined}
            onClick={() => setToShow(activities)}
          >
            Activities
          </button>
          <button
            className={toShow === workshops ? styles.selected : undefined}
            onClick={() => setToShow(workshops)}
          >
            Workshops
          </button>
          <button
            className={toShow === menu ? styles.selected : undefined}
            onClick={() => setToShow(menu)}
          >
            Menu
          </button>
        </div>
        <div className={styles.schedules}>
          {saturdaySchedule.length > 0 && (
            <div className={styles.saturdayContainer}>
              <h3>
                Saturday <span>4/16</span>
              </h3>
              <div className={styles.scheduleCards}>
                {saturdaySchedule.map((event, index) =>
                  ScheduleCard(event, index)
                )}
                {saturdaySchedule.length >= 5 && <span className={styles.gradient_bot} />}
              </div>
            </div>
          )}
          <div className={styles.sundayContainer}>
            {sundaySchedule.length > 0 && (
              <>
                <h3 className={styles.sundayTitle}>
                  Sunday <span>4/17</span>
                </h3>
                <div className={styles.scheduleCards}>
                  {sundayScheduleInfo
                    .filter(filter)
                    .map((event, index) => ScheduleCard(event, index))}
                  {sundaySchedule.length >= 5 && <span className={styles.gradient_bot} />}
                </div>
              </>
            )}
          </div>
        </div>
        {(toShow === all || toShow === activities) && (
          <div className={styles.activitiesContainer}>
            <h3 className={styles.activityh3}>Activities available 24/7</h3>
            <div className={styles.activityCards}>
              {activitiesInfo.map((activityEvent, index) =>
                ScheduleCard(activityEvent, index)
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
