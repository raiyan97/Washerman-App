import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {APIS} from "../../APIS/APIS"


const initialState = {
    success: null,
    message: '',
    userData: [],
    isLoading: false,
};


export const HomeAction = createAsyncThunk('Home',async values => {
    return axios 
    .post(`${APIS.HomeAPI}`,values, {})
    .then(response => response.data);
});

const RegisterSlice = createSlice({
    name:"Home",
    initialState,
    extraReducers: builder => {
        builder.addCase(HomeAction.pending, state => {
         state.isLoading = true;
        });
        builder.addCase(HomeAction.rejected, state => {
            state.isLoading = false;
        });

        builder.addCase(HomeAction.fulfilled, (state,action) => {
           state.isLoading = false;
            state.isLoading = action.payload.success;
            state.isLoading = action.payload.message;
            state.isLoading = action.payload.data;
        });
    },
});

export const {} = HomeSlice.actions;

export default HomeSlice.reducer;