import {db} from "../db";

export function findUserById(user_id) {
	var docRef = db.collection("2022-users").doc(user_id);
	docRef.get().then((doc) => {
	if(doc.exists) {
		let userData = doc.data();
		return userData;
	}
	else {
		console.log("No such document!");
		return undefined;
	}
}).catch((error) => {
	console.log("Error getting document:", error);
	return undefined;
});
}