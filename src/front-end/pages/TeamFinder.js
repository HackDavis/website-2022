import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Section_Navbar from "../components/section_navbar";
import Footer from "../components/footer";

export function TeamFinder() {
  return (
    <div>
      <Section_Navbar/>
      <Dashboard />
      {/* <Footer/> */}
    </div>
  );
}