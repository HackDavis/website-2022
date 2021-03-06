import React, { useEffect, useState } from "react";
import styles from "../../css/dashboard/pendingteamcard.module.scss";
import DeleteModal from "./DeleteModal";
import { getUser } from "../../../back-end/DBQueries/getUser";
import { getGroup } from "../../../back-end/DBQueries/getGroup";
import { groupWithdraw } from "../../../back-end/DBQueries/groupWithdraw";
import { userStateAtom } from "../../../recoil/atoms/userAtom";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SetUserPendingGroups } from "../../../recoil/selectors/setUserPendingGroups";
import { updateGroupPendingMember } from "../../../recoil/selectors/updateGroupPendingMember";
import { useNavigate } from "react-router-dom";

export default function PendingTeamCard(props) {
  const [members, setMembers] = useState([]);
  const [group, setGroup] = useState({});
  const [user, setUser] = useRecoilState(userStateAtom);
  const setSetUserPendingGroup = useSetRecoilState(SetUserPendingGroups);
  const setUpdateGroupPendingMember = useSetRecoilState(updateGroupPendingMember);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    let allMembers = [];
    let groupData = {};

    const fetchData = async () => {
      const getGroupData = await getGroup(props.groupId);
      for(const memberId of Object.keys(getGroupData.members)) {
        const memberData = await getUser(memberId);
        allMembers.push(memberData);
      }
      groupData = getGroupData;
    };
  
    fetchData().then(() => {
      setGroup(groupData);
      setMembers(allMembers);
    });
  }, []);

  const content = members.map((member, ind) => (
    <div className={styles.names} key={ind}>
      <div className={styles.pfpContainer}><img src={member.profile_picture} className={styles.pfp} /></div>
      <div className={styles.memberName}>{member.name.split(' ')[0]}</div>
    </div>
  ));

  async function deleteRequestClick() {
    //console.log(user.pending_groups);
    const pending_members_map_copy = await groupWithdraw(user.user_id, group.group_id);
    if (pending_members_map_copy != null) {
      let pending_groups_copy = [...user.pending_groups];
      let groupIndex = pending_groups_copy.indexOf(group.group_id);
      pending_groups_copy.splice(groupIndex, 1);

      setSetUserPendingGroup(pending_groups_copy);
      setUpdateGroupPendingMember(pending_members_map_copy);
      setShowModal(false);
      navigate("/teamfinder/pendingteams", {state: {pendingTeams: pending_groups_copy}});
    }
  };
  return (
    <div className={styles.container}>
      {user.group_id === "" ? (
        <div className={styles.statusPending}>Pending</div>
      ) : (
        <div className={styles.statusAccepted}>Accepted</div>
      )}
      <h3>
        {group.group_name} <span>{Object.keys(members).length}/4</span>
      </h3>
      <h5 className={styles.id}>ID #{group.group_id}</h5>
      <p>{group.description}</p>
      <h5>TEAM</h5>
      <div className={styles.group}>{content}</div>
      <h5>We are looking for:</h5>
      <div className={styles.skillsetGroup}>
        {group.tags1?.map((tag1) => {
          return <div className={styles.role} key={tag1}>{tag1}</div>;
        })}
        {group.tags2?.map((tag2) => {
          return <div className={styles.skill} key={tag2}>{tag2}</div>;
        })}
      </div>
      <button className={styles.btn} onClick={() => setShowModal(true)}>
        DELETE REQUEST
      </button>

      {showModal ? <DeleteModal setShowModal={setShowModal} deleteRequestClick={deleteRequestClick}/> : null}
    </div>
  );
}