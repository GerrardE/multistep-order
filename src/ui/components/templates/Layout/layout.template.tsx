import React from "react";
import LayoutContainer from "./layout.styles";
import IProps from "./layout.interfaces";

const LayoutTemplate: React.FunctionComponent<IProps> = ({ children }) => <LayoutContainer fluid>{children}</LayoutContainer>;

export default LayoutTemplate;
