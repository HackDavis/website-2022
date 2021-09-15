import { db } from "../db";
import { doc, getDoc } from "firebase/firestore";

export async function findUserById(user_id) {
  return async function (dispatch) {
    const docRef = doc(db, "2022-users", user_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let userData = docSnap.data();
      return userData;
    } else {
      console.log("No such document!");
    }
  }
}

