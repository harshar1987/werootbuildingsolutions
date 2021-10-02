import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./services.module.css";

export const ProjectExecutionAndMonitoringServicesContent = () => {
  return (
    <Box>
      <Typography gutterBottom>
        <span className={styles.learnMoreTextHighLight}>
          Proper construction and monitoring is a requisite{" "}
        </span>
        , from the moment Proposed Building steps in the implementation phase.
      </Typography>
      <Typography gutterBottom>
        <span className={styles.learnMoreTextHighLight}>
          From civil foundation work to complete project construction
        </span>
        , there should be thorough checks for construction quality to identify
        any shortcomings existing in the project work.{" "}
        <span className={styles.learnMoreTextHighLight}>
          Negligence during construction and lack of monitoring
        </span>{" "}
        can tremendously impact the building throughout its lifespan.
      </Typography>
      <Typography gutterBottom>
        Hence there is a need of having a dedicated construction team, with
        extensive experience, knowledge of project designs and best industry
        standard practices for continuous noticing of each activity and
        maintaining the quality of the project.
      </Typography>
    </Box>
  );
};