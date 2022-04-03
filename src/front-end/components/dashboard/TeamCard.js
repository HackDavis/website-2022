import React, { useEffect, useState } from "react";
import styles from "../../css/dashboard/teamcard.module.scss";
import { getUser } from "../../../back-end/DBQueries/getUser";

export default function TeamCard(props) {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    let allMembers = [];
    const fetchMembers = async () => {
      for(const memberId of props.data.members) {
        const memberData = await getUser(memberId);
        allMembers.push(memberData);
      }
    };
    fetchMembers().then(() => {
      setMembers(allMembers);
    });
    
  }, []);

  const content = members.map((member, ind) => (
    <div className={styles.names} key={ind}>
      <div className={styles.pfpContainer}><img src={member.profile_picture} className={styles.pfp} alt="member pfp"/></div>
      <div className={styles.memberName}>{member.name.split(' ')[0]}</div>
    </div>
  ));

  return (
    <div
      className={`${props.showRequest ? `${styles.removeEffect}` : ""} ${
        styles.container
      }`}
    >
      <h3>
        {props.data.group_name} <span>{props.data.members?.length}/4</span>
      </h3>
      <h5 className={styles.id}>ID #{props.data.group_id}</h5>
      <p>{props.data.description}</p>
      <h5>TEAM</h5>
      <div className={styles.group}>{content}</div>
      <h5>We are looking for:</h5>
      <div className={styles.skillsetGroup}>
        {props.data.tags1.map((tag1) => {
          return <div className={styles.role}>{tag1}</div>;
        })}
        {props.data.tags2.map((tag2) => {
          return <div className={styles.skill}>{tag2}</div>;
        })}
      </div>
    </div>
  );
}
