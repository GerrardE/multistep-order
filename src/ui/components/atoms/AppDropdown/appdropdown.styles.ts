import styled from "styled-components";

const Select = styled.select.attrs((props) => ({
  className: props.className,
}))`
    &.form-control:focus {
    color: none;
    background-color: #fff;
    border-color: #dddddd;
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: #dadada;
  };

  height: 50px !important;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 6px;
`;

export default Select;
