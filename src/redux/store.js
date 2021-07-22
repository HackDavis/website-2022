import {configureStore} from '@reduxjs/toolkit';
import userSlice from './state-slices/userSlice';
import databaseSlice from "./state-slices/databaseSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        db: databaseSlice,
    }
});

