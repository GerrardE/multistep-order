import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  config: {
    inputFieldType?: string;
    inputType?: string;
    inputClassName?: string;
    inputPlaceholder?: string;
    inputRef: UseFormRegisterReturn,
    inputId?: string;
    inputName?: string;
    inputReadOnly?: boolean;
    inputDefaultValue?: string | number;
    inputGroup?: string;
    inputGroupIcon?: React.ReactElement;
    inputChecked?: boolean,
    inputOnChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  };
}

export default IProps;
