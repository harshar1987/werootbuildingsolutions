import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styles from "./Carousel.module.css";
import { ICarouselImage } from "./Models/Model";
import classNames from "classnames";
import IconButton from "@mui/material/IconButton";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface ICarrouselProps {
  carrouselSteps: ICarouselImage[];
  autoPlay?: boolean;
  className?: string;
}

const Carousel = ({ carrouselSteps, autoPlay, className }: ICarrouselProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [startAutoPlay, setStartAutoPlay] = useState(true);

  const stepPages = Math.ceil(carrouselSteps.length / 10);
  const stepsPerPage = Math.floor(carrouselSteps.length / stepPages);
  const maxSteps = stepsPerPage * stepPages;
  const handleNext = () => {
    setCurrentStep(currentStep + 1);

    if (activeStep == stepsPerPage - 1) {
      setActiveStep(0);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);

    if (activeStep == 0) {
      setActiveStep(stepsPerPage - 1);
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  let canAutoPlay = false;
  if (autoPlay) {
    canAutoPlay = true;
  }
  const carouselStyle = className ? className : styles.image;

  const renderCarouselSteps = () => {
    return carrouselSteps.map((step, index) => {
      return (
        <Box
          key={step.title}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {Math.abs(currentStep - index) <= 2 ? (
            <Box
              key={step.title}
              component="img"
              className={classNames(carouselStyle, styles.imageHover)}
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
            index={currentStep}
            slideClassName={styles.slide}
            enableMouseEvents
            springConfig={{
              duration: "3s",
              easeFunction: "cubic-bezier(0,0.75,1,1)",
              delay: "0s",
            }}
            onChangeIndex={(index) => startAutoPlay && setCurrentStep(index)}
          >
            {renderCarouselSteps()}
          </AutoPlaySwipeableViews>
        ) : (
          <SwipeableViews
            axis={"x"}
            index={currentStep}
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
          {carrouselSteps[currentStep].title}
        </Typography>
      </Paper>
      <Box>
        <Box className={styles.slide} sx={{ margin: "0.5rem" }}>
          {canAutoPlay && startAutoPlay && (
            <IconButton color="primary" aria-label="pause" component="span" onClick={() => setStartAutoPlay(false)}>
              <PauseIcon />
            </IconButton>
          )}
          {canAutoPlay && !startAutoPlay && (
            <IconButton color="primary" aria-label="pause" component="span"  onClick={() => setStartAutoPlay(true)}>
              <PlayArrowIcon />
            </IconButton>
          )}
        </Box>
        <Box className={styles.slide}>
          <MobileStepper
            steps={stepsPerPage}
            activeStep={activeStep}
            position="static"
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={currentStep === maxSteps - 1}
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                <KeyboardArrowLeft />
              </Button>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
