import react from "react";
import styles from "../../css/dashboard/submitmodal.module.scss";
import fred from "../../images/dashboard/fred.svg";
import check from "../../images/dashboard/check.svg";

export default function SubmitModal(props) {
  const handleClick = () => {
    props.setShowRequest(false);
    props.setShowModal(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.topHalf}>
          <div className={styles.exitButtonContainer}>
            <button
              className={styles.exitButton}
              onClick={() => setIsMemberRemoveModal(false)}
            >
            </button>
          </div>
          <img src={check} className={styles.check} alt="Checkmark" />
          <img src={fred} className={styles.frog} alt="Happy frog image" />
        </div>
        <div className={styles.bottomHalf}>
          <h2 className={styles.rockOn}>
            Rock On! 
          </h2>
          <h3 className={styles.submitText}> Your request has been submitted. </h3>
          <div className={styles.buttonContainer}>
            <button
              className={styles.keepButton}
              onClick={() => handleClick()}
            >
              OK, COOL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}