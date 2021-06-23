import styled from "styled-components";
import appColors from "../AppColors/appcolors";

const Select = styled.select.attrs((props) => ({
  className: props.className,
}))`
    &.form-control:focus {
    color: none;
    background-color: ${appColors.white};
    border-color: ${appColors.lightgray};
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${appColors.lightgray};
  };

  height: 50px !important;
  border: 1px solid ${appColors.lightgray};
  box-sizing: border-box;
  border-radius: 6px;
`;

export default Select;
