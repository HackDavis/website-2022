import {React} from 'react';
import styles from "front-end/css/loginErrorPage.module.scss";
import {Link} from "react-router-dom";
import LoginErrorCode from "front-end/images/errorPages/401.svg";

export function LoginError() {
  
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h2>Uh Oh! We couldn't find your account...</h2>
          {/* TODO: Update url to teamfinder page*/}
          <h3>Log in with your HackDavis application email <Link to="/">here</Link>.</h3>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={LoginErrorCode} className={styles.loginErrorImage}></img>
      </div>
    </div>
  );
}
