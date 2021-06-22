import IDropdownProps from "./appdropdown.interfaces";
import Select from "./appdropdown.styles";

const AppDropdown: React.FunctionComponent<IDropdownProps> = ({ config, children }) => {
    let {
        dropdownClassName,
        dropdownRef,
        dropdownName,
        dropdownOnChange,
        dropdownSize,
    } = config;

    return (
        <Select
            className={`form-control custom-select ${dropdownClassName}`}
            {...dropdownRef}
            name={dropdownName}
            size={dropdownSize}
            onChange={dropdownOnChange}
        >
            {
                children
            }
        </Select>
    )
}

export default AppDropdown;
