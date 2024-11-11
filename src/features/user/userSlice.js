import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser(state, action) {
      state.userName = action.payload;
    },
  },
});

// console.log(userSlice);

export default userSlice.reducer;
export const { createUser } = userSlice.actions;

export const userNameSelector = (state) => state.user.userName;
