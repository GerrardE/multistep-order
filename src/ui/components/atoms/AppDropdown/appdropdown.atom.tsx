import IDropdownProps from "./appdropdown.interfaces";
import Select from "./appdropdown.styles";

const AppDropdown: React.FunctionComponent<IDropdownProps> = ({ config, children }) => {
    let {
        dropdownClassName,
        dropdownRef,
        dropdownOnChange,
        dropdownDefault,
        dropdownValue,
    } = config;

    return (
        <Select
            className={`form-control custom-select ${dropdownClassName}`}
            {...dropdownRef}
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
