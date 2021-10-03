import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Services.module.css";

export const AdvisoryServicesContent = () => {
    return (
      <Box>
        <Typography gutterBottom>
          From{" "}
          <span className={styles.learnMoreTextHighLight}>
            initial discussions with architects and builders to detailed project
            report
          </span>{" "}
          our experts help our clients throughout to take the right decisions.
        </Typography>
        <Typography gutterBottom>
          With our{" "}
          <span className={styles.learnMoreTextHighLight}>proficiency</span> and{" "}
          <span className={styles.learnMoreTextHighLight}>
            domain specific dedicated teams
          </span>{" "}
          we fully comprehend the challenges and dynamics of the construction
          industry and extend thorough benefit to the owners in building their
          dream home.
        </Typography>
      </Box>
    );
  };