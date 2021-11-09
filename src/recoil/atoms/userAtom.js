import { atom } from 'recoil';

// Atoms are used to store the entire user data
// We'll use Selectors (should be placed in a different file) to grab specific fields later on (ie. email)
// How to Use Selectors: https://recoiljs.org/docs/introduction/getting-started
export const userStateAtom = atom({
    key: 'userStateAtom',
    default: ''
});

