import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import articleReducer from "../features/article/articleSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
  },
});

export default store;
