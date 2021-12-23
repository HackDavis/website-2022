import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

export async function addPendingGroup(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    //error checking for userData (if user_id doesnt exist)
    let userData = (await getDoc(docRef)).data();
    let pending_groups_arr = userData.pending_groups;
    pending_groups_arr.push(group_id);

    await updateDoc(docRef, {
        pending_groups: pending_groups_arr,
    });
}