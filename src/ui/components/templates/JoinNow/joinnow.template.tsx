import React from "react";
import Join from "./joinnow.styles";
import IProps from "./joinnow.interfaces";

const JoinNow: React.FunctionComponent<IProps> = ({ children }) => <Join fluid>{children}</Join>;

export default JoinNow;
