import IDropdownProps from "./appdropdown.interfaces";
import Select from "./appdropdown.styles";

const AppDropdown: React.FunctionComponent<IDropdownProps> = ({ config, children }) => {
    let {
        dropdownClassName,
        dropdownRef,
        dropdownName,
        dropdownOnChange,
        dropdownDefault,
        dropdownValue,
        dropdownSize,
    } = config;

    return (
        <Select
            className={`form-control custom-select ${dropdownClassName}`}
            {...dropdownRef}
            name={dropdownName}
            size={dropdownSize}
            value={dropdownValue}
            defaultValue={dropdownDefault}
            onChange={dropdownOnChange}
        >
            {
                children
            }
        </Select>
    )
}

export default AppDropdown;
