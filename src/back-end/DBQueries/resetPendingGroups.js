import { doc, updateDoc} from "firebase/firestore";
import { dbConfig } from "../dbConfig.js";

// Purpose: Reset a user’s pendingGroups field to an empty array 
// How it works: When a user is accepted to the group they applied to or if they created their own group,
// we would want to empty the array of groups they applied to but are still waiting on a response 
// Input: userID (string)
// Expected Result: The user's pendingGroups field will be an empty array 

export async function resetPendingGroups(userID) {
    const docRef = doc(dbConfig, "2022-users", userID);
    try {
        await updateDoc(docRef, {
            pending_groups: []
        });
        let newPendingGroups = [];
        return newPendingGroups;
    } catch(e) {
        console.error(`resetPendingGroup error ${e}`);
    }
}

