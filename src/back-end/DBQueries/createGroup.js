import { doc, getDoc, setDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";
import { getUser } from "./getUser.js";

export async function createGroup(email, user_id, newGroupDesc, group_name) {
    // note: can just fix frontend to avoid this issue
    if (getUser(user_id).group_id != undefined) {
        // console.log(getUser(user_id).group_id);
        // console.log('error in createGroup: user is already in a group');
        return null;
    }

    // first, create a group locally
    let userData = await getUser(user_id);
    
    let members_map = {
        [user_id]: [userData.name, userData.email, userData.discord_id, userData.description, userData.profile_picture]
    };

    let newGroup = {
        contact_email: email,
        description: newGroupDesc,
        group_id: "",
        group_name: group_name,
        members: members_map,
        pending_members: {},
        pending_invitations: [],
        tags1: [], // Roles needed
        tags2: [] // Technologies needed
    };


    // add this group to the firebase
    const docRef = await addDoc(collection(dbConfig, "2022-groups"), newGroup);
    try {
        await updateDoc(docRef, {
            group_id: docRef.id
        });
    } catch(e) {
        // console.error(`error adding group in createGroup: ${e}`);
    }

    // update the current user's group on firebase
    const docRef2 = doc(dbConfig, "2022-users", user_id);
    try {
        await updateDoc(docRef2, {
            group_id: docRef.id,
            pending_groups: []
        });
    } catch(e) {
        console.error(`error updating user in createGroup: ${e}`);
    }

    newGroup.group_id = docRef.id;

    return newGroup;
}
