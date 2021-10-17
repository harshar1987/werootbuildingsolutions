import { Box, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import React from "react";
import { SvgImageProps } from "components/Shared/Models/Model";
import styles from "../Services.module.css";

export const MiscellaneousServicesContentImage = (props: SvgImageProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <path d="M450.255 434.511H61.745c-13.257 0-24.042-10.786-24.042-24.042V101.532c0-13.257 10.785-24.042 24.042-24.042h388.511c13.257 0 24.042 10.786 24.042 24.042v308.937c0 13.256-10.785 24.042-24.043 24.042zM61.745 97.489a4.046 4.046 0 00-4.042 4.042v308.937a4.046 4.046 0 004.042 4.042h388.511a4.046 4.046 0 004.042-4.042V101.532a4.046 4.046 0 00-4.042-4.042H61.745z" />
      <path d="M450.117 163.589H63.655c-13.298 0-24.118-10.785-24.118-24.042v-38.015c0-13.257 10.819-24.042 24.118-24.042h386.462c13.298 0 24.118 10.786 24.118 24.042v38.015c0 13.257-10.819 24.042-24.118 24.042zm-386.462-66.1c-2.271 0-4.118 1.813-4.118 4.042v38.015c0 2.229 1.847 4.042 4.118 4.042h386.462c2.271 0 4.118-1.813 4.118-4.042v-38.015c0-2.229-1.847-4.042-4.118-4.042H63.655z" />
      <path d="M93.73 128.69c-2.63 0-5.21-1.06-7.07-2.92a10.093 10.093 0 01-2.93-7.07 10.1 10.1 0 012.93-7.08c1.86-1.86 4.44-2.92 7.07-2.92s5.21 1.06 7.07 2.92a10.1 10.1 0 012.93 7.08c0 2.63-1.07 5.21-2.93 7.07a10.066 10.066 0 01-7.07 2.92zM142.49 128.69c-2.64 0-5.21-1.06-7.07-2.92a10.076 10.076 0 01-2.93-7.07c0-2.64 1.07-5.22 2.93-7.08 1.86-1.86 4.43-2.92 7.07-2.92 2.63 0 5.21 1.06 7.07 2.92 1.86 1.86 2.93 4.44 2.93 7.08 0 2.63-1.07 5.21-2.93 7.07a10.066 10.066 0 01-7.07 2.92zM130.769 224.768a9.982 9.982 0 01-6.921-2.78L113.217 211.8c-3.987-3.821-4.123-10.151-.301-14.139 3.821-3.987 10.15-4.123 14.139-.301l4.694 4.498 23.393-16.432c4.52-3.173 10.757-2.083 13.931 2.435 3.174 4.52 2.084 10.757-2.435 13.931l-30.123 21.158a9.976 9.976 0 01-5.746 1.818zM136.164 305.05a9.982 9.982 0 01-6.921-2.78l-10.631-10.188c-3.987-3.821-4.123-10.151-.301-14.139 3.821-3.987 10.15-4.123 14.139-.301l4.694 4.498 23.393-16.432c4.521-3.173 10.757-2.083 13.931 2.435 3.174 4.52 2.084 10.757-2.435 13.931l-30.123 21.158a9.976 9.976 0 01-5.746 1.818zM151.512 374.753h-31.377c-5.523 0-10-4.477-10-10s4.477-10 10-10h31.377c5.523 0 10 4.477 10 10s-4.477 10-10 10zM379.69 214.189H203.667c-5.523 0-10-4.477-10-10s4.477-10 10-10H379.69c5.523 0 10 4.477 10 10s-4.477 10-10 10zM379.69 294.989H203.667c-5.523 0-10-4.477-10-10s4.477-10 10-10H379.69c5.523 0 10 4.477 10 10s-4.477 10-10 10zM379.69 374.753H203.667c-5.523 0-10-4.477-10-10s4.477-10 10-10H379.69c5.523 0 10 4.477 10 10s-4.477 10-10 10z" />
    </svg>
  );
};

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
