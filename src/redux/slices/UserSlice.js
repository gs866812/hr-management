import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
};

const userSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      state.userList.push(action.payload);
    },
  },
});

export const { loggedInUser } = userSlice.actions;
export default userSlice.reducer;