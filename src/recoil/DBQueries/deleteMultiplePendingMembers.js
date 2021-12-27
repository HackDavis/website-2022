import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import { getUser } from "./getUser.js";

export async function deleteMultiplePendingMembers(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    //console.log(user_id);
    let userCopy = await getUser(user_id);
    let pending_groups_copy = userCopy.pending_groups;
    //console.log(userCopy);
    let groupIndex = pending_groups_copy.indexOf(group_id);
    pending_groups_copy.splice(groupIndex, 1);
    //console.log(userCopy);

    await updateDoc(docRef, {
        pending_groups: pending_groups_copy,
    });
}