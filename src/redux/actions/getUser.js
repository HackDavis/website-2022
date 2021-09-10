// Get user function
import {GET_USER} from "./types";
import { db } from "../db";

export function getUser(user_id) {
	return function (dispatch) {
		var docRef = db.collection("2022-users").doc(user_id);
		docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let userData = doc.data();
          userData.user_id = docRef.id;
          console.log("userData from getUser function:", JSON.stringify(userData));
          dispatch({
            type: GET_USER,
            payload: userData,
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
	};
}