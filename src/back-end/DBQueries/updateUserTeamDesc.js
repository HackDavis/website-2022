import {doc, setDoc, updateDoc} from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";
import {getGroup} from "./getGroup";
import { getUser } from "./getUser.js";

// Purpose: Add a new member to the group 
// How it works: Query the database for the specific group and append the user's information to the member field map
// Input: userID (string), userName (string), userEmail(string), and groupID(string)
// Expected Results: The new user will be added to the group's member field if there is less than 4 members

export async function updateUserTeamDesc(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        let groupData = await getGroup(group_id);
        let userData = await getUser(user_id);
        // Check if we can still add more members to the group and that the user being added exists
        groupData.members[user_id] = [userData.name, userData.email, userData.discord_id, userData.description, userData.profile_picture];
        await updateDoc(docRef, {
          members: groupData.members
        });
        return groupData;
    } catch (e) {
        console.error ("error updatting group's member field", e);
    }
}

