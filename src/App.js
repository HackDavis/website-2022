import React, { useState } from 'react';
import './App.css';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";

// Redux Imports 
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { fetchUser } from "./redux/actions/userActions"; 

require('dotenv').config();

let db = "";

function App(props) {
  var provider = new firebase.auth.GoogleAuthProvider(); 
    
  function handleSignIn() { 
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result); 
        // result.additionalUserInfo.isNewUser <- says whether or not its the users first time signing in 
        // TODO: Write a request to our firestore database, asking it to log certain fields 
        // from the result variable 
        console.log(result.additionalUserInfo.isNewUser);

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
  

  function signUp() {
    var email = document.getElementById("emailInput-Up").value;
    var password = document.getElementById("passwordInput-Up").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential); 
      db.collection("2022-users").add({
        name: "", // there should be a name field somewhere in the sign up that feeds into this 
        email: userCredential.user.email,
        profile_picture: userCredential.user.photoURL || "",
        app_status: "Not Applied",
        rsvp_status: false,
        qr_code: "",
        about_me: "",
        group_id: "",
        pending_groups: [],
        tags: [],
        pending_invitations: {}, 
        hd_director: userCredential.user.email.substr(userCredential.user.email.lastIndexOf("@") + 1) === "hackdavis.io", 
      })
      .then((res) => {
        console.log("Document successfully written!");
        console.log(res); 
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    })
    .catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }

  function signIn() {
    var email = document.getElementById("emailInput-In").value;
    var password = document.getElementById("passwordInput-In").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log("signed in"); 
    // Signed in
    var user = userCredential.user;
    console.log(user.uid);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }

  function signOut() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Signed Out");
    }).catch((error) => {
      // An error happened.
    });
  }

  function forgotPassword() { 
    firebase.auth().sendPasswordResetEmail(document.getElementById("forgotPasswordEmail").value) 
    .then(() => {
      console.log("success resetting password"); 
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage); 
    });
  } 

  return (
    <div className="App">
      {/* Google Sign In */}
      <button onClick={handleSignIn}>Click me to sign in with Google</button> <br />
      
      {/* Sign up for the first time */}
      <p> Email: <br />
      <input id = "emailInput-Up"></input> </p>
      <p> Password: <br />
      <input id = "passwordInput-Up"></input> </p>
      <button type = "button" onClick = {signUp}> Sign-Up! </button>

      {/* Sign in */}
      <p> Email: <br />
      <input id = "emailInput-In"></input> </p>
      <p> Password: <br />
      <input id = "passwordInput-In"></input> </p>
      <button type = "button" onClick = {signIn}> Sign-In! </button>

      {/* Sign out */}
      <p> <button type = "button" onClick = {signOut}> Sign-Out! </button> </p>

      {/* Forgot Password */}
      <p>Email for forgot password:</p>
      <input id="forgotPasswordEmail"></input>
      <button onClick={forgotPassword}>Forgot Password</button>

      <button
          onClick={() => console.log("hit fetchUser function call", props.fetchUser())} 
      >
          Get User
      </button>
      <button 
          onClick={() => console.log("logging user:", props.user)} 
      > 
          Log User Info 
      </button> 
    </div>
  );
}

App.propTypes = { 
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}; 

const mapStateToProps = (state) => ({ 
  user: state.userData
}); 

export default connect(mapStateToProps, { fetchUser })(App); 