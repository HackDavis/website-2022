import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";
import { getUser } from "./getUser.js";

// Purpose: deletes group_id from users's group_id field
// How it works: remove's user's group_id
// Input: takes user_id as input
// expected Result: user's group_id field will be blank

export async function deleteUserGroupID(user_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    
    try {
        await updateDoc(docRef, {
            group_id:""
        });
    } catch(e) {
        console.log("error with deleteUserGroupID: ", e);
    }
}