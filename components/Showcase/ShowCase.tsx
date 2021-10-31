import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import classNames from "classnames";
import Carousel from "components/Shared/Carousel";
import { ICarouselImage } from "components/Shared/Models/Model";
import * as React from "react";
import { useState } from "react";
import styles from "./ShowCase.module.css";
import VideoWalkthroughCarousel from "./VideoWalkthrough";

function shuffle<T>(array: Array<T>) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function ShowCase() {
  const [viewVideoWalkthrough, setViewVideoWalkthrough] = useState(false);

  const totalPlanImages = 10;
  const plansIndexes = Array.from(
    { length: totalPlanImages },
    (_, index) => index + 1
  );

  const plans: ICarouselImage[] = plansIndexes.map((index) => {
    const plan: ICarouselImage = {
      image: `/plans/${index}.png`,
    };

    return plan;
  });

  const totalElevationImages = 19;
  const elevationIndexes = Array.from(
    { length: totalElevationImages },
    (_, index) => index + 1
  );

  const elevations: ICarouselImage[] = elevationIndexes.map((index) => {
    const elevation: ICarouselImage = {
      image: `/elevations/${index}.jpg`,
    };

    return elevation;
  });

  const carouselSteps: ICarouselImage[] = [...plans, ...elevations];
  const shuffledCarouselSteps = shuffle(carouselSteps);

  return (
    <Box sx={{ margin: "1rem" }}>
      <Box
        className={classNames(
          styles.flex,
          styles.plansElevationsSectionContainer
        )}
      >
        <Typography className={styles.plansElevationsSectionText}>
          Plans / Elevations 
        </Typography>
      </Box>
      <Box sx={{ margin: "3rem 1rem 1rem 1rem" }}>
        <Carousel
          carrouselSteps={shuffledCarouselSteps}
          className={styles.carouselImage}
        />
        <Box
          className={classNames(styles.flex, styles.videoWalkthroughContainer)}
        >
          <Button variant="outlined" className={styles.videoWalkthrough} onClick={() => setViewVideoWalkthrough(true)}>
            3D Walkthrough
          </Button>
          <VideoWalkthroughCarousel open={viewVideoWalkthrough} title={"3D Walkthrough"} handleClose={() => setViewVideoWalkthrough(false)} />
        </Box>
      </Box>
    </Box>
  );
}
