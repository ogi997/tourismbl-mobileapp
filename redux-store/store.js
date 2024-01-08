import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import choiceReducer from "./choiceSlice";
import adminUserReducer from "./adminUserSlice";
import locationsReducer from "./locationsSlice";
import adminLocationReducer from "./adminLocationSlice";
import locationUpdateRequestReducer from "./locationUpdateRequestSlice";
import adminLocationUpdateReducer from "./adminLocationUpdateSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    choices: choiceReducer,
    adminUser: adminUserReducer,
    locations: locationsReducer,
    adminLocation: adminLocationReducer,
    locationUpdateRequest: locationUpdateRequestReducer,
    adminLocationUpdate: adminLocationUpdateReducer,
  },
});
