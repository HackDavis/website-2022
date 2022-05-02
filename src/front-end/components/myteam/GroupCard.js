// import React from 'react';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { groupStateAtom } from '../../../recoil/atoms/groupAtom';
// import {editTeamAtom} from 'recoil/atoms/editTeamAtom';
// import styles from "front-end/css/myteam/GroupCard.module.scss";
// import { isAdminAtom } from "../../../recoil/atoms/isAdminAtom";

// export function GroupCard() {

//   const group = useRecoilValue(groupStateAtom);
//   const setIsEditTeam = useSetRecoilState(editTeamAtom);
//   const isAdmin = useRecoilValue(isAdminAtom);

//   return (
    
//     <div className={styles.groupCardContainer}>
//       <div className={styles.cardContent}>
//         <div className={styles.titleContent}>
//           <h2 className={styles.title}>{group.group_name}</h2>
//           {isAdmin ? <button className={styles.editButton} onClick={() => setIsEditTeam(true)}> Edit</button> : null}
//         </div>
//         <span className={styles.id}>ID # {group.group_id}</span>
//         <p className={styles.groupDesc}>{group.description}<br /></p>
//         <h3 className={styles.skillsTitle}>We are looking for: </h3>

//         <div className={styles.tagContainer}>
//           {group.tags1 ? group.tags1.map((tag) => {
//             return (
//                 <span key={tag} className={styles.tags1}>{tag}</span>
//             );
//           }): null}
//           {group.tags2 ? group.tags2.map((tag) => {
//             return (
//                 <span key={tag} className={styles.tags2}>{tag}</span>
//             );
//           }) : null}
//         </div>
//       </div>
//     </div>
//   );
// }
