import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice({
  name: 'root',
  initialState: {
    user: {},
    events: [],
    friends: [],
    groups: []
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateEvents: (state, action) => {
      state.events = action.payload;
    },
    updateFriends: (state, action) => {
      state.friends = action.payload 
    },
    updateGroups: (state, action) => {
      state.groups = action.payload;
    }
  }
});

export const { updateUser, updateEvents, updateFriends, updateGroups } = rootSlice.actions;

export default rootSlice.reducer;