import styled from "styled-components";
import appColors from "../AppColors/appcolors";

export const T5 = styled.h5.attrs(props => ({
  className: props.className,
}))`
  font-style: normal;
  line-height: 1.875rem;
  color: ${appColors.darkslateblue};
  margin: .5rem 0;
`;
