import { doc, getDoc, updateDoc} from "firebase/firestore";
import { dbConfig } from "../dbConfig.js";
import {getGroup} from "./getGroup";
import { getUser } from "./getUser.js";

export async function deletePendingMember(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        const groupData = await getGroup(group_id);
        const userData = await getUser(user_id);
        // must spread because this is an object of arrays - 
        // otherwise you do a shallow copy of nested objects 
        let new_pending_members = {...groupData.pending_members};
        delete new_pending_members[userData.user_id]; 
        await updateDoc(docRef, {
            pending_members: new_pending_members
        });
        return new_pending_members;
    } catch(e) {
        console.log(`deletePendingMember error ${e}`);
    }
}
