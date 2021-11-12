import React, { useState, useEffect } from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, selectorFamily } from 'recoil';

import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "./db.js";
import { userStateAtom } from "./atoms/userAtom.js";

async function setRSVP(user_id, response) {
    const [user, setUser] = useRecoilState(userStateAtom);
    const docRef = doc(db, "2022-users", user_id);
    user.rsvp_status = response;
    await updateDoc(docRef, {
        rsvp_status: response
    });
}

export default setRSVP;