import { useRecoilState} from 'recoil';

import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../db/db.js";
import { userStateAtom } from "./atoms/userAtom.js";

export function GetUserButton() {
  // TODO: The recoil state will be moved back into the getUser function after testing is done
	const [user, setUser] = useRecoilState(userStateAtom);  
	
	async function getUser() {
				// TODO: hardcoded ID will be replaced with the UID of the logged in user
        const docRef = doc(db, "2022-users", "3KaiyNl4pUuV2UEDTlt1");
        const docSnap =  await getDoc(docRef);
        if (docSnap.exists()) {
            setUser(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    return (
        <div>
            <button onClick={getUser}> getUser Button</button>
            {user ? <h1>{user.name}</h1> : <h1>user does not exist</h1>}
        </div>
    );
}

export default GetUserButton;
