import styled from "styled-components";
import appColors from "../AppColors/appcolors";

export const T3 = styled.h3.attrs(props => ({
  className: props.className,
}))`
  &.text-snow {
    color: ${appColors.snow};
  }
  
  font-style: normal;
  font-weight: bold;
  line-height: 1.875rem;
  color: ${appColors.darkslateblue};
  margin: .5rem 0;
`;
