import styles from "../../css/myteamadmin/MyTeamAdminContent.module.scss";
import goldenTicket from "../../images/createteam/goldenTicket.svg";
import blueTicket from "front-end/images/myteam/blueTicket.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
import { isDissolveGroupAtom } from "recoil/atoms/isDissolveGroupAtom";
import { editTeamAtom } from "recoil/atoms/editTeamAtom";
import { isMemberRemoveAtom } from "recoil/atoms/isMemberRemoveAtom";
import { isPendingRequestsAtom } from "../../../recoil/atoms/isPendingRequestsAtom";
import { getGroup } from "../../../back-end/DBQueries/getGroup";
import { getUser } from "../../../back-end/DBQueries/getUser";
import { GroupCard } from "front-end/components/myteamadmin/GroupCard";
import { MemberCard } from "./MemberCard";
import { EditTeamModal } from "front-end/components/myteamadmin/EditTeamModal";
import { DissolveGroupModal } from "front-end/components/myteamadmin/DissolveGroupModal";
import { RemoveMemberModal } from "front-end/components/myteamadmin/RemoveMemberModal";

import { useEffect, useState } from "react";

export function MyTeamAdminContent() {
  const [user, setUser] = useRecoilState(userStateAtom);
  const [group, setGroup] = useRecoilState(groupStateAtom);
  const [isDissolveGroup, setIsDissolveGroup] =
    useRecoilState(isDissolveGroupAtom);
  const isRemoveMemberModal = useRecoilValue(isMemberRemoveAtom);
  const isEditTeam = useRecoilValue(editTeamAtom);
  const setIsPendingRequests = useSetRecoilState(isPendingRequestsAtom);
  const [isAdmin, setIsAdmin] = useState(false);

  //TODO: Remove this function on merge, user and group should already be loaded on sign in
  async function setGroupState() {
    // user hardcoded for testing
    const groupData = await getGroup("CPxu7JS3FPenPOBDD5Yi");
    setGroup(groupData);
    const userData = await getUser("1OepypJdNtVXlm8FKRvmZhlQihl2");
    setUser(userData);
  }

  // TOOD: remove this function on merge, user and group should already be loaded on sign in
  useEffect(() => {
    setGroupState();
  }, []);

  useEffect(() => {
    if (typeof group === "string") return;
    console.log(group);
    // Check if the user is an admin
    if (user.email == group.contact_email) {
      setIsAdmin(true);
    }
  }, [group]);

  function RenderCards() {
    if (typeof group === "string") {
      return null;
    }
    return Object.entries(group.members).map(([uid, rest]) => {
      return MemberCard([...rest, uid]);
    });
  }

  return (
    <>
      <div className={styles.banner}></div>
      <div className={styles.wrapper}>
        <h2>
          Hi {user.name}!{" "}
          {isAdmin ? (
            <img
              src={goldenTicket}
              className={styles.goldenTicket}
              alt="golden ticket"
            />
          ) : (
            <img
              src={blueTicket}
              className={styles.goldenTicket}
              alt="golden ticket"
            />
          )}
          <img
            src={goldenTicket}
            className={styles.goldenTicket}
            alt="golden ticket"
          />
        </h2>
        {/* <SignInHardCode /> */}
        <div className={styles.content}>
          <div>
            <GroupCard />
            <button
              className={styles.pendingButton}
              onClick={() => setIsPendingRequests(true)}
            >
              Your Pending Requests
              <span>
                {typeof group === "string"
                  ? 0
                  : Object.keys(group.pending_members).length}
              </span>
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => setIsDissolveGroup(true)}
            >
              Delete
            </button>
          </div>
          <div className={styles.members}>
            <h3>Team Members</h3>
            <div className={styles.memberCards}>
              <RenderCards />
            </div>
          </div>
        </div>
      </div>
      {isEditTeam ? <EditTeamModal /> : null}
      {isDissolveGroup ? <DissolveGroupModal /> : null}
      {isRemoveMemberModal ? <RemoveMemberModal /> : null}
    </>
  );
}
