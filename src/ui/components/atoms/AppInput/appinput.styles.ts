import styled from "styled-components";
import { InputGroupText as InpGrpTxt } from "reactstrap";

const Input = styled.input.attrs(props => ({
  className: props.className,
}))`
    &.br-0{
        border-right: 0;
    }

    height: 50px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 6px;
`;

const InputGroupText = styled(InpGrpTxt)`
    background: #FFFFFF;
    border-left: 0;
`;

export { Input, InputGroupText };
