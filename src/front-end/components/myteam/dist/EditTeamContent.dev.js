// import React, { useState, useEffect, Fragment } from "react";
// import styles from "../../css/myteam/EditTeamContent.module.scss";
// import Roles from "../../../back-end/db/Roles.js";
// import Tags from "../../../back-end/db/Tags.js";
// import { useRecoilState, useSetRecoilState } from "recoil";
// import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
// import { editTeamAtom } from "recoil/atoms/editTeamAtom";
// import { updateGroupDesc } from "back-end/DBQueries/updateGroupDesc";
// import { updateGroupName } from "back-end/DBQueries/updateGroupName";
// import { setRoles } from "../../../back-end/DBQueries/setRoles.js";
// import { setTags } from "../../../back-end/DBQueries/setTags.js";
// import { SetRolesState } from "../../../recoil/selectors/setRolesState";
// import { SetTagsState } from "../../../recoil/selectors/setTagsState.js";
// import { SetGroupDescription } from "recoil/selectors/setGroupDesc.js";
// import { SetGroupName } from "recoil/selectors/setGroupName.js";
// import { Checkbox } from '../createteam/Checkbox';
// export function EditTeamContent() {
//   const [roles, setUserRoles] = useState(new Set());
//   const [tags, setUserTags] = useState(new Set());
//   const [group, setGroup] = useRecoilState(groupStateAtom);
//   const [name, setName] = useState("");
//   const [desc, setDesc] = useState("");
//   useEffect(() => {
//     if (typeof group !== "string") {
//       const newRoles = new Set(group.tags1);
//       const newTags = new Set(group.tags2);
//       //console.log(group);
//       setName(group.group_name);
//       setDesc(group.description);
//       setUserRoles(newRoles);
//       setUserTags(newTags);
//     }
//   }, [group]);
//   const setRolesSelector = useSetRecoilState(SetRolesState);
//   const setTagsSelector = useSetRecoilState(SetTagsState);
//   const setGroupDescriptionSelector = useSetRecoilState(SetGroupDescription);
//   const setGroupNameSelector = useSetRecoilState(SetGroupName);
//   const setIsEditTeam = useSetRecoilState(editTeamAtom);
//   const maxChecks = 5;
//   const changeName = (event) => {
//     setName(event.target.value);
//   };
//   const changeDesc = (event) => {
//     setDesc(event.target.value);
//   };
//   async function editTeamClick(e) {
//     e.preventDefault();
//     await updateGroupName(group.group_id, name);
//     await updateGroupDesc(group.group_id, desc);
//     await setRoles(group.group_id, Array.from(roles));
//     await setTags(group.group_id, Array.from(tags));
//     // Update recoil states
//     setRolesSelector(Array.from(roles));
//     setTagsSelector(Array.from(tags));
//     setGroupNameSelector(name);
//     setGroupDescriptionSelector(desc);
//     // Close Edit Team Modal on success
//     setIsEditTeam(false);
//   }
//   function changeRole(e) {
//     if (roles.size == maxChecks && e.target.checked) {
//       e.target.checked = !e.target.checked;
//     } else {
//       const newRoles = new Set(roles);
//       if (e.target.checked) {
//         newRoles.add(e.target.name);
//       } else {
//         newRoles.delete(e.target.name);
//       }
//       setUserRoles(newRoles);
//     }
//   }
//   function changeTags(e) {
//     if (tags.size == maxChecks && e.target.checked) {
//       e.target.checked = !e.target.checked;
//     } else {
//       const newTags = new Set(tags);
//       if (e.target.checked) {
//         newTags.add(e.target.name);
//       } else {
//         newTags.delete(e.target.name);
//       }
//       setUserTags(newTags);
//     }
//   }
//   useEffect(() => {
//     //console.log({ roles: Array.from(roles), tags: Array.from(tags) });
//   }, [roles, tags]);
//   return (
//     <>
//       <form onSubmit={editTeamClick}>
//         <div className={styles.setup}>
//           <div className={styles.column1}>
//             <label>Team Name</label>
//             <textarea
//               type="text"
//               placeholder="Best team ever"
//               value={name}
//               maxLength="20"
//               onChange={changeName}
//               rows="1"
//               required
//             ></textarea>
//             <p>{typeof group !== "string" ? name.length : 0}/20 characters</p>
//             <label>Team Description</label>
//             <textarea
//               type="text"
//               placeholder="Project goals, professional interests, what you are looking for..."
//               value={desc}
//               maxLength="250"
//               onChange={changeDesc}
//               // rows="9"
//               required
//             ></textarea>
//             <p>{typeof group !== "string" ? desc.length : 0}/250 characters</p>
//           </div>
//           <div className={styles.column2}>
//             <label>What skills/tools are you looking for?</label>
//             <div className={styles.tags}>
//               <div className={styles.skillsContainer}>
//                 <h4>Skillset</h4>
//                 <div>
//                   {Roles.map((role) => {
//                     return (
//                       <div key={role}>
//                         <Checkbox name={role} onChange={changeRole} checked={roles.has(role)} />
//                         <br />
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className={styles.toolsContainer}>
//                 <h4>Tools</h4>
//                 <div>
//                   {Tags.map((tag) => {
//                     return (
//                       <div key={tag}>
//                         <Checkbox name={tag} onChange={changeTags} checked={tags.has(tag)} />
//                         <br />
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//             <p>5 skills and 5 tools maximum</p>
//           </div>
//         </div>
//         <div className={styles.submitWrap}>
//           <input
//             type="submit"
//             className={styles.saveButton}
//             value="SAVE"
//           />
//         </div>
//       </form>
//     </>
//   );
// }
"use strict";