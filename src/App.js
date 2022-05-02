import React, { useEffect } from "react";
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
import { CreateTeam } from "./front-end/pages/CreateTeam";
import { MyTeam } from "./front-end/pages/MyTeam";
import { LoginError } from "./front-end/pages/LoginError";
import { PageNotFound } from "./front-end/pages/PageNotFound";
import { PlacesToStay } from "./front-end/pages/PlacesToStay";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./App.css";

function LandingPage() {
  return (
    <div className="app_container">
      <Section_Navbar />
      <MainSection />
      <FAQOnwards />
      {/* <LoginPage /> */}
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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.localStorage.clear();
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/teamfinder/login" element={<LoginPage />} />
        <Route path="/teamfinder/setup" element={<SetupPage />} />
        <Route path="/teamfinder" element={<TeamFinder />} />
        <Route path="/teamfinder/createteam" element={<CreateTeam />} />
        <Route path="/teamfinder/myteam" element={<MyTeam />} />
        <Route path="/teamfinder/findteam" element={<FindTeamPage />} />
        <Route path="/teamfinder/submitrequest" element={<SubmitRequestPage />} />
        <Route path="/teamfinder/pendingteams" element={<PendingTeamsPage />} />
        <Route path="/401" element={<LoginError />} /> */}
        <Route path="/placestostay" element={<PlacesToStay />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}