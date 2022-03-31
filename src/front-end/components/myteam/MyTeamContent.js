import styles from "../../css/myteam/MyTeamContent.module.scss";
import goldenTicket from "front-end/images/createteam/goldenTicket.svg";
import blueTicket from "front-end/images/myteam/blueTicket.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
import { isDissolveGroupAtom } from "recoil/atoms/isDissolveGroupAtom";
import { editTeamAtom } from "recoil/atoms/editTeamAtom";
import { isMemberRemoveAtom } from "recoil/atoms/isMemberRemoveAtom";
import { isPendingRequestsAtom } from "../../../recoil/atoms/isPendingRequestsAtom";
import { removeActiveMemberUIDAtom } from "recoil/atoms/removeActiveMemberUIDAtom";
import { isAdminAtom } from "../../../recoil/atoms/isAdminAtom";
import { isLeaveGroupAtom } from "recoil/atoms/isLeaveGroupAtom";
import { getGroup } from "../../../back-end/DBQueries/getGroup";
import { getUser } from "../../../back-end/DBQueries/getUser";
import { GroupCard } from "front-end/components/myteam/GroupCard";
import { MemberCard } from "./MemberCard";
import { EditTeamModal } from "front-end/components/myteam/EditTeamModal";
import { DissolveGroupModal } from "front-end/components/myteam/DissolveGroupModal";
import { RemoveMemberModal } from "front-end/components/myteam/RemoveMemberModal";
import {LeaveGroupModal} from "front-end/components/myteam/LeaveGroupModal";

import { useEffect, useState } from "react";

export function MyTeamContent() {
  const [user, setUser] = useRecoilState(userStateAtom);
  const [group, setGroup] = useRecoilState(groupStateAtom);
  const [isDissolveGroup, setIsDissolveGroup] =
    useRecoilState(isDissolveGroupAtom);
  const isRemoveMemberModal = useRecoilValue(isMemberRemoveAtom);
  const isEditTeam = useRecoilValue(editTeamAtom);
  const setIsPendingRequests = useSetRecoilState(isPendingRequestsAtom);
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtom);
  const [isLeaveGroup, setIsLeaveGroup] = useRecoilState(isLeaveGroupAtom);
  const setRemoveActiveMemberUID = useSetRecoilState(removeActiveMemberUIDAtom);

  function RemoveOnClick() {
    setRemoveActiveMemberUID(user.user_id);
    setIsLeaveGroup(true);
  }
  //TODO: Remove this function on merge, user and group should already be loaded on sign in
  async function setGroupState() {
    // user hardcoded for testing
    const groupData = await getGroup("BaV8OBGkaSnjtSOSZ1Bl");
    setGroup(groupData);
    const userData = await getUser("SH0tYYf5RKPXb0n0rFY0bb5cmBX2");
    // const userData = await getUser("1OepypJdNtVXlm8FKRvmZhlQihl2");
    setUser(userData);
  }

  // TOOD: remove this function on merge, user and group should already be loaded on sign in
  useEffect(() => {
    setGroupState();
  }, []);

  useEffect(() => {
    if (typeof group === "string" || typeof user === "string") return;
    console.log(group);
    // Check if the user is an admin
    if (user.email == group.contact_email) {
      setIsAdmin(true);
    }
  }, [group, user]);

  function RenderCards() {
    if (typeof group === "string") {
      return null;
    }
    return Object.entries(group.members).map(([uid, rest]) => {
      return MemberCard([...rest, uid]);
    });
  }

  function RenderDeleteLeaveButton() {
    if (isAdmin) {
      return (
        <button
          className={styles.deleteButton}
          onClick={() => setIsDissolveGroup(true)}
        >
          Delete
        </button>
      );
    }
    return (
      <button
        className={styles.deleteButton}
        onClick={RemoveOnClick}
      >
        Leave Group
      </button>
    );
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
              alt="blue ticket"
            />
          )}
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
            <RenderDeleteLeaveButton />
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
      {isLeaveGroup ? <LeaveGroupModal/> : null}
    </>
  );
}
