import React from 'react';
import styles from '../css/landingPage/FAQOnwards.module.scss';
import Section_FAQ from "../components/section_faq.js";
import Section_Sponsors from '../components/section_sponsors.js';
import Section_Adventure from '../components/section_adventure.js';
import { Prizes } from '../components/Prizes.js';

export function FAQOnwards() {
  return (
    <div className={styles.container}>
      <Section_FAQ/>
      <Prizes/>
      <Section_Sponsors/>
      <Section_Adventure/>
    </div>
  );
}

