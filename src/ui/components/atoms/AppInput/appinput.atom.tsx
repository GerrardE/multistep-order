import React from "react";
import { InputGroup, InputGroupAddon } from "reactstrap";
import { Input, InputGroupText } from "./appinput.styles";
import IProps from "./appinput.interfaces";

const AppInput: React.FunctionComponent<IProps> = ({ config }) => {
  const {
    inputFieldType,
    inputType,
    inputClassName,
    inputPlaceholder,
    inputRef,
    inputId,
    inputName,
    inputReadOnly,
    inputDefaultValue,
    inputGroup,
    inputGroupIcon,
    inputOnChange,
    inputChecked,
  } = config;

  if (inputFieldType === "textarea") {
    return (
      <textarea
        className={inputClassName}
        placeholder={inputPlaceholder}
        {...inputRef}
        id={inputId}
        name={inputName}
        readOnly={inputReadOnly}
        defaultValue={inputDefaultValue}
      />
    );
  }

  if (inputGroup) {
    return (
      <InputGroup>
        <Input
          type={inputType}
          className={inputClassName}
          placeholder={inputPlaceholder}
          {...inputRef}
          id={inputId}
          name={inputName}
          onChange={inputOnChange}
          readOnly={inputReadOnly}
          defaultValue={inputDefaultValue}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>{inputGroupIcon}</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
  }

  return (
    <Input
      type={inputType}
      className={inputClassName}
      placeholder={inputPlaceholder}
      {...inputRef}
      id={inputId}
      name={inputName}
      readOnly={inputReadOnly}
      onChange={inputOnChange}
      defaultValue={inputDefaultValue}
      defaultChecked={inputChecked}
    />
  );
};

export default AppInput;
