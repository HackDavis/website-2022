import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import { getUser } from "./getUser.js";

// Purpose: deletes group_id from users's pending_group
// How it works: removes group_id from user's pending group array copy and then updates to firebase
// Input: takes user_id and group_id as input
// Expected Result: this group no longer exists in user's pending_groups

export async function deleteUserPendingGroup(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    
    try {
         console.log(user_id);
        let userCopy = await getUser(user_id);
        //console.log(userCopy);
        let pending_groups_copy = userCopy.pending_groups;
        //console.log(pending_groups_copy);
        let groupIndex = pending_groups_copy.indexOf(group_id);
        pending_groups_copy.splice(groupIndex, 1);
        //console.log(pending_groups_copy);

        await updateDoc(docRef, {
            pending_groups: pending_groups_copy,
        });
    } catch(e) {
        console.log("error with deleteMultiplePendingMembers: ", e);
    }
}