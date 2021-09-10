import { SET_RSVP } from "./types";
import {db} from "../db";

export function setRSVP(user_id, response) {
  return function(dispatch) {
    // gets user that will have their rsvp status changed
    var docRef = db.collection("2022-users").doc(user_id);
    docRef.update({rsvp_status: response})
    .then(() => {
      console.log("rsvp status changed");
    })
    .catch((error) => {
      console.log("Error in setting RSVP status", error);
    });
  };
};