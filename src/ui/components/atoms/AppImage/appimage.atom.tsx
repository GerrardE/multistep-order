import React from "react";
import Image from "./appimage.styles";
import IProps from "./appimage.interfaces";

const AppImage: React.FunctionComponent<IProps> = ({ config }) => {
  const {
    imageSrc,
    imageClassName,
    imageAlt,
    imageWidth,
    imageHeight,
  } = config;

  return (
    <Image
      src={imageSrc}
      className={imageClassName}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
    />
  );
};

export default AppImage;
