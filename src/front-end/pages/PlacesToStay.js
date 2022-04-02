import React, {useRef} from 'react';
import { PlacesTop } from "../components/placestostay/PlacesTop";
import { PlacesBot } from '../components/placestostay/PlacesBot';
import Section_Navbar from "../components/section_navbar";
import Footer from "../components/footer";
import styles from "../css/placestostay/places.module.scss";

export function PlacesToStay() {
  const myRef = useRef(null);
  return (
    <div className={styles.container}>
      <Section_Navbar/>
      <PlacesTop />
      <PlacesBot myReference={myRef} />
      <Footer/>
    </div>
  );
}
