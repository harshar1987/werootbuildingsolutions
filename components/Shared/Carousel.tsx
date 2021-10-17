import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styles from "./Carousel.module.css";
import { ICarouselImage } from "./Models/Model";

interface ICarrouselProps {
  carrouselSteps: ICarouselImage[];
}

const Carousel = ({ carrouselSteps }: ICarrouselProps) => {
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

  return (
    <Box>
      <Box >
        <SwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          slideClassName={styles.slide} 
          autoPlay={false}
          springConfig={{ duration: "3s", easeFunction: "cubic-bezier(0, 0.75, 1, 1)", delay: "0s"}}
        >
          {carrouselSteps.map((step, index) => (
            <div key={step.title}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 400,
                    width: 600,
                  }}
                  className={styles.image}
                  src={step.image}
                  alt={step.title}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
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
