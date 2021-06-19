import styled from "styled-components";
import {
  Carousel as Csl, CarouselCaption as CslCp, CarouselIndicators as CslInd,
} from "reactstrap";

const Carousel = styled(Csl)`
    height: 100%;
    width: 75%;
`;

const CarouselCaption = styled(CslCp).attrs(props => ({
  className: props.className,
}))`
    &.carousel-caption h3{
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 50px;
        color: #4D5667;
    }
    &.carousel-caption p{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        color: #A2A2A4;
    }
    position: static;
`;

const CarouselIndicators = styled(CslInd).attrs(props => ({
  className: props.className,
}))`
   &.carousel-indicators .active{
       background: #FFCD00;
   }
   &.carousel-indicators li {
       background: #EFEFEF;
       border-radius: 5px;
    }
   margin-top: 0.5rem;
`;

export { Carousel, CarouselCaption, CarouselIndicators };
