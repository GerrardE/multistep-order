import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IDropdownProps {
    config: {
        dropdownClassName?: string,
        dropdownRef?: UseFormRegisterReturn,
        dropdownName?: string,
        dropdownDefault?: string | number,
        dropdownValue?: string | number,
        dropdownOnChange?: React.ChangeEventHandler<HTMLSelectElement>,
        dropdownSize?: number,
    },
    children: ReactNode,
}

export default IDropdownProps;
