import React, { useState } from "react";
import styles from "../../css/dashboard/editdashboard.module.scss";
import x from "../../images/dashboard/x.svg";
import discord from "../../images/dashboard/discord.svg";
import backarrow from "../../images/dashboard/whiteBackArrow.svg";
import { updateUserDiscordID } from "../../../back-end/DBQueries/updateUserDiscordID";
import { updateUserDesc } from "../../../back-end/DBQueries/updateUserDesc";
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
import { SetUserDescription } from "../../../recoil/selectors/setUserDesc";
import { SetUserDiscordID } from "../../../recoil/selectors/setUserDiscordID";
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { updateUserTeamDesc } from "back-end/DBQueries/updateUserTeamDesc";
import { groupStateAtom } from "recoil/atoms/groupAtom";

export default function EditDashboard(props) {
  const [group, setGroup] = useRecoilState(groupStateAtom);
  const [form, setForm] = useState({
    description: props.user.description,
    discord: props.user.discord_id
  });
  const [text, setText] = useState("");
  // const user = useRecoilValue(userStateAtom);
  
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
    await updateUserDiscordID(props.user.user_id, form.discord);
    setUserDiscordID(form.discord);

    await updateUserDesc(props.user.user_id, form.description);
    setUserDescription(form.description);

    if (props.user.group_id !== "") {
      const updatedGroup = await updateUserTeamDesc(props.user.user_id, props.user.group_id);
      setGroup(updatedGroup);
    }

    props.setShowEdit(false);
  }
  const handleExit = (setShowEdit, setShowDashboard) => {
    setShowEdit(false);
    setShowDashboard(false);
  };
  return (
    <div>
      <div className={styles.container}>
        <img
          src={x}
          className={styles.x}
          alt="close"
          onClick={() => handleExit(props.setShowEdit, props.setShowDashboard)}
        />
        <div
          className={styles.cancelButton}
          onClick={() => props.setShowEdit(false)}
        >
          <img src={backarrow} className={styles.backArrow} alt="back arrow" />
          <div className={styles.cancel}>Cancel</div>
        </div>
        <div className={styles.text}>Edit Profile</div>
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
              // value={props.user.discord_id}
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
              // value={props.user.description}
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
  );
}