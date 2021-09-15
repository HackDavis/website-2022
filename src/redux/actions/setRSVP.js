import { SET_RSVP } from "./types";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../db";

export async function setRSVP(user_id, response) {
  return async function (dispatch) {
    // gets user that will have their rsvp status changed
    const docRef = doc(db, "2022-users", user_id); 
    await updateDoc(docRef, { 
      rsvp_status: response
    });
  };
};
