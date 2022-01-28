import React from 'react';
import { MainSection } from './front-end/pages/MainSection';
import { FAQOnwards } from './front-end/pages/FAQOnwards'
import Section_Navbar from './front-end/components/section_navbar.js';
import "./App.css";

export default function App() {
  return (
    <div className="app_container">
      <Section_Navbar/>
      <MainSection />
      <FAQOnwards />
    </div>
  );
}
