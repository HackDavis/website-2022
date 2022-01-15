import React from 'react';
import { MainSection} from './front-end/pages/MainSection';
import Section_FAQ from "./front-end/components/section_faq.js";
import Section_Contact from './front-end/components/section_contact.js';
import Section_Sponsors from './front-end/components/section_sponsors.js';
import Section_Adventure from './front-end/components/section_adventure.js';
import Section_Navbar from './front-end/components/section_navbar.js';

export default function App() {
  return (
    <>
      <Section_Navbar/>
      <MainSection />
      <Section_FAQ/>
      <Section_Contact/>
      <Section_Sponsors/>
      <Section_Adventure/>
    </>
  );
}
