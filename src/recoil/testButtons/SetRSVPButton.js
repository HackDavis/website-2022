import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { SetRSVPState } from "../selectors/selectors.js"; 
import {setRSVP} from "../DBQueries/setRSVP";

export function SetRSVPButton({response}) {
    const user = useRecoilValue(userStateAtom);
    const setRSVPStatus = useSetRecoilState(SetRSVPState); 
    
    // Call setRSVP recoil function to return a status back and then update the recoil state with the new status to reflect the latest changes on the front-end
    async function setRSVPClick() {
        const rsvpStatus = await setRSVP(user, response);
        setRSVPStatus(rsvpStatus);
    }
    
    return (
        <div>
            <button onClick={setRSVPClick}>setRSVP</button>
            {user ? <h1>{user.rsvp_status}</h1> : <h1> user not set</h1>}
        </div>
    );
}
