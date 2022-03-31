import React, { useEffect, useState } from "react";
import styles from "../../css/dashboard/pendingteamcard.module.scss";
import { getUser } from "../../../back-end/DBQueries/getUser";
import { getGroup } from "../../../back-end/DBQueries/getGroup";

export default function PendingTeamCard(props) {
  const [members, setMembers] = useState([]);
  const [group, setGroup] = useState({});
  
  useEffect(() => {
    let allMembers = [];
    let groupData = {};

    const fetchData = async () => {
      const getGroupData = await getGroup(props.groupId);
      for(const memberId of getGroupData.members) {
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
      <div className={styles.memberName}>{member.name}</div>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.status}>Pending</div>
      <h3>
        {group.group_name} <span>{group.members?.length}/4</span>
      </h3>
      <h5 className={styles.id}>ID #{group.group_id}</h5>
      <p>{group.description}</p>
      <h5>TEAM</h5>
      <div className={styles.group}>{content}</div>
      <h5>We are looking for:</h5>
      <div className={styles.skillsetGroup}>
        {group.tags1?.map((tag1) => {
          return <div className={styles.role}>{tag1}</div>;
        })}
        {group.tags2?.map((tag2) => {
          return <div className={styles.skill}>{tag2}</div>;
        })}
      </div>
      <button className={styles.btn}>JOIN TEAM</button>
    </div>
  );
}