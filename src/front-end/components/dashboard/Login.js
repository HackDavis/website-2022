import React, { useEffect } from "react";
import styles from "../../css/dashboard/loginpage.module.scss";
import { SignInHardCode } from "./SignInHardcode";
import Froggy from "../../images/dashboard/Froggy.svg";
import CloudRight from "../../images/dashboard/CloudRight.svg";
import cow from "../../images/dashboard/cow.svg";
import chicky from "../../images/dashboard/chicky.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState } from 'recoil';

export default function Login() {
  const [user, setUser] = useRecoilState(userStateAtom);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user !== "" && location.pathname !== "/") {
      navigate("/teamfinder");
    }
  }, []);

  return (
    <div>
      {user === "" ? (
        <div className={styles.container}>
          <img src={Froggy} className={styles.froggy} alt="cloud" />
          <img src={CloudRight} className={styles.cloudRight} alt="cloud" />
          <img src={cow} className={styles.cow} alt="cow" />
          <div className={styles.left}></div>
          <div className={styles.right}>
            <div className={styles.text}>
              <div className={styles.adventure}>Start Your Adventure</div>
              <div className={styles.register}>
                Please sign up with your registered email.
              </div>
            </div>
            <SignInHardCode className={styles.login} />
          </div>
        </div>) : user.discord_id === "" && user.description === "" ? navigate("/teamfinder/setup") : navigate("/teamfinder")}
    </div>
  );
}