import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./articleActions";

const initialState = {
  loading: false,
  articles: [],
  filteredArticles: [],
  error: "",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    searchByContent: (state, action) => {
      const filteredArticles = state.filteredArticles.filter((article) =>
        article.abstract.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredArticles:
          action.payload.length > 0 ? filteredArticles : [...state.articles],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
      state.filteredArticles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.loading = false;
      state.articles = [];
      state.filteredArticles = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const { searchByContent } = articleSlice.actions;

export default articleSlice.reducer;
