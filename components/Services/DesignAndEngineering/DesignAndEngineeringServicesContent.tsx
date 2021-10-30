import { Box, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Elevation from "components/Shared/Elevation";
import {
  SvgImageProps
} from "components/Shared/Models/Model";
import Plans from "components/Shared/Plans";
import VideoWalkthrough from "components/Shared/VideoWalkthrough";
import React, { useState } from "react";
import styles from "../Services.module.css";


export const DesignAndEngineeringServicesContentImage = (
  props: SvgImageProps
) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 174" {...props}>
      <path d="M171.5 163.641H2.5a2.5 2.5 0 01-2.5-2.5V12.859a2.5 2.5 0 012.5-2.5h151.672a2.5 2.5 0 012.5 2.5v73.927H171.5a2.5 2.5 0 012.5 2.5v71.855a2.5 2.5 0 01-2.5 2.5zm-126-5H169V91.786h-51.701a2.5 2.5 0 01-2.5-2.5v-4.813h-6.172a2.5 2.5 0 110-5h6.172V63.306a2.5 2.5 0 115 0v23.48h14.529V15.359h-14.529v18.28a2.5 2.5 0 11-5 0v-7.667H75.5a2.5 2.5 0 01-2.5-2.5v-8.113h-9.127v11.613a2.5 2.5 0 11-5 0V15.359h-2.706v6.447a2.5 2.5 0 01-2.5 2.5h-.779a8.293 8.293 0 01.696 3.333v6.5c0 4.595-3.738 8.333-8.333 8.333-4.595 0-8.333-3.738-8.333-8.333v-6.5a8.29 8.29 0 01.696-3.333h-.779a2.5 2.5 0 01-2.5-2.5v-6.447H25.25v33.113a2.5 2.5 0 01-2.5 2.5H19.5V65.01h39.373V53.472a2.5 2.5 0 115 0v26h6.172a2.5 2.5 0 110 5h-6.172v12.25a2.5 2.5 0 11-5 0V70.01H23.167v71.796H43a2.5 2.5 0 012.5 2.5v14.335zm-40.5 0h35.5v-11.835H20.667a2.5 2.5 0 01-2.5-2.5v-43.5H5v57.835zm0-62.835h13.167V70.01H5v25.796zm143-9.02h3.672V15.359H148v71.427zm-8.672 0H143V15.359h-3.672v71.427zM5 64.139h9.5V50.972H5v13.167zm12-18.167h3.25V15.359H5v30.613h12zm28.25-21.666a3.337 3.337 0 00-3.333 3.333v6.5c0 1.838 1.495 3.333 3.333 3.333s3.333-1.495 3.333-3.333v-6.5a3.337 3.337 0 00-3.333-3.333zM78 20.972h36.799v-5.613H78v5.613zm-32.75-1.666h5.917v-3.947H39.333v3.947h5.917zm54.706 131.916H79.911a2.5 2.5 0 01-2.5-2.5V102.91a2.5 2.5 0 012.5-2.5h20.045a2.5 2.5 0 012.5 2.5v45.813a2.5 2.5 0 01-2.5 2.499zm-17.545-5h15.045v-2.5h-8.873a2.5 2.5 0 01-2.5-2.5V110.41a2.5 2.5 0 012.5-2.5h8.873v-2.5H82.411v40.812zm8.672-7.5h6.373V112.91h-6.373v25.812zm63.089 11a2.5 2.5 0 01-2.5-2.5v-43a2.5 2.5 0 115 0v7.756a2.5 2.5 0 012.328 2.494v22.5a2.5 2.5 0 01-2.328 2.494v7.756a2.5 2.5 0 01-2.5 2.5zm-24.101-3c-7.951 0-14.179-8.565-14.179-19.5s6.228-19.5 14.179-19.5 14.179 8.565 14.179 19.5-6.228 19.5-14.179 19.5zm0-34c-4.976 0-9.179 6.64-9.179 14.5s4.204 14.5 9.179 14.5 9.179-6.64 9.179-14.5-4.204-14.5-9.179-14.5z" />
    </svg>
  );
};

export const DesignAndEngineeringServicesContent = () => {
  type ChipStyle = {
    variant: "filled" | "outlined";
    style: React.CSSProperties;
  };

  const unClickedChipStyle: ChipStyle = {
    variant: "outlined",
    style: { borderColor: "rgba(0, 96, 20, 1) ", color: "rgba(0, 104, 20, 1)" },
  };

  const clickedChipStyle: ChipStyle = {
    variant: "filled",
    style: { background: "rgba(0, 96, 20, 1) ", color: "#fff" },
  };

  const [canShowElevation, setCanShowElevation] = useState(false);
  const [canShowPlans, setCanShowPlans] = useState(false);
  const [canShowVideoWalkthrough, setCanShowVideoWalkthrough] = useState(false);

  const [plansChipStyle, setPlansChipStyle] =
    useState<ChipStyle>(unClickedChipStyle);
  const [elevationChipStyle, setElevationChipStyle] =
    useState<ChipStyle>(unClickedChipStyle);
  const [videoWalkthroughChipStyle, setVideoWalkthroughnChipStyle] =
    useState<ChipStyle>(unClickedChipStyle);

  const handleElevationClick = () => {
    setElevationChipStyle(clickedChipStyle);
    setVideoWalkthroughnChipStyle(unClickedChipStyle);
    setPlansChipStyle(unClickedChipStyle);
    setCanShowElevation(true);
    setCanShowVideoWalkthrough(false);
    setCanShowPlans(false);
  };

  const handlevideoWalkthroughClick = () => {
    setElevationChipStyle(unClickedChipStyle);
    setPlansChipStyle(unClickedChipStyle);
    setVideoWalkthroughnChipStyle(clickedChipStyle);
    setCanShowElevation(false);
    setCanShowVideoWalkthrough(true);
    setCanShowPlans(false);
  };

  const handlePlansClick = () => {
    setPlansChipStyle(clickedChipStyle);
    setElevationChipStyle(unClickedChipStyle);
    setVideoWalkthroughnChipStyle(unClickedChipStyle);
    setCanShowElevation(false);
    setCanShowVideoWalkthrough(false);
    setCanShowPlans(true);
  };

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
      <Box sx={{ marginTop: "1rem" }}>
        <Grid
          container
          spacing={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item>
            <Chip
              className={styles.chip}
              label="2D plan"
              variant="outlined"
              onClick={handlePlansClick}
              style={plansChipStyle.style}
            />
          </Grid>
          <Grid item>
            <Chip
              label="3D Walkthrough"
              variant={videoWalkthroughChipStyle.variant}
              onClick={handlevideoWalkthroughClick}
              style={videoWalkthroughChipStyle.style}
            />
          </Grid>
          <Grid item>
            <Chip
              label="Elevation"
              variant={elevationChipStyle.variant}
              onClick={handleElevationClick}
              style={elevationChipStyle.style}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "1rem" }}>
        {canShowPlans && <Plans />}
        {canShowElevation && <Elevation />}
        {canShowVideoWalkthrough && <VideoWalkthrough />}
      </Box>
    </Box>
  );
};
