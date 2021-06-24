import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IDropdownProps {
    config: {
        dropdownClassName?: string,
        dropdownRef?: UseFormRegisterReturn,
        dropdownDefault?: string | number,
        dropdownValue?: string | number,
        dropdownOnChange?: React.ChangeEventHandler<HTMLSelectElement>,
    },
    children: ReactNode,
}

export default IDropdownProps;
