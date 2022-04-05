import styles from "front-end/css/myteam/PendingMemberRequests.module.scss";

import backArrow from "front-end/images/createteam/backArrow.svg";
import { PendingMemberCard } from "./PendingMemberCard.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
import { isPendingRequestsAtom } from "../../../recoil/atoms/isPendingRequestsAtom";

export function PendingMemberRequests() {
  const [group, setGroup] = useRecoilState(groupStateAtom);
  const setIsPendingRequests = useSetRecoilState(isPendingRequestsAtom);

  function RenderCards() {
    if (typeof group === "string") {
      return null;
    }
    return Object.entries(group.pending_members).map(([uid, rest]) => {
      console.log(uid);
      return PendingMemberCard([...rest, uid]);
    });
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.back}
        onClick={() => setIsPendingRequests(false)}
      >
        <img src={backArrow} alt="back arrow" />
        <p>Back to My Team</p>
      </button>
      <div className={styles.header}>
        <h2>Pending Member Requests</h2>
        <span>
          {typeof group === "string"
            ? 0
            : Object.keys(group.pending_members).length}
        </span>
      </div>
      <div className={styles.cards}>
        <RenderCards />
      </div>
    </div>
  );
}
