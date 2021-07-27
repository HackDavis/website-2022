import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { db } from "../db";

console.log("userSlice db:", db);

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {} 
	},
	reducers: {
		getUser: state => {
			var docRef = db.collection("2022-users").doc("3KaiyNl4pUuV2UEDTlt1");

			docRef.get().then((doc) => {
				if (doc.exists) {
					// console.log("Document data:", doc.data());
					// let userData = JSON.stringify(doc.data());
					// state.user = userData;
					return {
						...state,
						user: JSON.stringify(doc.data())
					}
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			}).catch((error) => {
				console.log("Error getting document:", error);
			});
		}
	}
})

export const { getUser } = userSlice.actions

export default userSlice.reducer