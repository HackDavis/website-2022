import React from 'react';
import { MainSection } from './front-end/pages/MainSection';
import { FAQOnwards } from './front-end/pages/FAQOnwards'
import Section_Navbar from './front-end/components/section_navbar.js';

export default function App() {
  return (
    <>
      <Section_Navbar/>
      <MainSection />
      <FAQOnwards />
    </>
  );
}
