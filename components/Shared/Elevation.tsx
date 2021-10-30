
import {
    ICarouselImage
} from "components/Shared/Models/Model";
import React from "react";
import Carousel from "./Carousel";

const Elevation = () => {
    const totalElevationImages = 19;
    const indexes = Array.from(
      { length: totalElevationImages },
      (_, index) => index + 1
    );
  
    const carouselSteps: ICarouselImage[] = indexes.map((index) => {
      const carouselStep: ICarouselImage = {
        image: `/elevations/${index}.jpg`,
      };
  
      return carouselStep;
    });
  
    return <Carousel carrouselSteps={carouselSteps} />;
  };

  export default Elevation;