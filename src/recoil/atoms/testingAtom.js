import { atom } from 'recoil';

// Atoms are used to store the entire user data
export const testingAtom = atom({
    key: 'testingAtom',
    default: 0
});
