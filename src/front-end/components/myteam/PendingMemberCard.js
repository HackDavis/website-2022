// import styles from "front-end/css/myteam/PendingMemberCard.module.scss";
// import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
// import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
// import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
// import { isAdminAtom } from "../../../recoil/atoms/isAdminAtom";
// import { DeletePendingGroup } from "../../../recoil/selectors/deletePendingGroup";
// import { DeletePendingMember } from "../../../recoil/selectors/deletePendingMember";
// import { SetGroupMembers } from "../../../recoil/selectors/setGroupMembers.js";
// import { SetUserGroupID } from "../../../recoil/selectors/setUserGroupID.js";
// import { denyGroupRequest } from "../../../back-end/DBQueries/denyGroupRequest.js";
// import { addGroupMember } from "../../../back-end/DBQueries/addGroupMember.js";
// import { setGroupID } from "../../../back-end/DBQueries/setGroupID.js";

// import { useEffect } from "react";

// export function PendingMemberCard([name, email, _, reason, uid]) {
//   const [user, setUser] = useRecoilState(userStateAtom);
//   const [group, setGroup] = useRecoilState(groupStateAtom);
//   const setDeletePendingGroup = useSetRecoilState(DeletePendingGroup);
//   const setDeletePendingMember = useSetRecoilState(DeletePendingMember);
//   const updateGroupMembers = useSetRecoilState(SetGroupMembers);
//   const setUserGroupID = useSetRecoilState(SetUserGroupID);
//   const isAdmin = useRecoilValue(isAdminAtom);

//   useEffect(() => {
//     // console.log({ name, email, _, reason, uid });
//   }, []);

//   async function denyGroupRequestClick() {
//     const { newPendingMemberMap, newPendingGroupMap } = await denyGroupRequest(
//       uid,
//       group.group_id
//     );
//     // front-end Recoil atom update
//     setDeletePendingMember(newPendingMemberMap);
//     setDeletePendingGroup(newPendingGroupMap);
//   }

//   async function addGroupMemberClick() {
//     // Hardcoded user_id and group_id for testing purposes
//     const newGroupMembers = await addGroupMember(uid, group.group_id);
//     if (newGroupMembers != "error") {
//       // Update member field of group state atom
//       updateGroupMembers(newGroupMembers);
//       const { newPendingMemberMap, newPendingGroupMap } =
//         await denyGroupRequest(uid, group.group_id);
//       // front-end Recoil atom update
//       setDeletePendingMember(newPendingMemberMap);
//       setDeletePendingGroup(newPendingGroupMap);
//       const newGroupID = await setGroupID(uid, group.group_id);
//       setUserGroupID(newGroupID);
//     } else {
//       alert(
//         "The user you tried to add no longer exists, or your group already has four members!"
//       );
//     }
//   }

//   return (
//     <div className={styles.container} key={name}>
//       <div className={styles.top}>
//         <div>
//           <p>{name}</p>
//         </div>
//       </div>
//       <div className={styles.bot}>
//         <p>{reason}</p>
//         <div></div>
//       </div>
//       {isAdmin 
//         ? <div className={styles.buttons}>
//             <button onClick={denyGroupRequestClick}>DENY</button>
//             <button onClick={addGroupMemberClick}>APPROVE</button>
//           </div>
//         : null
//       }
      
//     </div>
//   );
// }
