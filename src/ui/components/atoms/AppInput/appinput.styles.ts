import styled from "styled-components";
import { InputGroupText as InpGrpTxt } from "reactstrap";
import appColors from "../AppColors/appcolors";

const Input = styled.input.attrs(props => ({
    className: props.className,
}))`
    height: 50px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 6px;
    color: ${appColors.darkslategray};
`;

const InputGroupText = styled(InpGrpTxt)`
    background: #FFFFFF;
    border-left: 0;
`;

export { Input, InputGroupText };
