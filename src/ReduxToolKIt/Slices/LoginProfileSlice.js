import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIS } from '../../APIS/APIS';

const initialState = {
  success: null,
  message: '',
  userData: [],
  isLoading: false,
};

export const LoginAction = createAsyncThunk('Login', async values => {
  return axios
    .post(`${APIS.LoginAPI}`, values, {})
    .then(response => response.data);
});

const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  extraReducers: builder => {
    builder.addCase(LoginAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(LoginAction.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(LoginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.userData = action.payload.data;
    });
  },
});

export const {} = LoginSlice.actions;

export default LoginSlice.reducer;
