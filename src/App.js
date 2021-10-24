// !!Make sure to import env file while updating data into Firestore!!

import React, { useState, useEffect } from "react";
import "./App.css";
// import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import { getAuth } from "firebase/auth";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUser } from "./redux/actions/userActions";
import { getUser } from "./redux/actions/getUser";
import { memberAccepted } from "./redux/actions/memberAcceptedActions";
import { setRSVP } from "./redux/actions/setRSVP";
import { groupApplication } from "./redux/actions/groupApplicationActions";


// Recoil Imports
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import CharacterCounter from "./recoil/CharacterCounter.js";
import PrintUserRecoil from "./recoil/getUserRecoil.js";

require("dotenv").config();

let db = "";

function App(props) {

  async function handleSignIn() {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth, provider);
  
    // The signed-in user info.
    const user = result.user;

    if (user) { 
      console.log(result.additionalUserInfo.isNewUser);
      console.log("user found:", user);
    } else { 
      console.log("No user found!");
    };
  };

  function signUp() {
    var email = document.getElementById("emailInput-Up").value;
    var password = document.getElementById("passwordInput-Up").value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        db.collection("2022-users")
          .add({
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
            hd_director:
              userCredential.user.email.substr(
                userCredential.user.email.lastIndexOf("@") + 1
              ) === "hackdavis.io",
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

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Signed Out");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  function forgotPassword() {
    firebase
      .auth()
      .sendPasswordResetEmail(
        document.getElementById("forgotPasswordEmail").value
      )
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
    <RecoilRoot>
    <div className="App">
      {/* Google Sign In */}
      <button onClick={handleSignIn}>
        Click me to sign in with Google
      </button>{" "}
      <br />
      {/* Sign up for the first time */}
      <p>
        {" "}
        Email: <br />
        <input id="emailInput-Up"></input>{" "}
      </p>
      <p>
        {" "}
        Password: <br />
        <input id="passwordInput-Up"></input>{" "}
      </p>
      <button type="button" onClick={signUp}>
        {" "}
        Sign-Up!{" "}
      </button>
      {/* Sign in */}
      <p>
        {" "}
        Email: <br />
        <input id="emailInput-In"></input>{" "}
      </p>
      <p>
        {" "}
        Password: <br />
        <input id="passwordInput-In"></input>{" "}
      </p>
      <button type="button" onClick={signIn}>
        {" "}
        Sign-In!{" "}
      </button>
      {/* Sign out */}
      <p>
        {" "}
        <button type="button" onClick={signOut}>
          {" "}
          Sign-Out!{" "}
        </button>{" "}
      </p>
      {/* Forgot Password */}
      <p>Email for forgot password:</p>
      <input id="forgotPasswordEmail"></input>
      <button onClick={forgotPassword}>Forgot Password</button>
      <button
        onClick={() => {
            console.log("hit fetchUser function call", props.fetchUser());
            console.log("this should print after the fetchUser line");
          }
        }
      >
        Get User
      </button>
      <button onClick={() => console.log("logging user:", props.user)}>
        Log User Info
      </button>
      <button
        onClick={() => {
          // props.fetchUser();
          console.log("hit user id on line 170:", props.user.user_id);
          props.memberAccepted(
            props.user.user_id,
            props.user.name,
            props.user.email
          );
        }}
      >
        Call Member Accepted
      </button>
      <button
        onClick={() => {
          props.fetchUser();
          // Must put hardcoded ID to test out functionality because getUser() has not been implemented yet
          props.setRSVP(props.user.user_id, "Yes");
        }}
      >
        Set RSVP Button
      </button>
      <button
        onClick={() => {
          props.groupApplication(
            props.user.user_id,
            props.user.name,
            props.user.email,
            "C5VaLwp0TjZCj2erPcaF"
          );
        }}
      >
        group application
      </button>
    </div>
    <CharacterCounter/>
    <PrintUserRecoil/>
    {/* <button onClick={() => console.log("logging user:", getUserRecoil(props.user.user_id))}>
        Log User Info (Recoil)
    </button> */}
    </RecoilRoot>
  );
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  setRSVP: PropTypes.func.isRequired,
  memberAccepted: PropTypes.func.isRequired,
  groupApplication: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userData,
});

export default connect(mapStateToProps, {
  fetchUser,
  memberAccepted,
  setRSVP,
  groupApplication,
  getUser
})(App);
