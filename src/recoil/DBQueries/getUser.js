import { doc, getDoc } from "firebase/firestore";
import { db } from "../../db/db.js";

// Purpose: Gets the user's basic information when they log into their Google account
// How it works: When a user first logs in, the async function getUser() is called to fetch the user's data; the recoil state will be updated in the component that calls this function
// Input: userId(string)
// Expected Result: JSON object of the logged in user is stored in the user recoil state

export async function getUser(user) {
    // TODO: hardcoded ID will be replaced with the UID of the logged in user; need to integrate this with the login button
    // The line below is for testing purposes
    const docRef = doc(db, "2022-users", "3KaiyNl4pUuV2UEDTlt1");
    
    // TODO: uncomment line below once integrated with firebase login
    // const docRef = doc(db, "2022-users", user.user_id);
    const docSnap =  await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

