import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../db/dbConfig";

//Purpose: add a group to user's pending group
//How it works: appends group_id to user's pending_groups array
//Input: user_id, group_id
//Expected Result: group_id added to user's pending_group array
export async function addPendingGroup(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    try {
        
        let userData = (await getDoc(docRef)).data();
        let pending_groups_arr = userData.pending_groups;
        pending_groups_arr.push(group_id);
        await updateDoc(docRef, {
            pending_groups: pending_groups_arr
        });

    } catch(e) {
        console.log(`error in addPendingGroup: ${e}`);
    }

}
