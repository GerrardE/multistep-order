import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface dropDownItems {
    id: string,
    name: string,
    [key: string]: any
}

interface IDropdownProps {
    config: {
        dropdownClassName?: string,
        dropdownRef?: UseFormRegisterReturn,
        dropdownName?: string,
        dropdownOnChange?: (e: React.ChangeEvent<any>) => void,
        dropdownSize?: number,
    },
    children: ReactNode,
}

export default IDropdownProps;
