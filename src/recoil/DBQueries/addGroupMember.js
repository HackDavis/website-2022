import {doc, updateDoc} from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import {getGroup} from "./getGroup";

// Purpose: Add a new member to the group 
// How it works: Query the database for the specific group and append the user's information to the member field map
// Input: userID (string), userName (string), userEmail(string), and groupID(string)
// Expected Results: The new user will be added to the group's member field if there is less than 4 members

export async function addGroupMember(user_id, user_name, user_email, leader_status, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        let groupData = await getGroup(group_id);
        //TODO: Needs to be tested
        // Check if we can still add more members to the group
        if (Object.keys(groupData.members).length < 4) {
            let members_map_copy = new Map();
            members_map_copy = groupData.members;
            members_map_copy[user_id] = [user_name, user_email, leader_status];

            await updateDoc(docRef, {
                members: members_map_copy,
            });

            return members_map_copy;
        } else {
            console.log("can't add more members, max limit reached");
            return groupData.members
        }
    } catch (e) {
        console.log ("error updatting group's member field", e);
    }
}

