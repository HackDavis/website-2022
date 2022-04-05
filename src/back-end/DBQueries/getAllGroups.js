import { dbConfig } from "../db/dbConfig.js";
import { collection, getDocs } from "firebase/firestore";

// Purpose: get all hackdavis groups to display on the teamfinder page. 
// How it works: get all documents and adds them to allGroups if they have < 4 members
// Input: none 
// Expected result: an array of all the groups

export async function getAllGroups() {
    const querySnapshot = await getDocs(collection(dbConfig, "2022-groups"));
    let allGroups = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        if(doc.data().members?.length < 4) {
          allGroups.push(doc.data());
        }
    });
    return allGroups;
}




