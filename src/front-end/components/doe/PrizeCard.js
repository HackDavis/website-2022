import React, {useState} from "react";
import styles from "../../css/doe/prizecard.module.scss";
import PrizeGreen from "front-end/images/doe/PrizeGreen.svg";
import PrizeYellow from "front-end/images/doe/PrizeYellow.svg";
import ArrowDownWhite from "front-end/images/doe/ArrowDownWhite.svg";

export function PrizeCard({ prizeInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const isYellow = prizeInfo.color == "yellow";

	function handleClick() {
		setIsOpen(!isOpen);
    // console.log("isOpen is now ", isOpen);
	}

  return (
		<>
      <div className={styles.container}>
          <div className={styles.top} onClick={() => handleClick()}>
            <div className={styles.prizeImgCont}>
              {isYellow 
                ? <img className={styles.prize} src={PrizeYellow}/>
                : <img className={styles.prize} src={PrizeGreen}/>
              }
            </div>
            <div>
              <h3 className={styles.title}>{prizeInfo.title}</h3>
            </div>
            <div className={styles.downArrowCont}>
              <img className={`${styles.downArrow} ${isOpen ? `${styles.flipDownArrow}` : ""}`} src={ArrowDownWhite}/>
            </div>
          </div>
          <div className={`${styles.bot} ${isOpen ? `${styles.showBot}` : ""}`}>
            <div>
              <p>{prizeInfo.prize}</p>
              {prizeInfo.description.length > 0
                ? <p>{prizeInfo.description}</p>
                : null
              }
            </div>
          </div>
      </div>
    </>
	);
}