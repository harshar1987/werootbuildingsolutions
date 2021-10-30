import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styles from "./Carousel.module.css";
import { ICarouselImage } from "./Models/Model";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface ICarrouselProps {
  carrouselSteps: ICarouselImage[];
  autoPlay?: boolean;
  className?: string;
}

const Carousel = ({ carrouselSteps, autoPlay, className }: ICarrouselProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const maxSteps = carrouselSteps.length;
  let canAutoPlay = false;
  if (autoPlay) {
    canAutoPlay = true;
  }
  const carouselStyle = className ? className: styles.image;

  const renderCarouselSteps = () => {
    return carrouselSteps.map((step, index) => {
      return (
        <Box
          key={step.title}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              component="img"
              className={carouselStyle}
              src={step.image}
              alt={step.title}
            />
          ) : null}
        </Box>
      );
    });
  };

  return (
    <Box>
      <Box>
        {canAutoPlay ? (
          <AutoPlaySwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            slideClassName={styles.slide}
            enableMouseEvents
            springConfig={{
              duration: "3s",
              easeFunction: "cubic-bezier(0, 0.75, 1, 1)",
              delay: "0s",
            }}
          >
            {renderCarouselSteps()}
          </AutoPlaySwipeableViews>
        ) : (
          <SwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            slideClassName={styles.slide}
            springConfig={{
              duration: "3s",
              easeFunction: "cubic-bezier(0, 0.75, 1, 1)",
              delay: "0s",
            }}
          >
            {renderCarouselSteps()}
          </SwipeableViews>
        )}
      </Box>
      <Paper square elevation={0}>
        <Typography className={styles.title}>
          {carrouselSteps[activeStep].title}
        </Typography>
      </Paper>
      <Box className={styles.slide}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default Carousel;
