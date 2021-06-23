import styled from "styled-components";
import appColors from "../AppColors/appcolors";

const Input = styled.input.attrs(props => ({
    className: props.className,
}))`
    height: 50px;
    border: 1px solid ${appColors.lightgray};
    box-sizing: border-box;
    border-radius: 6px;
    color: ${appColors.darkslategray};
`;

export { Input };
