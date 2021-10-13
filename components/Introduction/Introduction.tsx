import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useState } from "react";
import { layoutData } from "components/Layout/Layout.data";
import home from "public/home.png";
import { introData } from "./Introduction.data";
import styles from "./Introduction.module.css";
import LeaveUsMessageDialog from "./LeaveUsMessage";

const Intro = () => {
  const [leaveUsMessageDialogOpen, setLeaveUsMessageDialogOpen] =
    useState(false);

  const handleLeaveUsMessageDialogClose = () => {
    setLeaveUsMessageDialogOpen(false);
  };

  const handleLeaveUsMessageDialogOpen = () => {
    setLeaveUsMessageDialogOpen(true);
  };

  return (
    <>
      <Grid container sx={{ marginTop: 5 }}>
        <Grid item xs={12}>
          <Box className={styles.flex}>
            <Box className={styles.homeImage}>
              <Image src={home} alt="home" width={4000} height={3000} />
            </Box>
            <Box className={styles.homeContent}>
              <Grid container spacing={0} sx={{ margin: "0.5rem" }}>
                <Grid item xs={12}>
                  <Typography
                    className={styles.introContentText}
                    component="h1"
                    sx={{ fontSize: "2.5rem", fontWeight: 600, marginTop: 5 }}
                  >
                    {introData.dreamBig}{" "}
                    <span className={styles.higlightedText}>{introData.worryNot}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    className={styles.introContentText}
                    component="h1"
                    sx={{ fontSize: 24, fontWeight: 550 }}
                  >
                   {introData.weAreHereToAssist}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    className={styles.introContentText}
                    component="p"
                    sx={{ fontSize: 20, marginTop: 1 }}
                  >
                    <span
                      className={styles.higlightedText}
                      style={{ textTransform: "uppercase" }}
                    >
                      {layoutData.companyName}
                    </span>{" "}
                    {introData.evolvedToProviderBuildingSolutions}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    className={styles.introContentText}
                    component="p"
                    sx={{ fontSize: 20 }}
                  >
                    {introData.ourBuisnessIsCharacterizedByProfessionals}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0} sx={{ justifyContent: "center" }}>
                    <Grid item>
                      <Button
                        variant="outlined"
                        className={styles.primaryButton}
                        onClick={handleLeaveUsMessageDialogOpen}
                      >
                        Leave us a message
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <LeaveUsMessageDialog
        open={leaveUsMessageDialogOpen}
        onClose={handleLeaveUsMessageDialogClose}
      />
    </>
  );
};

export default Intro;
