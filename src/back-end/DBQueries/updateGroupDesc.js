import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";

// Input: groupID and new description group leader wants to use for their updated profile
// Expected Results: Updates that group's description

export async function updateGroupDesc(groupID, desc) {
    const docRef = doc(dbConfig, "2022-groups", groupID);
    try {
        await updateDoc(docRef, {
            description: desc
        });
        console.log("Successfully updated group's description");
        return desc;
    } catch (e) {
        console.log("Error setting group description: ", e);
    }
}
