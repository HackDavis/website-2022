import React from 'react'
import styles from '../css/landingPage/FAQOnwards.module.scss'
import Section_FAQ from "../components/section_faq.js";
import Section_Contact from '../components/section_contact.js';
import Section_Sponsors from '../components/section_sponsors.js';
import Section_Adventure from '../components/section_adventure.js';

export function FAQOnwards() {
  return (
    <div className={styles.container}>
      <Section_FAQ/>
      <Section_Contact/>
      <Section_Sponsors/>
      <Section_Adventure/>
    </div>
  )
}
