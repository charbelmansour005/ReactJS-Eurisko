import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/url";
// import { useSelector } from "react-redux";

// export const fetchArticles = createAsyncThunk(
//   "article/fetchArticles",
//   async () => {
//     const response = await axios.get(`${BASE_URL}/articles?page=1`);
//     return response.data.response.docs;
//   }
// );

// CONTINUE WORKING ON THIS
export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async (arg, { getState }) => {
    const page = getState().article.page;
    console.log(page);
    // const page = useSelector((state) => state.article.page);
    const response = await axios.get(`${BASE_URL}/articles?page=${page}`);
    return response.data.response.docs;
  }
);
