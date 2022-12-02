import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/url";

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async () => {
    const response = await axios.get(`${BASE_URL}/articles?page=1`);
    return response.data.response.docs;
  }
);
