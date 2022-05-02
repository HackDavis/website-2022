import { userStateAtom } from "../atoms/userAtom.js";
import { selector } from 'recoil';

export const SetUserDiscordID = selector({
    key:"SetUserDiscordID",
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, new_discord_id) => { 
        let userStateCopy = {...get(userStateAtom)};
        userStateCopy.discord_id = new_discord_id; 
        set(userStateAtom, userStateCopy);
    }
});