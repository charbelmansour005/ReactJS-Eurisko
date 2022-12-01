import React, { FC, Fragment, ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import Dashboard from "../screens/Dashboard";

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
