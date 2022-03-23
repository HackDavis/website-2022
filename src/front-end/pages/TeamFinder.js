import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Login from "../components/dashboard/login";
import Section_Navbar from "../components/section_navbar";
// import Footer from "../components/footer";
import styles from "../css/dashboard/teamfinder.module.scss";

export function TeamFinder() {
  return (
    <div className={styles.container}>
      <Section_Navbar/>
      <Login/>
      {/* <Dashboard /> */}
      {/* <Footer/> */}
    </div>
  );
}