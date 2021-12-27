import { doc, getDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

// Purpose: Gets the user's basic information when they log into their Google account
// How it works: When a user first logs in, the async function getUser() is called to fetch the user's data; the recoil state will be updated in the component that calls this function
// Input: userId(string)
// Expected Result: JSON object of the logged in user is stored in the user recoil state

export async function getGroup(groupID) {
    // TODO: hardcoded ID will be replaced with the UID of the logged in user; need to integrate this with the login button
    // The line below is for testing purposes
    const docRef = doc(dbConfig, "2022-groups", groupID);
    const docSnap =  await getDoc(docRef);
    if (docSnap.exists()) {
        //console.log(docSnap.data()); 
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("Group does not exist!");
    }
}

