import styles from '../../css/myteamadmin/MyTeamAdminContent.module.scss';
import goldenTicket from "../../images/createteam/goldenTicket.svg";
import { useRecoilState, useRecoilValue } from 'recoil';
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
import { groupStateAtom } from "../../../recoil/atoms/groupAtom";
import { editTeamAtom } from "recoil/atoms/editTeamAtom";
import { getGroup } from '../../../back-end/DBQueries/getGroup';
import { getUser } from '../../../back-end/DBQueries/getUser';
import { GroupCard } from 'front-end/components/myteamadmin/GroupCard';
import { MemberCard } from './MemberCard';
import { EditTeamModal } from "front-end/components/myteamadmin/EditTeamModal";

import { useEffect } from 'react';

export function MyTeamAdminContent() {
  const [user, setUser] = useRecoilState(userStateAtom);
  const [group, setGroup] = useRecoilState(groupStateAtom);
  const isEditTeam = useRecoilValue(editTeamAtom);

  async function setGroupState() {
    // user hardcoded for testing
    const groupData = await getGroup("Zs7bdphkPOTiOjk61RKg");
    setGroup(groupData);
    const userData = await getUser("12iCuIXLM7hs7CU8jkKrpVokpd73");
    setUser(userData);
  }

  useEffect(() => {
    setGroupState();
  }, []);

  useEffect(() => {
    console.log(group);
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
            <button className={styles.pendingButton}>
              Your Pending Requests
              <span>{typeof group === "string" ? 0 : Object.keys(group.pending_members).length}</span>
            </button>
            <button className={styles.deleteButton}>Delete</button>
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
    </>
  );
}
