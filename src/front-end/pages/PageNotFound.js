import {React} from 'react';
import styles from "front-end/css/errorPage.module.scss";
import {Link} from "react-router-dom";
import errorCode from "front-end/images/errorPages/404.svg";

export function PageNotFound() {

  return (
    <div className={styles.container}>
      <h2>Uh Oh! This page does not exist...</h2>
      <h3>Please head back to the <Link to="/">homepage</Link>.</h3>
      <img src={errorCode} className={styles.errorCode}></img>
    </div>
  );
}
