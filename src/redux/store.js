import {configureStore} from '@reduxjs/toolkit';
import userSlice from './state-slices/userSlice';

export default configureStore({
    reducer: {
        user: userSlice,
    }
});

