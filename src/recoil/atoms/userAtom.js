import { atom } from 'recoil';

// Atoms are used to store the entire user data
export const userStateAtom = atom({
    key: 'userStateAtom',
    default: ''
});

