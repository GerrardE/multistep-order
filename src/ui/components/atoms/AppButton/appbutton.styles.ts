import styled from "styled-components";
import { Button as Btn } from "reactstrap";

const Button = styled(Btn).attrs(props => ({
  className: props.className,
}))`
    &.btn-secondary {
        background: #FFCD00;
        width: 100%
    }

    &.btn-primary {
        background: #4D5667;
        width: 100%;
        font-size: 14px;
        line-height: 17px;
    }

    font-size: 18px;
    line-height: 30px;
    color: #FFFFFF;
    height: 50px;
    border-radius: 6px;
`;

export default Button;
