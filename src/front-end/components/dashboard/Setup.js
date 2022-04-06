import React, { useState, useEffect } from "react";
import styles from "../../css/dashboard/setup.module.scss";
import TeamFinderHome from "./TeamFinderHome";
import WelcomeCow from "../../images/dashboard/WelcomeCow.svg";
import discord from "../../images/dashboard/discord.svg";
import { updateUserDiscordID } from "../../../back-end/DBQueries/updateUserDiscordID";
import { updateUserDesc } from "../../../back-end/DBQueries/updateUserDesc";
import { SetUserDescription } from "../../../recoil/selectors/setUserDesc";
import { SetUserDiscordID } from "../../../recoil/selectors/setUserDiscordID";
import { useSetRecoilState} from 'recoil';
import { useRecoilState } from "recoil";
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../../back-end/db/dbConfig.js";
import { useNavigate } from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
// import { getUser } from "../../../back-end/DBQueries/getUser";

export default function Setup() {
  const [form, setForm] = useState({
    description: "",
    discord: ""
  });

  const [text, setText] = useState("");
  const [user, setUser] = useRecoilState(userStateAtom);
  const navigate = useNavigate();
  const auth = getAuth();
  const handleDiscordChange = (event) => {
    setForm({
      ...form,
      discord: event.target.value
    });
  };

  const handleDescChange = (event) => {
    setForm({
      ...form,
      description: event.target.value
    });
    setText(event.target.value);
  };

  const setUserDescription = useSetRecoilState(SetUserDescription);
  const setUserDiscordID = useSetRecoilState(SetUserDiscordID);

  async function submitClick(e) {
    e.preventDefault();
    await updateUserDiscordID(user.user_id, form.discord);
    setUserDiscordID(form.discord);

    await updateUserDesc(user.user_id, form.description);
    setUserDescription(form.description);

    navigate("/teamfinder");
  }

  useEffect(() => {
    const redirect = setTimeout(() => {
      if (user === "") {
        navigate("/401");
      } else if (user.discord_id !== "") {
        navigate("/teamfinder");
      }
    }, 2500);
    return () => {
      clearTimeout(redirect);
    };
  }, []);

  if (user === "") return null;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.welcomeMsg}>
          <img src={WelcomeCow} className={styles.cow} />
          <h1>Welcome {user.name.split(" ")[0]}</h1>
          <h4>Finish setting up your profile.</h4>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.setupForm}>
          <div className={styles.pfpContainer}>
            <img className={styles.pfp} src={user.profile_picture} />
          </div>
          <div className={styles.name}>{user.name.split(" ")[0]}</div>
          <form onSubmit={submitClick}>
            <div className={styles.textCont}>
              <img src={discord} className={styles.icon} alt="discord icon" />
              <input
                className={styles.textField}
                type="text"
                placeholder="Discord Handle"
                name="discord"
                onChange={handleDiscordChange}
                maxLength={37}
                required
              />
            </div>
            <div className={styles.descContainer}>
              <textarea
                className={styles.textArea}
                placeholder="Write a 250 character bio here. Share what your skills and hackathon interests..."
                name="description"
                onChange={handleDescChange}
                maxLength={250}
                required
              />
              <div className={styles.characterCount}>
                {text.length}/250 Characters
              </div>
            </div>
            <input type="submit" value="SAVE" className={styles.submit} />
          </form>
        </div>
      </div>
    </div>
  );
}