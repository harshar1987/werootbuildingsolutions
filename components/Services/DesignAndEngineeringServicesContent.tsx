import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./services.module.css";

export const DesignAndEngineeringServicesContent = () => {
  return (
    <Box>
      <Typography gutterBottom>
        We are always ready to take up any challenging project and strive to
        provide the innovative and comprehensive engineering solutions to meet
        our client design requirements. If you think you are not getting the
        right team to handle your project, why not trust our expertise and give
        us this opportunity to turn it into a huge success?
      </Typography>
      <Typography gutterBottom>
        We provide professional{" "}
        <span className={styles.learnMoreTextHighLight}>
          Design Engineering and Consultancy services{" "}
        </span>{" "}
        for our clients in the fields of{" "}
        <span className={styles.learnMoreTextHighLight}>
          architecture and structure
        </span>
        . Architectural Solutions which provides{" "}
        <span className={styles.learnMoreTextHighLight}>
          Plan, Basic Elevation, 3D Elevation, 3D Floor Plan and Interior
          Designs{" "}
        </span>
        . Structural Solutions provides comprehensive designs for various type
        of RCC and steel structures including special structural services like
        Stability analysis for existing buildings and Proof checking of proposed
        design considering all the factors specified in bureau of Indian
        standards.
      </Typography>
    </Box>
  );
};