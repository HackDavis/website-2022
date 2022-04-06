import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";

// Purpose: Update a user's group ID to indicate which group they belong to 
// How it works: Query the DB for the specific user and update their group ID field 
// Input: userID (string), groupID (string)
// Expected Result: The user's groupID field will be updated to the groupID that was passed into this function

export async function setGroupID(userID, groupID) {
    const docRef = doc(dbConfig, "2022-users", userID);
    try {
        await updateDoc(docRef, {
            group_id: groupID
        });
        return groupID;
    } catch (e) {
        console.error("error setting groupID ", e);
    }
}
