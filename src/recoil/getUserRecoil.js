import React, { useState, useEffect } from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, selectorFamily } from 'recoil';

import { doc, getDoc } from "firebase/firestore";
import { db } from "./db.js";

// export const firestoreState = atom({
//     key: "firestore",
//     default: firebase.app().firestore(),
// });

// export const firestoreStorageState = atom({
//     key: "firestoreStorage",
//     default: firebase.storage(),
// });

// export const allUserState = selector({
//     key: "allUserState",
//     get: async ({ get }) => {
//         const firestore = get(firestoreState);
//         const users = await firestore.collection("2022-users").get();
//         const allUsers = [...users.docs].map((doc) => {
//             const userData = doc.data();
//             return {
//                 name: userData.name,
//                 email: userData.email,
//             }
//         });
//         return allUsers;
//     }
// });

const userStateAtom = atom({
    key: 'userStateAtom',
    default: ''
});

const userStateSelector = selector({
    key: "userStateSelector",
    // user_id hardcoded in
    get: async ({ get }) => {
        const docRef = doc(db, "2022-users", "3KaiyNl4pUuV2UEDTlt1");
        const docSnap =  getDoc(docRef);
        let userData = docSnap.data();
        userData.user_id = docRef.id;
        return JSON.stringify(userData)
    }
});

function GetUserRecoil() {
    const user = useRecoilValue(userStateSelector);
    return <>User Name: {user}</>;
}

function PrintUserRecoil() {
    return (
        <div>
            <p>This is where the user *should* be lol</p>
            <GetUserRecoil />
        </div>
    );
}

export default PrintUserRecoil;
// const userState = atom({
//     key: 'userState',
//     default: ''
// });

// export default function getUserRecoil(user_id) {
//     console.log(user_id);
//     const docRef = doc(db, "2022-users", user_id);
//     const docSnap = getDoc(docRef);
//     const [user, setUser] = useRecoilState(userState);

//     if (docSnap.exists()) {
//         let userData = docSnap.data();
//         userData.user_id = docRef.id;
//         console.log("userData from getUser function:", JSON.stringify(userData));
//         // setUser(JSON.stringify(userData));
//         // return useRecoilValue(userStateSelector);
//     } else {
//         console.log("No such document!");
//     }
// }

// const userStateSelector = selector({
//     key: 'userState', // unique ID (with respect to other atoms/selectors)
//     get: ({get}) => {
//       const user = get(userState);
//       return user;
//     },
// });
