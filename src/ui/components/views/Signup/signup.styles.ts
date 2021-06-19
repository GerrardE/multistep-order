import styled from "styled-components";
import { Row as Rw, Col } from "reactstrap";
import { AppLink as Lnk } from "../../atoms";

const Wrapper = styled.div`
    background: #FFFFFF;
`;

const SectionBg = styled(Col)`
    background: #E5E5E5;
    padding: 2rem 3rem;
`;

const SectionMd = styled(Col)`
    background: #FFFFFF;
    padding: 3rem 3rem;
    text-align: left;
    margin: auto;
`;

const TextLg = styled.h1.attrs(props => ({
  className: props.className,
}))`
    &.text-black{
      line-height: 50px;
      color: #4D5667;
      text-align: center;
    }
    &.sensei{
      letter-spacing: 0.04em;
    }
    font-style: normal;
    font-weight: bold;
    color: #FFCD00;
    line-height: 30px;
    font-size: 25px;
    cursor: pointer;
`;

const Link = styled(Lnk)`
  font-weight: 500;
  font-size: 14px;
  line-height: 50px;
  color: #4D5667;
  text-decoration: underline;
`;

const TextMd = styled(TextLg).attrs(props => ({
  className: props.className,
}))`
  &.active {
    border-bottom: 3px solid #FFCD00;
  }
  font-size: 16px;
  color: #4D5667;
  margin: 0;
  padding: 0;
`;

const TextSm = styled(TextLg)`
  font-size: 16px;
  color: #4D5667;
`;

const TextXs = styled(TextLg)`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  color: #4D5667;
  margin-top: .5rem;
`;
  
const Header = styled(Rw)`
  border-radius: 3px;
  margin: 0 0rem 1.5rem 0rem;
  align-items: end;
  border-bottom: 1px solid #F5F5F5;
  justify-content: space-between;
`;

const Footer = styled(Rw)`
  background: #EFEFEF;
  width: 100%;
  padding: .25rem 3rem;
  position: absolute;
  right: 0;
  bottom: 0;
  justify-content: space-between;
`;
  
const Div = styled.div`
  height: 90%;
`;


export {
  Wrapper, TextLg, Link, TextMd, TextXs, TextSm, SectionMd, SectionBg, Header, Footer, Div,
};
