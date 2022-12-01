import React, { Fragment } from "react";
import { useRoutes } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Dashboard from "../screens/Dashboard/Dashboard";

export const RoutesAsObj = () => {
  let element = useRoutes([
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/login", element: <LoginScreen /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return <Fragment>{element}</Fragment>;
};

const PageNotFound = () => {
  return <h1>Not found</h1>;
};
