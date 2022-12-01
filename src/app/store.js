import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import themeReducer from "../features/theme/themeSlice";
import articleReducer from "../features/article/articleSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
    theme: themeReducer,
  },
});

export default store;
