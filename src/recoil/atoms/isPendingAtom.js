import { atom } from 'recoil';

export const isPendingAtom = atom({
    key: 'isPendingAtom',
    default: false
});