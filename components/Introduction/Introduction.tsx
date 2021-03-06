import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import { useRouter } from "next/router";
import home from "public/home.png";
import React, { useState } from "react";
import VizSensor from "react-visibility-sensor";
import { introData } from "./Introduction.data";
import styles from "./Introduction.module.css";
import LeaveUsMessageDialog from "./LeaveUsMessage";

const Intro = () => {
  const router = useRouter();
  const [leaveUsMessageDialogOpen, setLeaveUsMessageDialogOpen] =
    useState(false);
  const [introTextVisible, setIntroTextVisible] = useState(false);
  const [moreAboutUsButtonVisible, setMoreAboutUsButtonVisible] = useState(false);

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
          <Fade in={introTextVisible || moreAboutUsButtonVisible} timeout={3000}>
            <Box className={styles.flex}>
              <Box className={styles.homeImage}>
                <Box
                  component="img"
                  src={home}
                  alt="home"
                  width="100%"
                  height="auto"
                ></Box>
              </Box>

              <Box className={styles.homeContent}>
                <Grid container spacing={0} sx={{ margin: "0.5rem" }}>
                  <Grid item xs={12}>
                    <VizSensor
                      onChange={(isVisible) => {
                        setIntroTextVisible(isVisible);
                      }}
                    >
                      <Typography
                        className={styles.introContentText}
                        component="h1"
                      >
                        {"Aspirations are like trees without root."}
                      </Typography>
                    </VizSensor>
                    <Typography
                      className={styles.introContentText}
                      component="h1"
                    >
                      {"And"}{" "}
                      <span className={styles.higlightedText}>{"WE ROOT"}</span>{" "}
                      {"your aspirations firmly because"} {"we have"}{" "}
                      <span className={styles.highlightedText}>
                        {"strong root"}{" "}
                      </span>
                      {"when it comes to"}{" "}
                      <span className={styles.highlightedText}>
                        {"Design, Construction and Client support."}
                      </span>
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
                    <Grid
                      container
                      spacing={2}
                      sx={{ justifyContent: "center" }}
                    >
                      <Grid item>
                        <Box
                          className={styles.flex}
                          sx={{ flexFlow: "column" }}
                        >
                          <Button
                            variant="outlined"
                            className={styles.primaryButton}
                            onClick={handleLeaveUsMessageDialogOpen}
                          >
                            Leave us a message
                          </Button>
                          <VizSensor
                            onChange={(isVisible) => {
                              setMoreAboutUsButtonVisible(isVisible);
                            }}
                          >
                            <Button
                              size={"small"}
                              sx={{
                                marginTop: "0.75rem",
                                textDecoration: "underline",
                              }}
                              onClick={(e) => router.push("/about")}
                            >
                              More about us
                            </Button>
                          </VizSensor>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Fade>
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
