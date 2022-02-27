import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import { getGroup } from "./getGroup.js";
import { getUser } from "./getUser.js";

//Purpose: Add user_id to group's pendind_member's map
//How it works: adds a new entry in the pending_member's map(key: user_id, value: array of name and email)
//Input: user_id, user's name, user's email, group_id
//Expected Result: you should see the user_id as a entry in the pending_members map with their name and email as values under the user_id
export async function addPendingMember(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        const userData = await getUser(user_id);
        let groupData = await getGroup(group_id);
        let pending_members_map_copy = new Map();
        pending_members_map_copy = groupData.pending_members;
        pending_members_map_copy[user_id] = [userData.name, userData.email, userData.leader_status];
    
        await updateDoc(docRef, {
            pending_members: pending_members_map_copy
        });

        return pending_members_map_copy;
    } catch(e) {
        console.log(`error updating user in addPendingMember: ${e}`);
    }
}