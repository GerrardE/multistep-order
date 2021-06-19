import styled from "styled-components";

const Image = styled.img.attrs(props => ({
  className: props.className,
}))`
  &.xs {
    width: 10%;
    height: auto;
  }
`;

export default Image;
