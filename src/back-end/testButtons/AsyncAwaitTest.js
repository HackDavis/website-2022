import { doc, getDoc } from "firebase/firestore";
import { dbConfig } from "../dbConfig.js";

async function AsyncAwaitTest() {
    const docRef = doc(dbConfig, "2022-users", "3KaiyNl4pUuV2UEDTlt1");
    const docSnap =  await getDoc(docRef);
    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.error("No such document!");
    }
}

export default AsyncAwaitTest;