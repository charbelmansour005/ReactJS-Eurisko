import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async () => {
    const accessToken = localStorage.getItem("userToken");
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    // const page = useSelector((state) => state.article.page);
    const response = await axios.get(
      `http://34.245.213.76:3000/articles?page=1`,
      config
    );
    return response.data.response.docs;
  }
);
