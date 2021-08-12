import { FETCH_USER } from "./types";
import { db } from "../db";

export function fetchUser() { 
    return function (dispatch) { 
        var docRef = db.collection("2022-users").doc("3KaiyNl4pUuV2UEDTlt1");

			docRef.get().then((doc) => {
				if (doc.exists) {
					// console.log("Document data:", doc.data());
					let userData = doc.data();
					console.log(`userData: ${userData}`);
					// state.user = userData;
					dispatch({
						type: FETCH_USER,
                        payload: userData
					});
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			}).catch((error) => {
				console.log("Error getting document:", error);
			});
    }; 
}; 