import React from "react";
import styles from "../../css/dashboard/createteamwarningmodal.module.scss";
import AngryCow from "../../images/dashboard/angryCow.svg";
import BlackX from "../../images/dashboard/blackx.svg";
import { useNavigate } from "react-router-dom";

export default function CreateTearmWarningModal(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/teamfinder/createteam");
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.topHalf}>
          <div className={styles.exitButtonContainer}>
            <button
              className={styles.exitButton}
              onClick={() => props.setShowModal(false)}
            >
              <img src={BlackX} alt="exit button"></img>
            </button>
          </div>
          <img src={AngryCow} alt="angry cow image" />
        </div>
        <div className={styles.bottomHalf}>
          <h2 className={styles.warningText}>Are you sure?</h2>
          <h3 className={styles.submitText}>
            {" "}
            Creating a team will remove all your requests to current groups.{" "}
          </h3>
          <div className={styles.buttonContainer}>
            <button
              className={styles.keepButton}
              onClick={() => props.setShowModal(false)}
            >
              NO
            </button>
            <button
              className={styles.removeButton}
              onClick={() => handleClick()}
            >
              YES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
