import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIS } from '../../APIS/APIS';


const initialState = {
  success: null,
  message: '',
  userData: [],
  isLoading: false,
};

export const RegisterAction = createAsyncThunk('Register', async values => {
  return axios
    .post(`${APIS.RegisterAPI}`, values, {})
    .then(response => response.data);
});

const RegisterSlice = createSlice({
  name: 'Register',
  initialState,
  extraReducers: builder => {
    builder.addCase(RegisterAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(RegisterAction.rejected, state => {
      state.isLoading = false;
    });

    builder.addCase(RegisterAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.userData = action.payload.data;
    });
  },
});

export const {} = RegisterSlice.actions;

export default RegisterSlice.reducer;
