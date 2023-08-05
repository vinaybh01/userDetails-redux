import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
import SampleSlice from "./slice/SampleSlice";
import GituserSlice from "./slice/GituserSlice";
import { userdeatilsSlice } from "./slice/UserdetailsSlice";
import { customSlice } from "./slice/CustomSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    sample: SampleSlice,
    miniapp: GituserSlice,
    app: userdeatilsSlice,
    custom: customSlice,
  },
});

export default store;
