import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Set token to axios header
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// Unset token from axios header
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}


// Register
export const register = createAsyncThunk(
  'auth/register',
    async (credentials, thunkAPI) => {
      try {
          const response = await axios.post('/users/signup', credentials);
          setAuthHeader(response.data.token)
          return response.data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        
      }
  }
); 


// Login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {}
);

// LogOut
export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {}
);


// Refresh
export const refresh = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {}
);
