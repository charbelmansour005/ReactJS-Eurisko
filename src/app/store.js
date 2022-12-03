import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import themeReducer from "../features/theme/themeSlice";
import articleReducer from "../features/article/articleSlice";
import tooltipReducer from "../features/tooltip/tooltipSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
    theme: themeReducer,
    tooltip: tooltipReducer,
  },
});

export default store;
