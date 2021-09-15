import { FETCH_USER } from "./types";
import { db } from "../db";
import { doc, getDoc } from "firebase/firestore";

export function fetchUser() {
  return async function (dispatch) {
    const docRef = doc(db, "2022-users", "3KaiyNl4pUuV2UEDTlt1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let userData = docSnap.data();
      userData.user_id = docRef.id;
      console.log("userData:", JSON.stringify(userData));
      dispatch({
        type: FETCH_USER,
        payload: userData,
      });
    } else {
      console.log("No such document!");
    }
  };
}
