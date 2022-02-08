import React from 'react';
import { AboutTop } from "../components/aboutus/AboutTop";
import { AboutBot } from '../components/aboutus/AboutBot';
import Section_Navbar from "../components/section_navbar";
import Footer from "../components/footer";
import styles from "../css/aboutuspage/about.module.scss";

export function AboutUs() {
  return (
    <div>
      <Section_Navbar/>
      <AboutTop/>
      <AboutBot/>
      <Footer/>
    </div>
  ) 
}
