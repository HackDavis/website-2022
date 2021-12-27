import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import { getUser } from "./getUser.js";

// deletes group_id from users's pending_group
// group calls this function
// takes user_id and group_id as input
// this group no longer exists in user's pending_groups

export async function deleteMultiplePendingMembers(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    
    try {
        let userCopy = await getUser(user_id);
        let pending_groups_copy = userCopy.pending_groups;
        console.log(pending_groups_copy);
        let groupIndex = pending_groups_copy.indexOf(group_id);
        pending_groups_copy.splice(groupIndex, 1);
        console.log(userCopy);

        await updateDoc(docRef, {
            pending_groups: pending_groups_copy,
        });
    } catch(e) {
        console.log("error with deleteMultiplePendingMembers: ", e);
    }
}