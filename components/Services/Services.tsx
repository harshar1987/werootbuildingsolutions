import { Box, Button, Grid, Typography } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import {
  AdvisoryServicesContent,
  AdvisoryServicesImage,
} from "./Advisory/AdvisoryServicesContent";
import {
  DesignAndEngineeringServicesContent,
  DesignAndEngineeringServicesContentImage,
} from "./DesignAndEngineering/DesignAndEngineeringServicesContent";
import LearnMoreDialog from "./Shared/LearnMore";
import {
  MiscellaneousServicesContent,
  MiscellaneousServicesContentImage,
} from "./Miscellaneous/MiscellaneousServicesContent";
import { ProjectExecutionAndMonitoringServicesContent } from "./ProjectExecution/ProjectExecutionAndMonitoringServicesContent";
import {
  advisoryServicesInfo,
  designAndEngineeringInfo,
  miscellaneousInfo,
  projectExecutionInfo,
  servicesData,
} from "./Services.data";
import styles from "./Services.module.css";

const EmptyLearnMoreContent = <div></div>;

function Services() {
  type LearnMoreDetail = {
    openAdvisoryServices: boolean;
    openDesignAndEngineeringServices: boolean;
    openProjectExecutionServices: boolean;
    openMiscellaneousServices: boolean;
    title: string;
  };

  const initialState = {
    openAdvisoryServices: false,
    openDesignAndEngineeringServices: false,
    openProjectExecutionServices: false,
    openMiscellaneousServices: false,
    title: "",
  };

  const [learnMoreDetail, setLearnMoreDetails] =
    useState<LearnMoreDetail>(initialState);

  const handleLearnMoreClose = () => {
    setLearnMoreDetails(initialState);
  };

  const learnMoreOnAdvisoryServices = () => {
    setLearnMoreDetails({
      openAdvisoryServices: true,
      openDesignAndEngineeringServices: false,
      openProjectExecutionServices: false,
      openMiscellaneousServices: false,
      title: servicesData.advisory,
    });
  };

  const learnMoreOnDesignAndEngineeringServices = () => {
    setLearnMoreDetails({
      openAdvisoryServices: false,
      openDesignAndEngineeringServices: true,
      openProjectExecutionServices: false,
      openMiscellaneousServices: false,
      title: servicesData.designAndEngineering,
    });
  };

  const learnMoreOnProjectExecutionAndMonitoringServices = () => {
    setLearnMoreDetails({
      openAdvisoryServices: false,
      openDesignAndEngineeringServices: false,
      openProjectExecutionServices: true,
      openMiscellaneousServices: false,
      title: servicesData.projectExecution,
    });
  };

  const learnMoreOnMiscellaneousServices = () => {
    setLearnMoreDetails({
      openAdvisoryServices: false,
      openDesignAndEngineeringServices: false,
      openProjectExecutionServices: false,
      openMiscellaneousServices: true,
      title: servicesData.miscellaneous,
    });
  };

  const {
    openAdvisoryServices,
    openDesignAndEngineeringServices,
    openProjectExecutionServices,
    openMiscellaneousServices,
    title,
  } = learnMoreDetail;

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
                <AdvisoryServicesImage style={{ width: "5rem" }} />
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
                <DesignAndEngineeringServicesContentImage
                  style={{ width: "5rem" }}
                />
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
                <DesignAndEngineeringServicesContentImage
                  style={{ width: "5rem" }}
                />
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
                <MiscellaneousServicesContentImage style={{ width: "5rem" }} />
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
      {openAdvisoryServices && (
        <LearnMoreDialog
          open={openAdvisoryServices}
          title={title}
          handleClose={handleLearnMoreClose}
        >
          <AdvisoryServicesContent />
        </LearnMoreDialog>
      )}
      {openDesignAndEngineeringServices && (
        <LearnMoreDialog
          open={openDesignAndEngineeringServices}
          title={title}
          handleClose={handleLearnMoreClose}
        >
          <DesignAndEngineeringServicesContent />
        </LearnMoreDialog>
      )}
      {openProjectExecutionServices && (
        <LearnMoreDialog
          open={openProjectExecutionServices}
          title={title}
          handleClose={handleLearnMoreClose}
        >
          <ProjectExecutionAndMonitoringServicesContent />
        </LearnMoreDialog>
      )}
      {openMiscellaneousServices && (
        <LearnMoreDialog
          open={openMiscellaneousServices}
          title={title}
          handleClose={handleLearnMoreClose}
        >
          <MiscellaneousServicesContent />
        </LearnMoreDialog>
      )}
    </>
  );
}

export default Services;
