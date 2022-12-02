// pagination
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const api = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://34.245.213.76:3000/",
//     prepareHeaders: (headers, { getState }) => {
//       const token = localStorage.getItem("accessToken");
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     listPosts: builder.query({
//       query: (page = 1) => `articles?page=${page}`,
//     }),
//   }),
// });

// export const { useListPostsQuery } = api;

// export const page = 1;
