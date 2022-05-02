import { atom } from 'recoil';

export const isPendingRequestsAtom = atom({
    key: 'isPendingRequestsAtom',
    default: false
});