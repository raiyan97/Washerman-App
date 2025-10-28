import { configureStore } from '@reduxjs/toolkit';
import LoginSliceReducer from "../Slices/LoginProfileSlice"
import RegisterSliceReducer from "../Slices/RegisterSlice"
import HomeSliceReducer from "../Slices/HomeSlice"
export const store = configureStore({
    reducer: {
        LoginSliceStore: LoginSliceReducer,
        RegisterSliceStore : RegisterSliceReducer,
        HomeSliceStore : HomeSliceReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});