import {doc, updateDoc} from "firebase/firestore";
import { dbConfig } from "../db/dbConfig.js";
import {getGroup} from "./getGroup";
import { getUser } from "./getUser.js";
// Purpose: Add a new member to the group 
// How it works: Query the database for the specific group and append the user's information to the member field map
// Input: userID (string), userName (string), userEmail(string), and groupID(string)
// Expected Results: The new user will be added to the group's member field if there is less than 4 members

export async function addGroupMember(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        let groupData = await getGroup(group_id);
        let userData = await getUser(user_id);
        // Check if we can still add more members to the group and that the user being added exists
        if (Object.keys(groupData.members).length < 4 && userData) {
            let members_map_copy = new Map();
            members_map_copy = groupData.members;
            members_map_copy[user_id] = [userData.name, userData.email, userData.discord_id, userData.description, userData.profile_picture];

            await updateDoc(docRef, {
                members: members_map_copy
            });
            console.log("new member added");
            return members_map_copy;
        } else {
            console.log("can't add members because the max limit has been reached or the user being added does not exist");
            return "error";
        }
    } catch (e) {
        console.log ("error updatting group's member field", e);
    }
}

