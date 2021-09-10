import { GROUP_APPLICATION } from "./types";
import { db } from "../db";
import { findUserById } from "./findUserById";
import { findGroupById } from "./findGroupById";

// Note: This function will work once we integrate async await
export function groupApplication(user_id, name, email, group_id) {
  console.log("group application function called");
  return function (dispatch, getState) {
    addPendingGroup(user_id, group_id);
    addPendingMember(user_id, name, email, group_id);
  };
}

function addPendingGroup(user_id, group_id) {
  // Note: Need to use await on line 17 in order for function to work
  var docRef = db.collection("2022-users").doc(user_id);
  let userData = findUserById(user_id);
  let pending_groups_arr = userData.pending_groups;
  pending_groups_arr.push(group_id);

  // update user document with new pending group
  docRef
    .update({ pending_groups: pending_groups_arr })
    .then(() => {
      console.log("added pending group");
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

function addPendingMember(user_id, name, email, group_id) {
  var docRef = db.collection("2022-groups").doc(group_id);
  // Note: Need to use await on line 34 in order for function to work
  let groupData = findGroupById(group_id);
  let pending_members_map = groupData.pending_members;

  // Update the pending members map with a new user
  // Note: May need to add a check on the amount of pending members we can insert
  pending_members_map[user_id] = [name, email];

  // update group document with new pending member map
  docRef
    .update({ pending_members: pending_members_map })
    .then(() => {
      console.log("added pending members");
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
