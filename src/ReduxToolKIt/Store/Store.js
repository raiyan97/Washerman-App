import { configureStore } from '@reduxjs/toolkit';
import LoginSliceReducer from "../Slices/LoginProfileSlice"
import RegisterSliceReducer from "../Slices/RegisterSlice"
export const store = configureStore({
    reducer: {
        LoginSliceStore: LoginSliceReducer,
        RegisterSliceStore : RegisterSliceReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});