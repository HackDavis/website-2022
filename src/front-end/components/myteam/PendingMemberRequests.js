import { useState, useEffect } from "react";
import styles from "front-end/css/myteam/PendingMemberRequests.module.scss";
import Dashboard from "../dashboard/Dashboard";
import DashboardButton from "../dashboard/DashboardButton";
import backArrow from "front-end/images/createteam/backArrow.svg";
import { PendingMemberCard } from "./PendingMemberCard.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
import { isPendingRequestsAtom } from "../../../recoil/atoms/isPendingRequestsAtom";
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";

export function PendingMemberRequests() {
  const [user] = useRecoilState(userStateAtom);
  const [group, setGroup] = useRecoilState(groupStateAtom);
  const setIsPendingRequests = useSetRecoilState(isPendingRequestsAtom);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  function RenderCards() {
    if (typeof group === "string") {
      return null;
    }
    return Object.entries(group.pending_members).map(([uid, rest]) => {
      // console.log(uid);
      return PendingMemberCard([...rest, uid]);
    });
  }

  useEffect(() => {
    const redirect = setTimeout(() => {
      if (user === "") {
        navigate("/401");
      }
    }, 2500);

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div className={styles.container}>
      <DashboardButton
        user={user}
        setShowDashboard={setShowDashboard}
        showDashboard={showDashboard}
      />
      <Dashboard
        user={user}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        showDashboard={showDashboard}
        setShowDashboard={setShowDashboard}
      />
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
