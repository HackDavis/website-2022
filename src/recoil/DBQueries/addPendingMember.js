import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

export async function addPendingMember(user_id, name, email, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        //error checking for groupData (if group_id doesnt exist)
        let groupData = (await getDoc(docRef)).data();
        let pending_members_map = groupData.pending_members;
        pending_groups_map[user_id] = [name, email];
    
        await updateDoc(docRef, {
            pending_members: pending_members_map,
        });
    } catch(e) {
        console.log(`error updating user in createGroup: ${e}`);
    }
}