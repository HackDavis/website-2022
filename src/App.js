import React, {useEffect} from "react";
import { MainSection } from "./front-end/pages/MainSection";
import { FAQOnwards } from "./front-end/pages/FAQOnwards";
import Section_Navbar from "./front-end/components/section_navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs } from "./front-end/pages/AboutUs";

import "./App.css";
<<<<<<< HEAD
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
import {SetGroupID, SetGroupIDButton} from "./recoil/testButtons/SetGroupIDButton";
import {SetRSVPButton} from "./recoil/testButtons/SetRSVPButton";
import { userStateAtom } from "./recoil/atoms/userAtom.js";
import AsyncAwaitTest from "./recoil/AsyncAwaitTest.js";
import {CreateGroupButton} from "./recoil/testButtons/CreateGroupButton";
import {AddGroupMemberButton} from "./recoil/testButtons/AddGroupMemberButton";
import { MemberAcceptedButton } from "./recoil/testButtons/MemberAcceptedButton";
import GroupApplicationButton from "./recoil/testButtons/GroupApplicationButton";
import DenyGroupRequestButton from "./recoil/testButtons/DenyGroupRequestButton";

//import CreateGroupButton from "./recoil/testButtons/CreateGroupButton";
// import GroupApplicationButton from "./recoil/testButtons/GroupApplicationButton";
// import DenyGroupRequestButton from "./recoil/testButtons/DenyGroupRequestButton";
import DeleteGroupButton from "./recoil/testButtons/DeleteGroupButton";
import DeleteActiveMemberButton from "./recoil/testButtons/DeleteActiveMemberButton";
import { memberAccepted } from "./recoil/DBQueries/memberAccepted";

import GroupWithdrawButton from "./recoil/testButtons/GroupWithdrawButton";
import UpdateUserDescButton from "./recoil/testButtons/UpdateUserDescButton";
import UpdateUserDiscordIDButton from "./recoil/testButtons/UpdateUserDiscordIDButton";
import UpdateGroupDescButton from "./recoil/testButtons/UpdateGroupDescButton";
import UpdateGroupNameButton from "./recoil/testButtons/UpdateGroupNameButton";
import SetRolesButton from "./recoil/testButtons/SetRolesButton.js";
import SetTagsButton from "./recoil/testButtons/SetTagsButton.js";

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
        description: "",
        leader_status: false,
        pending_groups: [],
        pending_invitations: {},
        discord_id: "",
        hd_director:
          user.email.substring(
            user.email.lastIndexOf("@") + 1
          ) === "hackdavis.io"
      };

      await setDoc(doc(dbConfig, "2022-users", user.uid), newUserData);
      setUser(newUserData);
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
=======
>>>>>>> 7b62b0a0bef4ffe3f993632cbd67c20d482d1474

function LandingPage() {
  return (
<<<<<<< HEAD
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
      response={"set rsvp button tests"} 
    />
    <TestRecoil/>
    <GetUserButton/>
    <GetGroupButton/> 
    {/* <ResetPendingGroupsButton/> */}
    <CreateGroupButton/>
    <GroupApplicationButton/>
    <GroupWithdrawButton/>
    <UpdateUserDescButton/>
    <UpdateUserDiscordIDButton/>
    <UpdateGroupDescButton/>
    <UpdateGroupNameButton/>
    <SetRolesButton/>
    <SetTagsButton/>
    {/* <DenyGroupRequestButton/> 
    <DeleteGroupButton/>
    <SetGroupIDButton/>
    <DeleteActiveMemberButton/>
    <AddGroupMemberButton/>
    <MemberAcceptedButton/> */}
=======
    <div className="app_container">
      <Section_Navbar />
      <MainSection />
      <FAQOnwards />
>>>>>>> 7b62b0a0bef4ffe3f993632cbd67c20d482d1474
    </div>
  );
}

export default function App() {
  // Used to remove cookies 
  useEffect(() => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}
