import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";

// Input: groupID and new team name group leader wants to use for their updated profile
// Expected Results: Updates that group's description

export async function updateGroupName(groupID, name) {
    const docRef = doc(dbConfig, "2022-groups", groupID);
    try {
        await updateDoc(docRef, {
            group_name: name
        });
        return name;
    } catch (e) {
        console.error("Error setting group description: ", e);
    }
}
