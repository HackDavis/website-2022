import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import { getGroup } from "./getGroup.js";

export async function addPendingMember(user_id, user_name, email, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        //error checking for groupData (if group_id doesnt exist)
        //console.log(group_id);
        let groupData = await getGroup(group_id);
        //console.log(groupData);
        let pending_members_map_copy = new Map();
        pending_members_map_copy = groupData.pending_members;
        pending_members_map_copy[user_id] = [user_name, email];
        //console.log(pending_members_map_copy);
    
        await updateDoc(docRef, {
            pending_members: pending_members_map_copy,
        });

        return pending_members_map_copy;
    } catch(e) {
        console.log(`error updating user in addPendingMember: ${e}`);
    }
}