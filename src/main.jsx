import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";

// add request interceptor

axios.interceptors.response.use((response) => {
  return response;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
