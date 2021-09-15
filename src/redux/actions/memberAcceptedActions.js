import { MEMBER_ACCEPT } from "./types";
import { db } from "../db";
import { doc, updateDoc } from "firebase/firestore";
import { findGroupById } from "./findGroupById";

export async function memberAccepted(user_id, name, email) {
  return async function (dispatch, getState) {
    // let { group_id } = getState().userData;
    let group_id = "C5VaLwp0TjZCj2erPcaF";
    // TODO: if the user has a non-empty string for their group_id, return now

    // Set Group ID
    await setGroupId(user_id, group_id);
    await addGroupMember(user_id, name, email, group_id);
  };
}

async function setGroupId(user_id, group_id) {
  console.log("hit user id on line 16", user_id);
  // gets user that will have their group ID changed
  const docRef = doc(db, "2022-users", user_id);
  await updateDoc(docRef, {group_id: group_id});
  console.log("group id set");
}

async function addGroupMember(user_id, name, email, group_id) {
  // look up current group by id
  let groupData = findGroupById(group_id);
  console.log("received groupData in addGroupMember function:", groupData);

  // alter the group's array 
  // let members = groupData.members;
  // if (members.length >= groupData.max_members) return;
  // // note: may need to add check where group member can get re-added to the same group, maybe with .has ?
  // members.set(user_id, [name, email, false]);

  // update the current group's document
}

