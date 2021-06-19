import React, { useState } from "react";
import { CarouselItem } from "reactstrap";
import { AppImage } from "../../atoms";
import { Carousel, CarouselCaption, CarouselIndicators } from "./appcarousel.styles";
import IProps from "./appcarousel.interfaces";

const AppCarousel: React.FunctionComponent<IProps> = ({ config }) => {
  const { carouselItems } = config;

  const [activeIndex, setActiveIndex] = useState(0);
  
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carouselItems.map(item => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <AppImage config={{
        imageSrc: item.src,
        imageAlt: item.altText,
        imageClassName: "img-fluid",
      }}
      />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.header}
      />
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} ride="carousel">
      <CarouselIndicators
        items={carouselItems}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
    </Carousel>
  );
};

export default AppCarousel;
