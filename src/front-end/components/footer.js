import React from "react";
import styles from "../css/footer.module.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import LogoIcon from "../images/HackDavisLogo.svg";

const Footer = () => {

  return (
    <footer className={styles.footerstyle}>
      <div id={styles['footer-content']}>
        <div className={styles.logo}>
          <img src={LogoIcon}></img>
        </div>
        <br></br>
        <a className={styles.smallbutton1} href="mailto:team@hackdavis.io">
          <i className={`fa fa-envelope ${styles.icon}`} aria-hidden="true"></i>
        </a>
        <a
          className={styles.smallbutton1}
          href="https://medium.com/@HackDavis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-medium ${styles.icon}`} aria-hidden="true"></i>
        </a>
        <a
          className={styles.smallbutton1}
          href="https://www.facebook.com/HackDavis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-facebook-f ${styles.icon}`}
            aria-hidden="true"
          ></i>
        </a>
        <a
          className={styles.smallbutton1}
          href="https://twitter.com/hack_davis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-twitter ${styles.icon}`} aria-hidden="true"></i>
        </a>
        <a
          className={styles.smallbutton1}
          href="https://www.instagram.com/hackdavis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-instagram ${styles.icon}`}
            aria-hidden="true"
          ></i>
        </a>
        <a
          className={styles.smallbutton1}
          href="https://discord.gg/wc6QQEc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-discord ${styles.icon}`} aria-hidden="true"></i>
        </a>
      </div>
      <div id={styles.copyright}>
        <span>&copy; 2022 HackDavis • Made with ☕️ & 💛 in Davis</span>
      </div>
    </footer>
  );
};

export default Footer;
