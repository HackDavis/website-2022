import { atom } from 'recoil';

export const isPendingAtom = atom({
    key: 'editTeamAtom',
    default: false
});