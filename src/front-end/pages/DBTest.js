// Make sure to import env file while updating data into Firestore

import React from "react";
import "firebase/analytics";
import "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { dbConfig } from "../../back-end/dbConfig";
import {setDoc, doc} from "firebase/firestore";
import { getUser } from "../../back-end/DBQueries/getUser";
import { TestRecoil } from "../../back-end/testButtons/TestRecoil";

// Recoil Imports
import { useRecoilState} from 'recoil';
import { ResetPendingGroupsButton } from "../../back-end/testButtons/ResetPendingGroupsButton";
import  { GetUserButton } from "../../back-end/testButtons/GetUserButton";
import  { GetGroupButton } from "../../back-end/testButtons/GetGroupButton";
import {SetGroupID, SetGroupIDButton} from "../../back-end/testButtons/SetGroupIDButton";
import {SetRSVPButton} from "../../back-end/testButtons/SetRSVPButton";
import { userStateAtom } from "../../recoil/atoms/userAtom.js";
import {CreateGroupButton} from "../../back-end/testButtons/CreateGroupButton";
import {AddGroupMemberButton} from "../../back-end/testButtons/AddGroupMemberButton";
import { MemberAcceptedButton } from "../../back-end/testButtons/MemberAcceptedButton";
import GroupApplicationButton from "../../back-end/testButtons/GroupApplicationButton";
import DenyGroupRequestButton from "../../back-end/testButtons/DenyGroupRequestButton";
import DeleteGroupButton from "../../back-end/testButtons/DeleteGroupButton";
import DeleteActiveMemberButton from "../../back-end/testButtons/DeleteActiveMemberButton";
require("dotenv").config();

export function DBTest() {
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
        // console.log("user found in database");
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
        leader_status: false,
        pending_groups: [],
        tags: [],
        pending_invitations: {},
        hd_director:
          user.email.substring(
            user.email.lastIndexOf("@") + 1
          ) === "hackdavis.io"
      };

      await setDoc(doc(dbConfig, "2022-users", user.uid), newUserData);
      setUser(newUserData);
      // console.log("created new user");
    }
    } else { 
      console.error("No user found!");
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
        // console.log("signed in");
        // Signed in
        var user = userCredential.user;
        // console.log(user.uid);
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
        // console.log("Signed Out");
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
        // console.log("success resetting password");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log(errorCode, errorMessage);
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
          // console.log(user);
        }}>Recoil test</button>
  
    <SetRSVPButton
      response={"set rsvp button tests"} 
    />
    <TestRecoil/>
    <GetUserButton/>
    <GetGroupButton/> 
    <ResetPendingGroupsButton/>
    <CreateGroupButton/>
    <GroupApplicationButton/>
    <DenyGroupRequestButton/> 
    <DeleteGroupButton/>
    <SetGroupIDButton/>
    <DeleteActiveMemberButton/>
    <AddGroupMemberButton/>
    <MemberAcceptedButton/>
    </div>
  );
}
