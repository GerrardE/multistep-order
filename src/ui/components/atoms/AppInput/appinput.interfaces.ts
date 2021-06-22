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
    inputDefaultValue?: string;
    inputGroup?: string;
    inputGroupIcon?: React.ReactElement;
    inputOnChange?: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>|any;
  };
}

export default IProps;
