import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log("hi" + action.payload);
      // state.pop(action.payload);
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      // return [];
      // state.splice(action.payload, state.length);
      state.splice(0);
    },
  },
});

// console.log(userSlice.actions);

export default userSlice.reducer;

export const { addUser, removeUser, deleteUsers } = userSlice.actions;
