import { Box, Button, Grid, Typography } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import { AdvisoryServicesContent } from "./AdvisoryServicesContent";
import { DesignAndEngineeringServicesContent } from "./DesignAndEngineeringServicesContent";
import {
  Advisory,
  DesignAndEngineering,
  Miscellaneous,
  ProjectExecutionAndMonitoring,
} from "./Images";
import LearnMoreDialog from "./LearnMore";
import { MiscellaneousServicesContent } from "./MiscellaneousServicesContent";
import { ProjectExecutionAndMonitoringServicesContent } from "./ProjectExecutionAndMonitoringServicesContent";
import styles from "./Services.module.css";
import {
  servicesData,
  advisoryServicesInfo,
  designAndEngineeringInfo,
  projectExecutionInfo,
  miscellaneousInfo,
} from "./Services.data";

const EmptyLearnMoreContent = <div></div>;

function Services() {
  type LearnMoreDetail = {
    open: boolean;
    title: string;
    content: React.ReactNode;
  };

  const [learnMoreDetail, setLearnMoreDetails] = useState<LearnMoreDetail>({
    open: false,
    title: "",
    content: EmptyLearnMoreContent,
  });

  const handleLearnMoreClose = () => {
    setLearnMoreDetails({
      open: false,
      title: "",
      content: EmptyLearnMoreContent,
    });
  };

  const handleLearnMoreOpen = (title: string, content: React.ReactNode) => {
    setLearnMoreDetails({ open: true, title: title, content: content });
  };

  const learnMoreOnAdvisoryServices = () => {
    handleLearnMoreOpen(servicesData.advisory, AdvisoryServicesContent());
  };

  const learnMoreOnDesignAndEngineeringServices = () => {
    handleLearnMoreOpen(
      servicesData.designAndEngineering,
      DesignAndEngineeringServicesContent()
    );
  };

  const learnMoreOnProjectExecutionAndMonitoringServices = () => {
    handleLearnMoreOpen(
      servicesData.projectExecution,
      ProjectExecutionAndMonitoringServicesContent()
    );
  };

  const learnMoreOnMiscellaneousServices = () => {
    handleLearnMoreOpen(
      servicesData.miscellaneous,
      MiscellaneousServicesContent()
    );
  };

  const { open, title, content } = learnMoreDetail;
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box
            className={classNames(
              styles.flex,
              styles.ourServicesSectionContainer
            )}
          >
            <Typography className={styles.ourServicesSectionText}>
              Our Services
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className={styles.ourServicesSectionContentGroupContainer}
            sx={{ justifyContent: "space-between" }}
          >
            <Box className={styles.ourServicesSectionContentContainer}>
              <div className={styles.ourServicesSectionContentImage}>
                <Advisory style={{ width: "5rem" }} />
              </div>
              <Typography
                className={classNames(
                  styles.flex,
                  styles.ourServicesSectionContentHeaderText
                )}
              >
                {servicesData.advisory}
              </Typography>
              <Box className={styles.ourServicesSectionContentTextContainer}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {advisoryServicesInfo.first}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                       {advisoryServicesInfo.second}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  className={classNames(
                    styles.flex,
                    styles.learnMoreButtonContainer
                  )}
                >
                  <Button
                    variant="outlined"
                    className={styles.learnMoreButton}
                    onClick={learnMoreOnAdvisoryServices}
                  >
                    {servicesData.learnMore}
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box className={styles.ourServicesSectionContentContainer}>
              <div className={styles.ourServicesSectionContentImage}>
                <DesignAndEngineering style={{ width: "5rem" }} />
              </div>
              <Typography
                className={classNames(
                  styles.flex,
                  styles.ourServicesSectionContentHeaderText
                )}
              >
               {servicesData.designAndEngineering}
              </Typography>
              <Box className={styles.ourServicesSectionContentTextContainer}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {designAndEngineeringInfo.first}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {designAndEngineeringInfo.second}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  className={classNames(
                    styles.flex,
                    styles.learnMoreButtonContainer
                  )}
                >
                  <Button
                    variant="outlined"
                    className={styles.learnMoreButton}
                    onClick={learnMoreOnDesignAndEngineeringServices}
                  >
                    {servicesData.learnMore}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className={styles.ourServicesSectionContentGroupContainer}
            sx={{ justifyContent: "space-between" }}
          >
            <Box className={styles.ourServicesSectionContentContainer}>
              <div className={styles.ourServicesSectionContentImage}>
                <ProjectExecutionAndMonitoring style={{ width: "5rem" }} />
              </div>
              <Typography
                className={classNames(
                  styles.flex,
                  styles.ourServicesSectionContentHeaderText
                )}
              >
                {servicesData.projectExecution}
              </Typography>
              <Box className={styles.ourServicesSectionContentTextContainer}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {projectExecutionInfo.first}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {projectExecutionInfo.second}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {projectExecutionInfo.third}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  className={classNames(
                    styles.flex,
                    styles.learnMoreButtonContainer
                  )}
                >
                  <Button
                    variant="outlined"
                    className={styles.learnMoreButton}
                    onClick={learnMoreOnProjectExecutionAndMonitoringServices}
                  >
                    {servicesData.learnMore}
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box className={styles.ourServicesSectionContentContainer}>
              <div className={styles.ourServicesSectionContentImage}>
                <Miscellaneous style={{ width: "5rem" }} />
              </div>
              <Typography
                className={classNames(
                  styles.flex,
                  styles.ourServicesSectionContentHeaderText
                )}
              >
                {servicesData.miscellaneous}
              </Typography>
              <Box className={styles.ourServicesSectionContentTextContainer}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {miscellaneousInfo.first}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {miscellaneousInfo.second}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      className={styles.flex}
                      sx={{ justifyContent: "center" }}
                    >
                      <Typography
                        className={styles.ourServicesSectionContentText}
                      >
                        {miscellaneousInfo.third}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  className={classNames(
                    styles.flex,
                    styles.learnMoreButtonContainer
                  )}
                >
                  <Button
                    variant="outlined"
                    className={styles.learnMoreButton}
                    onClick={learnMoreOnMiscellaneousServices}
                  >
                    {servicesData.learnMore}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <LearnMoreDialog
        open={open}
        title={title}
        content={content}
        handleClose={handleLearnMoreClose}
      />
    </>
  );
}

export default Services;
