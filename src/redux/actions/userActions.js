import { FETCH_USER } from "./types";
import { db } from "../db";

export function fetchUser() { 
    return function (dispatch) { 
        var docRef = db.collection("2022-users").doc("3KaiyNl4pUuV2UEDTlt1");
		
		docRef.get().then((doc) => {
			if (doc.exists) {
				let userData = doc.data();
				userData.user_id = docRef.id;
				console.log("userData:", JSON.stringify(userData));
				dispatch({
					type: FETCH_USER,
					payload: userData
				});
			} else {
				console.log("No such document!");
			}
		}).catch((error) => {
			console.log("Error getting document:", error);
		});
    }; 
}; 