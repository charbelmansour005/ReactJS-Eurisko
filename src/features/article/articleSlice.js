import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./articleActions";

const initialState = {
  loading: false,
  articles: [],
  filteredArticles: [],
  error: "",
  page: 1,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    // filter articles by headline
    searchByContent: (state, action) => {
      const filteredArticles = state.filteredArticles.filter((article) =>
        article.headline.main
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredArticles:
          // replace filteredArticles with articles if no search input
          action.payload.length > 0 ? filteredArticles : [...state.articles],
      };
    },
    // fetch next page
    incrementPage: (state) => {
      state.page++;
    },
    // fetch prev page
    decrementPage: (state) => {
      state.page--;
    },
  },
  extraReducers: (builder) => {
    // article fetch loading
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
    });
    // article fetch succeed
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
      state.filteredArticles = action.payload;
      state.error = "";
    });
    // article fetch fail
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.loading = false;
      state.articles = [];
      state.filteredArticles = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const { searchByContent, incrementPage, decrementPage } =
  articleSlice.actions;

export default articleSlice.reducer;
