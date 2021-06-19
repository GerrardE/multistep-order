import React from "react";
import IProps from "./invalidfeedback.interface";

const AppErrorMessage: React.FunctionComponent<IProps> = ({ config }) => {
  const { message } = config;

  return <div className="invalid-feedback">{message}</div>;
};

export default AppErrorMessage;
