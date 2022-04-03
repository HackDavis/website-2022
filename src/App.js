import React, {useEffect} from "react";
import { MainSection } from "./front-end/pages/MainSection";
import { FAQOnwards } from "./front-end/pages/FAQOnwards";
import Section_Navbar from "./front-end/components/section_navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs } from "./front-end/pages/AboutUs";
import LoginPage from "./front-end/pages/team_finder/LoginPage";
import SetupPage from "./front-end/pages/team_finder/SetupPage";
import { TeamFinder } from "./front-end/pages/team_finder/TeamFinder";
import FindTeamPage from "./front-end/pages/team_finder/FindTeamPage";
import PendingTeamsPage from "./front-end/pages/team_finder/PendingTeamsPage";
import SubmitRequestPage from "./front-end/pages/team_finder/SubmitRequestPage";
import "./App.css";

function LandingPage() {
  return (
    <div className="app_container">
      <Section_Navbar />
      <MainSection />
      <FAQOnwards />
      <LoginPage />
    </div>
  );
}

export default function App() {
  // Used to remove cookies 
  useEffect(() => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/setup" element={<SetupPage/>}/>
        <Route path="/teamfinder" element={<TeamFinder/>}/>
        <Route path="/findteam" element={<FindTeamPage/>}/>
        <Route path="/submitrequest" element={<SubmitRequestPage/>}/>
        <Route path="/pendingteams" element={<PendingTeamsPage/>}/>
      </Routes>
    </Router>
  );
}