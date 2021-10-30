import {
    ICarouselYoutube
} from "components/Shared/Models/Model";
import React from "react";
import YoutubeCarousel from "./YoutubeCarousel";

const videoIds = ["rvbvO251RDE", "fRMZ-siiqs8", "bKYpHLDJOKE", "R_veg25TvPM"];

const VideoWalkthrough = () => {

    const carouselSteps: ICarouselYoutube[] = videoIds.map((videoId) => {
      const carouselStep: ICarouselYoutube = {
        videoId: videoId,
      };
  
      return carouselStep;
    });
  
    return <YoutubeCarousel carrouselSteps={carouselSteps} />;
  };

  export default VideoWalkthrough;