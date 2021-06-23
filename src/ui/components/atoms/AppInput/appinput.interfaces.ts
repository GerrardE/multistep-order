import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  config: {
    inputType?: string;
    inputClassName?: string;
    inputPlaceholder?: string;
    inputRef: UseFormRegisterReturn,
    inputId?: string;
    inputName?: string;
    inputReadOnly?: boolean;
    inputDefaultValue?: string | number;
    inputChecked?: boolean,
    inputOnChange?: React.ChangeEventHandler<HTMLInputElement>;
  };
}

export default IProps;
