import {useRecoilValue} from 'recoil';
import React from "react";
import { userStateAtom } from "../atoms/userAtom.js";
import {resetPendingGroups} from '../DBQueries/resetPendingGroups';

export function ResetPendingGroupsButton() {
    const user = useRecoilValue(userStateAtom);
    // Calls the query function and updates the recoil state 
    async function resetPendingGroupsClick() {
        await resetPendingGroups(user.user_id);
    }
    return (
        <div>
            <button onClick={resetPendingGroupsClick}> resetPendingGroups Button</button>
        </div>
    );
}

