import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";

// Input: userId and new discord id user wants to use for their updated profile
// Expected Results: Updates that user's description

export async function updateUserDiscordID(userID, discord) {
    const docRef = doc(dbConfig, "2022-users", userID);
    try {
        await updateDoc(docRef, {
            discord_id: discord
        });
        return discord;
    } catch (e) {
        console.error("error setting user desc ", e);
    }
}
