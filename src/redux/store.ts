import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import countReder from "./slice/totalCountSlice";
import apiRequestReducer from "./slice/requests";

const rootReducer = combineReducers({
  auth: authReducer,
  getTotalItems: countReder,
  requestActions: apiRequestReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export { store };
