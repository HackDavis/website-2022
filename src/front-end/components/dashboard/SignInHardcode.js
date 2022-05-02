import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../../back-end/db/dbConfig.js";
import { useRecoilState } from "recoil";
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
import { getUser } from "../../../back-end/DBQueries/getUser";
import styles from "../../css/dashboard/login.module.scss";
import { useCSVReader } from "react-papaparse";
import Papa from "papaparse";
// import applicants from "../../../back-end/db/applicants.csv";
import { useNavigate } from "react-router-dom";

export function SignInHardCode() {
  const [user, setUser] = useRecoilState(userStateAtom);
  const navigate = useNavigate();
  // check the csv data if the applicant email exists
  function checkUserExists(data, user) {
    for(let i = 0; i < data.length; i++) {
      if(data[i][2] === user.email) {
        return true;
      }
    }
    return false;
  }
  // Sign in using Google Login
  // Note: Produces an error when using Safari but works fine on Chrome
  async function handleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await setPersistence(auth, browserSessionPersistence);
    provider.addScope("profile");
    provider.addScope("email");
    const result = await signInWithPopup(auth, provider);

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

        //TODO: Cross check with csv of accepted applicants,
        // if they exist in the csv proceed with creating the user data and all the code below,
        // else don't make a new user and redirect them to the 401 page.

        // parse function from Papaparse library
        Papa.parse(applicants, {
          download: true,
          complete: async function (input) {
            const data = input.data;
            if (checkUserExists(data, user)) {
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
                first_sign_in: true,
                hd_director:
                  user.email.substring(user.email.lastIndexOf("@") + 1) ===
                  "hackdavis.io"
              };
              await setDoc(doc(dbConfig, "2022-users", user.uid), newUserData);
              setUser(newUserData);
              // console.log("created new user");
            } else {
              // user was not found!
              navigate("/401");
            }
          }
        });
      }
    } else {
      console.error("No user found!");
    }
  }

  return (
    <>
      <div className={styles.login} onClick={handleSignIn}>Sign up with Google</div>
    </>
  );
}