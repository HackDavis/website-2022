import React from "react";
import styles from "../../css/dashboard/deletemodal.module.scss";
import AngryCow from "../../images/dashboard/angryCow.svg";
import BlackX from "../../images/dashboard/blackx.svg";

export default function DeleteModal(props) {
  const handleDelete = () => {
    props.deleteRequestClick();
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
          <h2 className={styles.warningText}>
            Are you sure you want <br /> to <span>delete</span> this request?
          </h2>
          <div className={styles.buttonContainer}>
            <button
              className={styles.keepButton}
              onClick={() => props.setShowModal(false)}
            >
              NO
            </button>
            <button
              className={styles.removeButton}
              onClick={() => handleDelete()}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
