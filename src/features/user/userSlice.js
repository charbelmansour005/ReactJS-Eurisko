import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./userActions";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // delete token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // login user - pending
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    // login user - success
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.userToken = action.payload.accessToken;
    });
    // login user - failed req
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
