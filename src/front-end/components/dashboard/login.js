import React from "react";
import styles from "../../css/dashboard/loginpage.module.scss";
// import JoinTeam from "../../images/dashboard/JoinTeam.svg";
import { SignInHardCode } from "./SignInHardcode";
import CloudLeft from "../../images/dashboard/CloudLeft.svg";
import CloudRight from "../../images/dashboard/CloudRight.svg";
import cow from "../../images/dashboard/cow.svg";
import chicky from "../../images/dashboard/chicky.svg";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState} from 'recoil';
import Dashboard from "./Dashboard";
export default function Login() {
  const [user, setUser] = useRecoilState(userStateAtom);
  console.log(typeof user);
  return (
    <div>
      {user === "" ?(
      <div className={styles.container}>
        <img src={CloudLeft} className={styles.cloudLeft} alt="cloud" />
        <img src={CloudRight} className={styles.cloudRight} alt="cloud" />
        <img src={cow} className={styles.cow} alt="cow" />
        <img src={chicky} className={styles.chicky} alt="chicky" />
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
      </div>) : <Dashboard/>}
    </div>
  );
}