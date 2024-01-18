import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'users',
  initialState: {
    userInfo: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, logout } = UserSlice.actions;

export default UserSlice.reducer;
