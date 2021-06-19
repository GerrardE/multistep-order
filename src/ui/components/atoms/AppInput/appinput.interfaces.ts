interface IProps {
  config: {
    inputFieldType?: string;
    inputType?: string;
    inputClassName?: string;
    inputPlaceholder?: string;
    inputRef?: React.Ref<any>,
    inputId?: string;
    inputName?: string;
    inputReadOnly?: boolean;
    inputDefaultValue?: string;
    inputGroup?: string;
    inputGroupIcon?: React.ReactElement;
    inputOnChange?: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement> | any;
  };
}

export default IProps;
