// !!Make sure to import env file while updating data into Firestore!!

import React, { useState, useEffect } from "react";
import "./App.css";
import "firebase/analytics";
import "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { dbConfig } from "./db/dbConfig.js";
import {setDoc, doc, getDoc} from "firebase/firestore";
import { getUser } from "./recoil/DBQueries/getUser";
import { TestRecoil } from "./recoil/testButtons/TestRecoil";

// Recoil Imports
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import CharacterCounter from "./recoil/CharacterCounter.js";
import { ResetPendingGroupsButton } from "./recoil/testButtons/ResetPendingGroupsButton";
import  { GetUserButton } from "./recoil/testButtons/GetUserButton";
import  { GetGroupButton } from "./recoil/testButtons/GetGroupButton";
import {SetRSVPButton} from "./recoil/testButtons/SetRSVPButton";
import { userStateAtom } from "./recoil/atoms/userAtom.js";
import AsyncAwaitTest from "./recoil/AsyncAwaitTest.js";
// import CreateGroupButton from "./recoil/testButtons/CreateGroupButton";
// import GroupApplicationButton from "./recoil/testButtons/GroupApplicationButton";
// import DenyGroupRequestButton from "./recoil/testButtons/DenyGroupRequestButton";

require("dotenv").config();

function App(props) {
  const [user, setUser] = useRecoilState(userStateAtom);

  // Sign in using Google Login
  // Note: Produces an error when using Safari but works fine on Chrome
  async function handleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth,provider);
  
    // The signed-in user info.
    const user = result.user;

    if (user) { 
      // If user signs in with their gmail account but their data does not exist in firebase, then create a user object
      const userData = await getUser(user.uid);
      if (userData) {
        console.log("user found in database");
        // Update user recoil state 
        setUser(userData);
      } else {
        // Add new user to DB 
      const newUserData = {
        name: user.displayName, // there should be a name field somewhere in the sign up that feeds into this
        email: user.email,
        user_id: user.uid,
        profile_picture: user.photoURL || "",
        app_status: "Not Applied",
        rsvp_status: false,
        qr_code: "",
        about_me: "",
        group_id: "",
        pending_groups: [],
        tags: [],
        pending_invitations: {},
        hd_director:
          user.email.substring(
            user.email.lastIndexOf("@") + 1
          ) === "hackdavis.io",
      };

      await setDoc(doc(dbConfig, "2022-users", user.uid), newUserData);
      console.log("created new user");
    }
    } else { 
      console.log("No user found!");
    };
  };

  // function signUp() {
  //   var email = document.getElementById("emailInput-Up").value;
  //   var password = document.getElementById("passwordInput-Up").value;

  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       console.log(userCredential);
  //       db.collection("2022-users")
  //         .add({
  //           name: "", // there should be a name field somewhere in the sign up that feeds into this
  //           email: userCredential.user.email,
  //           profile_picture: userCredential.user.photoURL || "",
  //           app_status: "Not Applied",
  //           rsvp_status: false,
  //           qr_code: "",
  //           about_me: "",
  //           group_id: "",
  //           pending_groups: [],
  //           tags: [],
  //           pending_invitations: {},
  //           hd_director:
  //             userCredential.user.email.substr(
  //               userCredential.user.email.lastIndexOf("@") + 1
  //             ) === "hackdavis.io",
  //         })
  //         .then((res) => {
  //           console.log("Document successfully written!");
  //           console.log(res);
  //         })
  //         .catch((error) => {
  //           console.error("Error writing document: ", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // ..
  //     });
  // }

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
      {/* <button type="button" onClick={signUp}>
        {" "}
        Sign-Up!{" "}
      </button> */}
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
    <button onClick={() => {
          AsyncAwaitTest();
        }}>Async Await Testing</button>
    <button onClick={() => {
          console.log(user);
        }}>Recoil test</button>
    <CharacterCounter/>
    <SetRSVPButton
      response={"set rsvp button test[]--"} 
    />
    <TestRecoil/>
    <GetUserButton/>
    <GetGroupButton/> 
    <ResetPendingGroupsButton/>
    {/* The three components below are breaking the recoil state update, so the front-end changes are not reflect immediately */}
    {/* <CreateGroupButton/> */}
    {/* <GroupApplicationButton/> */}
    {/* <DenyGroupRequestButton/>  */}
    </div>
  );
}

export default App;
