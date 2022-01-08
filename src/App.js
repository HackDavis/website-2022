import React from 'react';
// import { DBTest } from './front-end/pages/DBTest';
import Section_FAQ from "./front-end/components/section_faq.js";
import Section_Contact from './front-end/components/section_contact.js';
import Section_Sponsors from './front-end/components/section_sponsors.js';
import Section_Adventure from './front-end/components/section_adventure.js';
import Section_Mobile_Navbar from './front-end/components/section_mobile_navbar.js';

export default function App() {
  return (
    <div>
      <Section_Mobile_Navbar/>
      <Section_FAQ/>
      <Section_Contact/>
      <Section_Sponsors/>
      <Section_Adventure/>
    </div>
  );
}
