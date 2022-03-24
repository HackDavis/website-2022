import React from "react";
import TeamFinderHome from "../components/dashboard/TeamFinderHome";
import Login from "../components/dashboard/login";
import Section_Navbar from "../components/section_navbar";
import FindTeam from "../components/dashboard/FindTeam";

import styles from "../css/dashboard/teamfinder.module.scss";

export function TeamFinder() {
  return (
    <div className={styles.container}>
      <Section_Navbar />
      {/* <Login/> */}
      {/* <TeamFinderHome /> */}
      <FindTeam />
      {/* <Footer/> */}
    </div>
  );
}