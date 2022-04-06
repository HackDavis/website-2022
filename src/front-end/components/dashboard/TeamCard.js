import React, { useEffect, useState } from "react";
import styles from "../../css/dashboard/teamcard.module.scss";
import { getUser } from "../../../back-end/DBQueries/getUser";

export default function TeamCard(props) {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    let allMembers = [];
    const fetchMembers = async () => {
      for (const memberId in props.data.members) {
        const memberData = await getUser(memberId);
        allMembers.push(memberData);
      }
    };
    fetchMembers().then(() => {
      setMembers(allMembers);
    });

  }, []);

  const content = Object.values(members).map((member) => {
    // console.log("member: ", member)
    return (
      <div className={styles.names} key={member[1]}>
        <div className={styles.pfpContainer}><img src={member[4]} className={styles.pfp} alt="member pfp" /></div>
        <div className={styles.memberName}>{member.name.split(' ')[0]}</div>
      </div>
    );
  });

  return (
    <div
      key={props.data.group_id}
      className={`${props.showRequest ? `${styles.removeEffect}` : ""} ${styles.container
        }`}
    >
      <h3>
        {props.data.group_name} <span>{Object.keys(props.data.members).length}/4</span>
      </h3>
      <h5 className={styles.id}>ID #{props.data.group_id}</h5>
      <p>{props.data.description}</p>
      <h5>TEAM</h5>
      <div className={styles.group}>{content}</div>
      <h5>We are looking for:</h5>
      <div className={styles.skillsetGroup}>
        {props.data.tags1.map((tag1) => {
          return <div key={tag1} className={styles.role}>{tag1}</div>;
        })}
        {props.data.tags2.map((tag2) => {
          return <div key={tag2} className={styles.skill}>{tag2}</div>;
        })}
      </div>
    </div>
  );
}
