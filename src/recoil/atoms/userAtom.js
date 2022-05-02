import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
// Atoms are used to store the entire user data
export const userStateAtom = atom({
    key: 'userStateAtom',
    default: '',
    effects_UNSTABLE: [persistAtom]
});

