import styled from "styled-components";
import { Container } from "reactstrap";
import appColors from "../../atoms/AppColors/appcolors";

const LayoutContainer = styled(Container)`
    background: ${appColors.snow};
    padding-left: 0;
    padding-right: 0;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
`;

export default LayoutContainer;
