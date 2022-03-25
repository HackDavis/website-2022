import {React} from 'react';
import styles from "front-end/css/errorPage.module.scss";
import {Link} from "react-router-dom";

export function LoginError() {
  
  return (
    <div className={styles.container}>
      <h2>Uh Oh! We couldn't find your account...</h2>
      {/* TODO: Update url to teamfinder page*/}
      <h3>Log in with your HackDavis application email <Link to="/">here</Link>.</h3>
      <img></img>
    </div>
  );
}
