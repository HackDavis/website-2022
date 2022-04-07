import { React } from 'react';
import styles from "front-end/css/loginErrorPage.module.scss";
import { Link } from "react-router-dom";
import LoginErrorCode from "front-end/images/errorPages/401.svg";
import Section_Navbar from 'front-end/components/section_navbar';

export function LoginError() {

  return (
    <>
      <Section_Navbar />
      <div className={styles.container}>
        <div>
          <div>
            <h2>Uh Oh! We couldn't find your account...</h2>
            <h3>Log in with your HackDavis application email <Link to="/teamfinder/login">here</Link>.</h3>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={LoginErrorCode} className={styles.loginErrorImage}></img>
        </div>
      </div>
    </>
  );
}
