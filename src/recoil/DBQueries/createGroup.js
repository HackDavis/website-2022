import { doc, getDoc, setDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

export async function createGroup(email, user_id, newGroupDesc) {
    // first, create a group locally
    var newGroup = {
        contact_email: email,
        description: newGroupDesc,
        group_id: "",
        members: [user_id],
        pending_members: {},
        pending_invitations: [],
        tags1: [],
        tags2: [],
    };

    // add this group to the firebase
    const docRef = await addDoc(collection(dbConfig, "2022-groups"), newGroup);
    try {
        await updateDoc(docRef, {
            group_id: docRef.id
        })
    } catch(e) {
        console.log(`error adding group in createGroup: ${e}`);
    }

    // update the current user's group on firebase
    const docRef2 = doc(dbConfig, "2022-users", user_id);
    try {
        await updateDoc(docRef2, {
            group_id: docRef.id,
            pending_groups: [],
        });
    } catch(e) {
        console.log(`error updating user in createGroup: ${e}`);
    }

    newGroup.group_id = docRef.id;

    return newGroup;
}
