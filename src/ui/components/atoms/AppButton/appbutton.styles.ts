import styled from "styled-components";
import { Button as Btn } from "reactstrap";
import appColors from "../AppColors/appcolors";

const Button = styled(Btn).attrs(props => ({
  className: props.className,
}))`
    &.white {
        border: 1px solid ${appColors.darkslategray};
        background: ${appColors.snow};
        color: ${appColors.darkslateblue};
    };
    
    &.primary {
        background: ${appColors.darkslategray};
        color: ${appColors.white};
    };
    
    &:active {
      color: ${appColors.darkslateblue} !important;
      box-shadow: 0 0 0 0 ${appColors.white} !important;
      background-color: ${appColors.white} !important;
    }
    
    &:focus {
      box-shadow: 0 0 0 0 ${appColors.white};
    }
    
    border-color: ${appColors.white};
    width: 100px;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: ${appColors.darkslateblue};
    background-color: ${appColors.white};
    height: 50px;
    border-radius: 6px;
`;

export default Button;
