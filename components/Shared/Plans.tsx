import {
    ICarouselImage
} from "components/Shared/Models/Model";
import React from "react";
import Carousel, { ICarrouselProps } from "./Carousel";

interface IPlansProps {
    autoPlay?: boolean;
    className?: string;
}
const Plans = ({ autoPlay, className}: IPlansProps) => {
  const totalElevationImages = 10;
  const indexes = Array.from(
    { length: totalElevationImages },
    (_, index) => index + 1
  );

  const carouselSteps: ICarouselImage[] = indexes.map((index) => {
    const carouselStep: ICarouselImage = {
      image: `/plans/${index}.png`,
    };

    return carouselStep;
  });

  return <Carousel carrouselSteps={carouselSteps} autoPlay={autoPlay} className={className}/>;
};

export default Plans;
