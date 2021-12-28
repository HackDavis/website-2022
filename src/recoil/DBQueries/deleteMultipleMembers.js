import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import { getUser } from "./getUser.js";

// deletes group_id from users's group_id field
// group calls this function
// takes user_id as input
// user's group_id field will be blank

export async function deleteMultipleMembers(user_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    
    try {
        console.log(user_id);
        await updateDoc(docRef, {
            group_id:"",
        });
    } catch(e) {
        console.log("error with deleteMultiplePendingMembers: ", e);
    }
}