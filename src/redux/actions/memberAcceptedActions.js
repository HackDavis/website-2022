import { MEMBER_ACCEPT } from "./types";
import { db } from "../db";
import { findGroupById } from "./findGroupById";

export function memberAccepted(user_id, name, email) { 
    return function (dispatch, getState) {
        // let { group_id } = getState().userData; 
        let group_id = "C5VaLwp0TjZCj2erPcaF"; 

        // TODO: if the user has a non-empty string for their group_id, return now 

        // Set Group ID
        setGroupId(user_id, group_id);
        addGroupMember(user_id, name, email, group_id);
    };
}; 

function setGroupId(user_id, group_id) { 
    console.log("hit user id on line 16", user_id);
    // gets user that will have their group ID changed
    var docRef = db.collection("2022-users").doc(user_id);
    docRef.update({group_id: group_id})
    .then(() => { 
        console.log("group id set");
    })
    .catch((error) => { 
        console.log("ERROR setting group id:", error);
    });
};

async function addGroupMember(user_id, name, email, group_id) {
    // look up current group by id 
    let groupData = findGroupById(group_id); 
    console.log("received groupData in addGroupMember function:", groupData);

    // alter the group's array 
    // let members = groupData.members;
    // if (members.length >= groupData.max_members) return;
    // // note: may need to add check where group member can get re-added to the same group, maybe with .has ?
    // members.set(user_id, [name, email, false]);

    // update the current group's document 
};