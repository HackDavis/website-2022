import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../dbConfig.js";

// Purpose: Update the user's RSVP response between "Yes","No", and "Undecided"
// How it works: Query the database for the user's id and update the rsvp status field to the response that is passed into the parameter
// Input: userId(string) and response(string)
// Expected Result: The user's RSVP status field is updated based on the response passed into the function

export async function setRSVP(user, response) {
    // setRSVP on Firebase end
    const docRef = doc(dbConfig, "2022-users", user.user_id);
    try {
        await updateDoc(docRef, {
            rsvp_status: response
        });
        return response;
    } catch(e) {
        console.error(`error setting rsvp: ${e}`);
    }
}