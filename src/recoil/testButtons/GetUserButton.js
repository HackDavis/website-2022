import { useRecoilState} from 'recoil';

import React from "react";
import { userStateAtom } from "../atoms/userAtom.js";
import {getUser} from '../DBQueries/getUserRecoil.js';

export function GetUserButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    // Calls the query function and updates the recoil state 
    async function setUserState () {
        const userData = await getUser();
        setUser(userData);
    }
    return (
        <div>
            <button onClick={setUserState}> getUser Button</button>
            {user ? <h1>{user.name}</h1> : <h1>user does not exist</h1>}
        </div>
    );
}

