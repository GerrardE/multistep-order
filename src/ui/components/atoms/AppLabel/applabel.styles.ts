import styled from "styled-components";
import { Label as Lbl } from "reactstrap";
import appColors from "../AppColors/appcolors";

const Label = styled(Lbl)`
    font-style: normal;
    font-size: 14px;
    line-height: 15px;
    color: ${appColors.darkslateblue};
`;

export default Label;
