import { Box, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import React from "react";
import styles from "./Services.module.css";

export const MiscellaneousServicesContent = () => {
  return (
    <Box>
      <Typography gutterBottom>
        <span className={styles.learnMoreTextHighLight}>
          With the intention to block the unwanted hassles for the client{" "}
        </span>
        , We Root extend its arms to support our clients in providing the right
        services at the right time for the building specific miscellaneous
        activities.
      </Typography>
      <Typography gutterBottom>
        <span className={styles.learnMoreTextHighLight}>
          We have partnered with some of the service providers relating to
          building and construction{" "}
        </span>{" "}
        who provides best services in their respective field of expertise.
        Client can readily opt for the service and we take the lead in reviewing
        the work and getting the work completed on time.
      </Typography>
      <Typography gutterBottom>
        <Box
          sx={{ fontStyle: "italic", fontWeight: 600, marginTop: "1.25rem" }}
        >
          Miscellaneous Services offered
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Grid container spacing={1}>
            <Grid item>
              <Chip
                className={styles.chip}
                label="Surveying"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Chip
                className={styles.chip}
                label="Geotechnical Investigation (Soil Testing)"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Chip
                className={styles.chip}
                label="Solar Electrification. - Residential"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Chip
                className={styles.chip}
                label="Property Valuation. (Asset class - Land and Building)"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Chip
                className={styles.chip}
                label="Building and property Insurance"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </Typography>
    </Box>
  );
};