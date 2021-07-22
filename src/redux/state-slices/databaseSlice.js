import { createSlice } from '@reduxjs/toolkit';
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

let db; 
let app;

// Initialize Firebase, preventing repeated initializations
if (!firebase.apps.length) { 
    app = firebase.initializeApp(firebaseConfig); 
}
else { 
    console.log("hit databaseSlice else statement"); 
}

db = firebase.firestore(app);
//console.log("databaseSlice db:", db); 

export const databaseSlice = createSlice({
	name: 'db',
	initialState: {
		db: db
	},
})

export default databaseSlice.reducer