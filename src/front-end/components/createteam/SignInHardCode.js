import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { dbConfig } from "../../../back-end/db/dbConfig.js";
import { useRecoilState } from "recoil";
import { userStateAtom } from "../../../recoil/atoms/userAtom.js";
import { getUser } from "../../../back-end/DBQueries/getUser";

export function SignInHardCode() {
  const [user, setUser] = useRecoilState(userStateAtom);

  // Sign in using Google Login
  // Note: Produces an error when using Safari but works fine on Chrome
  async function handleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
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
            user.email.substring(user.email.lastIndexOf("@") + 1) ===
            "hackdavis.io"
        };

        await setDoc(doc(dbConfig, "2022-users", user.uid), newUserData);
        setUser(newUserData);
        // console.log("created new user");
      }
    } else {
      console.error("No user found!");
    }
  }

  return (
    <>
      <button onClick={handleSignIn}>Click me to sign in with Google</button>
    </>
  );
}
