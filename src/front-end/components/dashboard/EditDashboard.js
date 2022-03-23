import React, { useState } from "react";
import styles from "../../css/dashboard/editdashboard.module.scss";
import x from "../../images/dashboard/x.svg";
import discord from "../../images/dashboard/discord.svg";
import { updateUserDiscordID } from "../../../back-end/DBQueries/updateUserDiscordID";
import { updateUserDesc } from "../../../back-end/DBQueries/updateUserDesc";
import { SetUserDescription } from "../../../recoil/selectors/setUserDesc";
import { SetUserDiscordID } from "../../../recoil/selectors/setUserDiscordID";
import { useSetRecoilState} from 'recoil';

export default function EditDashboard(props) {
  const [form, setForm] = useState({
    description: props.user.description,
    discord: props.user.discord_id
  });
  const [text, setText] = useState("");
  
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

  async function submitClick() {
    await updateUserDiscordID(props.user.user_id, form.discord);
    setUserDiscordID(form.discord);

    await updateUserDesc(props.user.user_id, form.description);
    setUserDescription(form.description);

    props.setShowEdit(!props.showEdit);
  }

  return (
    <div>
      <div className={styles.container}>
        <img
          src={x}
          className={styles.x}
          alt="close"
          onClick={() => props.setShowEdit(!props.showEdit)}
        />
        <div className={styles.pfpContainer}>
          <img src={props.user.profile_picture} className={styles.pfp} alt="profile picture"/>
        </div>
        {/* <div className={styles.text}>Edit Profile Picture</div> */}
        <form>
          <div className={styles.textCont}>
            <img src={discord} className={styles.icon} alt="discord icon"/>
            <input
              className={styles.textField}
              type="text"
              placeholder="Discord Handle"
              name="discord"
              onChange={handleDiscordChange}
              maxLength={37}
            />
          </div>
          <textarea
            className={styles.textArea}
            placeholder="Write a 250 character bio here. Share what your skills and hackathon interests..."
            name="description"
            onChange={handleDescChange}
            maxLength={250}
          />
          <div>{text.length}/250 Characters</div>
        </form>
      </div>
      <div className={styles.submit} onClick={submitClick}>SUBMIT</div>
    </div>
  );
}