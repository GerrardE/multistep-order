import React from "react";
// import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

interface IProps {
  path: string,
  component: React.FunctionComponent,
  protected: boolean,
}

const ProtectedRoute: React.FunctionComponent<IProps> = ({ path, component }) => {
  const Component = component;
  const isAuthenticated: boolean = true;

  return isAuthenticated ? (
    <Route exact path={path} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
