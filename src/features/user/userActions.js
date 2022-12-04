// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { SIGN_IN_URL } from "../../helpers/url";

// export const userLogin = createAsyncThunk(
//   "user/login",
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       // configure header's Content-Type as JSON
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const { data } = await axios.post(
//         `${SIGN_IN_URL}`,
//         { username, password },
//         config
//       );

//       // store user's token in local storage
//       localStorage.setItem("userToken", data.accessToken);
//       // console.log(data.accessToken);

//       return data;
//     } catch (error) {
//       // return custom error message from API if any
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGN_IN_URL } from "../../helpers/url";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${SIGN_IN_URL}`,
        { username, password },
        config
      );

      // store user's token in local storage
      localStorage.setItem("userToken", data.accessToken);
      // console.log(data.accessToken);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
