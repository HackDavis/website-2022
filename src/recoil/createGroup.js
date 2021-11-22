import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';

import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./db.js";
import { userStateAtom } from "./atoms/userAtom.js";
import { groupStateAtom } from "./atoms/groupAtom";
import { SetUserGroup } from "./selectors/selectors.js"; 

function CreateGroupButton({}) {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setUserGroup = useSetRecoilState(SetUserGroup);

    const newGroupID = "newgrouptest";

    async function createGroup() {
        // first, create a group locally
        // and update the group atom

        // get the current group from firebase just as a template
        const docRef = doc(db, "2022-groups", "C5VaLwp0TjZCj2erPcaF");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // actually create a new group now
            var newGroup = docSnap.data();
            newGroup.contact_email = user.email;
            newGroup.description = "New Group!";
            newGroup.group_id = newGroupID;
            newGroup.members.some_users_uuid[0] = user.user_id;
            newGroup.pending_members = [];
            setGroup(newGroup);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

        // add this group to the firebase
        await setDoc(doc(db, "2022-groups", newGroupID), {
            contact_email: user.email,
            description: "New Group!",
            group_id: newGroupID,
            max_members: 4,
            members: [user.user_id],
            pending_members: [],
            tags1: [],
            tags2: [],
        });

        // update the current user's group
        const docRef2 = doc(db, "2022-users", user.user_id);
        await updateDoc(docRef2, {
            group_id: newGroupID
        });
        // setRSVP for front-end Recoil atom
        setUserGroup(group.group_id); 
    }
    
    return (
        <div>
            <button onClick={createGroup}>createGroup</button>
            {user ? <h1>{user.group_id}</h1> : <h1> user group not set</h1>}
        </div>
    );
}

export default CreateGroupButton; 