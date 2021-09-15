import {GET_USER} from "./types";
import { db } from "../db";
import { doc, getDoc } from "firebase/firestore";

export async function getUser(user_id) {
  return async function (dispatch) {
    const docRef = doc(db, "2022-users", user_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let userData = docSnap.data();
      userData.user_id = docRef.id;
      console.log("userData from getUser function:", JSON.stringify(userData));
      dispatch({
        type: GET_USER,
        payload: userData,
      });
    } else {
      console.log("No such document!");
    }
  }
}
