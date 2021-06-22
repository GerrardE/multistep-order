import React from "react";
import IErrorMessageProps from "./invalidfeedback.interface";
import Div from "./invalidfeedback.styles";

const AppErrorMessage: React.FunctionComponent<IErrorMessageProps> = ({ config }) => {
  const { message } = config;

  return <Div className="invalid-feedback">{message}</Div>;
};

export default AppErrorMessage;
