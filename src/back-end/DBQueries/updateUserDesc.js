import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";

// Input: userId and new description user wants to use for their updated profile
// Expected Results: Updates that user's description

export async function updateUserDesc(userID, desc) {
    const docRef = doc(dbConfig, "2022-users", userID);
    try {
        await updateDoc(docRef, {
            description: desc
        });
        return desc;
    } catch (e) {
        console.error("error setting user desc ", e);
    }
}
