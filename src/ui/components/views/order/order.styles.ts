import styled, { css } from "styled-components";
import { Col, Row, Form, Progress as Pg } from "reactstrap";
import appColors from "../../atoms/AppColors/appcolors";
import { size } from "../../atoms/AppScreenSizes/screens.atoms";

const StyledCol = styled(Col)`
    margin: 0;
    padding: 0;

    .text-snow {
        margin: 50% auto 1rem;
        text-align: center;
    }

    &.darkslategray {
        background: ${appColors.darkslategray};
    };
    
    ${css`
      @media (max-width: ${size.mobileM}) {
        &.darkslategray {
            height: 20%;
        }; 
        
        &.snow {
            height: 100%;
        };
      };
    `};
`;

const StyledForm = styled(Form)`
    margin: 10% auto;
    padding: 0 20%;

    .form-group {
        margin: 0.5rem 0;
        padding: 0;
    }

    .acceptedterms {
        height: auto;
        margin: 1rem 0.5rem 0 0;
    }

    ${css`
      @media (max-width: ${size.mobileM}) {
        padding: 0 10%;
      };
    `};
`;

const StyledRow = styled(Row)`
    margin: 0;
    padding: 0;
    height: 100%;

    &.justify {
        justify-content: space-between;
    }
`;

const Progress = styled(Pg).attrs((props) => ({
    className: props.className,
}))`
    width: 70%;
    margin: 0% auto;
    height: 5px;

    &.progress  {
        background-color: ${appColors.darkslateblue} !important;
    }

    .progress-bar  {
        background-color: ${appColors.snow};
    }
`;

const Small = styled.small`
    font-size: .7rem;
    color: ${appColors.red};
`

export { StyledCol, StyledRow, StyledForm, Progress, Small };
