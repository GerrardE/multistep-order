import React from "react";
import { Input } from "./appinput.styles";
import IProps from "./appinput.interfaces";

const AppInput: React.FunctionComponent<IProps> = ({ config }) => {
  const {
    inputType,
    inputClassName,
    inputPlaceholder,
    inputRef,
    inputId,
    inputName,
    inputDefaultValue,
    inputOnChange,
    inputChecked,
  } = config;

  return (
    <Input
      type={inputType}
      className={inputClassName}
      placeholder={inputPlaceholder}
      {...inputRef}
      id={inputId}
      name={inputName}
      onChange={inputOnChange}
      defaultValue={inputDefaultValue}
      defaultChecked={inputChecked}
    />
  );
};

export default AppInput;
