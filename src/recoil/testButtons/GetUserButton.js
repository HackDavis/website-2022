import { useRecoilState} from 'recoil';

import React from "react";
import { userStateAtom } from "../atoms/userAtom.js";
import {getUser} from '../DBQueries/getUser.js';

export function GetUserButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    // Calls the query function and updates the recoil state 
    async function setUserState () {
        // user hardcoded for testing
        const userData = await getUser("Sboor4BfCHXztpYs7RnNqHi7Yz33");
        setUser(userData);
        console.log(userData);
    }
    return (
        <div>
            <button onClick={setUserState}> getUser Button</button>
            {user ? <h1>{user.name}</h1> : <h1>user does not exist</h1>}
        </div>
    );
}
