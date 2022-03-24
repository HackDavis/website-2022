import React, {useEffect} from "react";
import { MainSection } from "./front-end/pages/MainSection";
import { FAQOnwards } from "./front-end/pages/FAQOnwards";
import Section_Navbar from "./front-end/components/section_navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs } from "./front-end/pages/AboutUs";
import { CreateTeam } from "./front-end/pages/CreateTeam";
import { MyTeamAdmin } from "./front-end/pages/MyTeamAdmin";

import "./App.css";

function LandingPage() {
  return (
    <div className="app_container">
      <Section_Navbar />
      <MainSection />
      <FAQOnwards />
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
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/createteam" element={<CreateTeam/>} />
        <Route path="/myteam" element={<MyTeamAdmin/>} />
        
      </Routes>
    </Router>
  );
}