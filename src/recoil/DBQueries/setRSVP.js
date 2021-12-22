import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../db/db.js";

// Purpose: Update the user's RSVP response between "Yes","No", and "Undecided"
// How it works: Query the database for the user's id and update the rsvp status field to the response that is passed into the parameter
// Input: userId(string) and response(string)
// Expected Result: The user's RSVP status field is updated based on the response passed into the function

export async function setRSVP(user, response) {
    // setRSVP on Firebase end
    const docRef = doc(db, "2022-users", user.user_id);
    try {
        await updateDoc(docRef, {
            rsvp_status: response
        });
        console.log("successfully updated RSVP status");
    } catch(e) {
        console.log(`error setting rsvp: ${e}`);
    }
    return response;
}