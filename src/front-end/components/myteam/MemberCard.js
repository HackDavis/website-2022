// import styles from "front-end/css/myteam/MemberCard.module.scss";
// import goldenTicket from "front-end/images/createteam/goldenTicket.svg";
// import blueTicket from "front-end/images/myteam/blueTicket.svg";
// import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
// import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
// import { isAdminAtom } from "../../../recoil/atoms/isAdminAtom";
// import { removeActiveMemberUIDAtom } from "recoil/atoms/removeActiveMemberUIDAtom";
// import { isMemberRemoveAtom } from "recoil/atoms/isMemberRemoveAtom";
// import emailImg from "front-end/images/myteam/email.svg";
// import discImg from "front-end/images/myteam/discord.svg";
// import { useEffect } from "react";

// export function MemberCard([name, email, discord, desc, pfp, uid]) {
//   const [group, setGroup] = useRecoilState(groupStateAtom);
//   const setIsMemberRemove = useSetRecoilState(isMemberRemoveAtom);
//   const setRemoveActiveMemberUID = useSetRecoilState(removeActiveMemberUIDAtom);
//   const isAdmin = useRecoilValue(isAdminAtom);

//   function RemoveOnClick() {
//     setRemoveActiveMemberUID(uid);
//     setIsMemberRemove(true);
//   }

//   useEffect(() => {
//     // console.log({ name, email, desc, pfp, uid });
//   }, []);

//   return (
//     <div className={styles.container} key={name}>
//       <div className={styles.top}>
//         <div>
//           <img src={pfp} />
//           <p>{name}</p>
//         </div>
//         {group.contact_email == email ? (
//           <img src={goldenTicket} />
//         ) : (
//           <img src={blueTicket} />
//         )}
//       </div>
//       <div className={styles.bot}>
//         <div>
//           <img src={emailImg} />
//           <p>{email}</p>
//         </div>
//         <div>
//           <img src={discImg} />
//           <p>{discord}</p>
//         </div>
//         <p>{desc}</p>
//       </div>
//       {group.contact_email != email && isAdmin 
//         ? (<button onClick={RemoveOnClick}>Remove Member</button>)
//         : null
//       }
//     </div>
//   );
// }
