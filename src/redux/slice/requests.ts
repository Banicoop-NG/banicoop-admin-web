import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "allRequestSlice",
  initialState: {
    allUsers: [],
  },
  reducers: {
    handleFetchAllUsers: function (state, action) {
      state.allUsers = action.payload;
    },
  },
});

const apiRequestReducer = requestSlice.reducer;
export const { handleFetchAllUsers } = requestSlice.actions;
export default apiRequestReducer;
