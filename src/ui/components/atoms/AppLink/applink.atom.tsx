import React from "react";
import IProps from "./applink.interfaces";

const AppLink: React.FunctionComponent<IProps> = ({ config }) => {
  const { linkHref, linkText } = config;

  return (
    <a href={linkHref}>{linkText}</a>
  );
};

export default AppLink;
