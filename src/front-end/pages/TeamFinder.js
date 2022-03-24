import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Login from "../components/dashboard/login";
import Section_Navbar from "../components/section_navbar";
import FindTeam from "../components/dashboard/FindTeam";

import styles from "../css/dashboard/teamfinder.module.scss";

export function TeamFinder() {
  return (
    <div className={styles.container}>
      <Section_Navbar />
      {/* <Login/> */}
      {/* <Dashboard /> */}
      <FindTeam />
      {/* <Footer/> */}
    </div>
  );
}