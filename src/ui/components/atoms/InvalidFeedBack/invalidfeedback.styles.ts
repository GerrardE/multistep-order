import styled from "styled-components";

const Div = styled.div.attrs(props => ({
  className: props.className
}))`
  &.invalid-feedback {
    display: block
  }
`;

export default Div;
