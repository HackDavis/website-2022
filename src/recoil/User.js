import React, { useState, useEffect } from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, selectorFamily } from 'recoil';

import { doc, getDoc } from "firebase/firestore";
import { db } from "./db.js";
import { userStateAtom } from "./atoms/userAtom.js";

function User() {
    const [user, setUser] = useRecoilState(userStateAtom);
    async function SetUserState() {
        const docRef = doc(db, "2022-users", "3KaiyNl4pUuV2UEDTlt1");
        const docSnap =  await getDoc(docRef);
        if (docSnap.exists()) {
            // setUser(JSON.stringify(docSnap.data()));
            setUser(docSnap.data());
            console.log("User: ", user);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    return (
        <div>
            <button onClick={SetUserState}>Change User</button>
            {user ? <h1>{user.email}</h1> : <h1> user not set</h1>}
        </div>
    );
}

export default User;
