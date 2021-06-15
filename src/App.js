import './App.css';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
require('dotenv').config();

function App() { 
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

  // Initialize Firebase
  if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

    var provider = new firebase.auth.GoogleAuthProvider();
    
  function handleSignIn() { 
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result); 
        // TODO: Write a request to our firestore database, asking it to log certain fields 
        // from the result variable 

        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
    }).catch((error) => {
        // TODO: Give the user visual feedback letting them know that their sign-in attempt failed 

        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    });
  } 

  return (
    <div className="App">
      <button onClick={handleSignIn}>Click me to sign in with Google</button>
    </div>
  );
}

export default App;
