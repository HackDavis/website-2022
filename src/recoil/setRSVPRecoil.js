import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../db/db.js";
import { userStateAtom } from "./atoms/userAtom.js";
import { SetRSVPState } from "./selectors/selectors.js"; 

function SetRSVPButton({response}) {
    // TODO: Recoil states will be moved into the async function when testing is done
    const user = useRecoilValue(userStateAtom);
    const setRSVPStatus = useSetRecoilState(SetRSVPState); 

    async function setRSVP() {
        // setRSVP on Firebase end
        const docRef = doc(db, "2022-users", user.user_id);
        await updateDoc(docRef, {
            rsvp_status: response
        });
        // setRSVP for front-end Recoil atom
        setRSVPStatus(response); 
    }
    
    return (
        <div>
            <button onClick={setRSVP}>setRSVP</button>
            {user ? <h1>{user.rsvp_status}</h1> : <h1> user not set</h1>}
        </div>
    );
}

export default SetRSVPButton; 