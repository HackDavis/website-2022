// import react from "react";
// import styles from "../../css/dashboard/AlreadyApplied.module.scss";
// import OopsyChicky from "../../images/dashboard/OopsyChicky.svg";
// import { useNavigate } from "react-router-dom";

// export default function SubmitModal(props) {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     props.setShowModal(false);
//   };
  
//   return (
//     <div className={styles.modal}>
//       <div className={styles.modalContent}>
//         <div className={styles.topHalf}>
//           <div className={styles.exitButtonContainer}>
//             <button
//               className={styles.exitButton}
//               onClick={() => setIsMemberRemoveModal(false)}
//             >
//             </button>
//           </div>
//           <img src={OopsyChicky} className={styles.chick} alt="Happy frog image" />
//         </div>
//         <div className={styles.bottomHalf}>
//           <h2 className={styles.rockOn}>
//             Oops! 
//           </h2>
//           <h3 className={styles.submitText}> Looks like you already applied to this team. </h3>
//           <div className={styles.buttonContainer}>
//             <button
//               className={styles.keepButton}
//               onClick={() => handleClick()}
//             >
//               BACK TO SEARCH
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }