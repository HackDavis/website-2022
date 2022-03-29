import React from "react";
import TeamFinderHome from "../components/dashboard/TeamFinderHome";
import Login from "../components/dashboard/login";
import Section_Navbar from "../components/section_navbar";
import FindTeam from "../components/dashboard/FindTeam";
import PendingTeams from "../components/dashboard/PendingTeams";
import SubmitRequest from "../components/dashboard/SubmitRequest";
export function TeamFinder() {
  return (
    <div >
      <Section_Navbar />
      <Login/>
      {/* <TeamFinderHome /> */}
      {/* <FindTeam /> */}
      {/* <PendingTeams/> */}
      {/* <SubmitRequest/> */}
      {/* <Footer/> */}
    </div>
  );
}