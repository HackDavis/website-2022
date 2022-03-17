import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

//Purpose: set this group's roles to the new ones they specified
//How it works: adds the roles tags to the grouip
//Input: group_id, new_roles (array)
//Expected Result: tags1 updated to be new_roles
export async function setTags(group_id, new_tags) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        
        await updateDoc(docRef, {
            tags2: new_tags
        });

    } catch(e) {
        console.log(`error in setTags: ${e}`);
    }

}
