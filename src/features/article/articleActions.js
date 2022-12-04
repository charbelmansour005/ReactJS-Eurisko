import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async (arg, { getState }) => {
    const page = getState().article.page;
    const response = await axios.get(`/articles?page=${page}`);
    return response.data.response.docs;
  }
);
