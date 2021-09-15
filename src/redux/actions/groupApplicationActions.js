import { GROUP_APPLICATION } from "./types";
import { db } from "../db";
import { findUserById } from "./findUserById";
import { findGroupById } from "./findGroupById";
import { doc, updateDoc } from "firebase/firestore";

// Note: This function will work once we integrate async await
export async function groupApplication(user_id, name, email, group_id) {
  console.log("group application function called");
  return async function (dispatch, getState) {
    await addPendingGroup(user_id, group_id);
    await addPendingMember(user_id, name, email, group_id);
  };
}

async function addPendingGroup(user_id, group_id) {
  const docRef = doc(db, "2022-users", user_id);
  let userData = await findUserById(user_id);
  let pending_groups_arr = userData.pending_groups;
  pending_groups_arr.push(group_id);

  // update user document with new pending group
  await updateDoc(docRef, { 
    pending_groups: pending_groups_arr 
  }); 
}

async function addPendingMember(user_id, name, email, group_id) {
  const docRef = doc(db, "2022-groups", group_id); 
  // Note: Need to use await on line 34 in order for function to work
  let groupData = await findGroupById(group_id);
  let pending_members_map = groupData.pending_members;

  // Update the pending members map with a new user
  // Note: May need to add a check on the amount of pending members we can insert
  pending_members_map[user_id] = [name, email];

  // update group document with new pending member map
  await updateDoc(docRef, { 
    pending_members: pending_members_map 
  }); 
}
