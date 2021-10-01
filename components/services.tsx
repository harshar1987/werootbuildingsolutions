import { Box, Grid, Typography, Button } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import {
  Advisory,
  DesignAndEngineering,
  Miscellaneous,
  ProjectExecutionAndMonitoring,
} from "./Images";
import styles from "./services.module.css";
import LearnMoreDialog from "./learnmore";
import Chip from "@mui/material/Chip";

const EmptyLearnMoreContent = <div></div>;

const AdvisoryServicesContent = () => {
  return (
    <Box>
      <Typography gutterBottom>
        From{" "}
        <span className={styles.learnMoreTextHighLight}>
          initial discussions with architect and builders to detailed project
          report
        </span>{" "}
        our experts help our clients throughout to take right decisions.
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

const DesignAndEngineeringServicesContent = () => {
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

const ProjectExecutionAndMonitoringServicesContent = () => {
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

const MiscellaneousServicesContent = () => {
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
    handleLearnMoreOpen("Advisory Services", AdvisoryServicesContent());
  };

  const learnMoreOnDesignAndEngineeringServices = () => {
    handleLearnMoreOpen(
      "Design and Engineering services",
      DesignAndEngineeringServicesContent()
    );
  };

  const learnMoreOnProjectExecutionAndMonitoringServices = () => {
    handleLearnMoreOpen(
      "Project Execution and Monitoring services",
      ProjectExecutionAndMonitoringServicesContent()
    );
  };

  const learnMoreOnMiscellaneousServices = () => {
    handleLearnMoreOpen(
      "Miscellaneous services",
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
                Advisory services
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
                        From initial discussions with architect and builders to
                        detailed project report
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
                        Our experts help our clients throughout to take right
                        decisions.
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
                    Learn more
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
                Design and Engineering services
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
                        We provide professional Design Engineering and
                        Consultancy services
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
                        for clients in the fields of architecture and structure.
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
                    Learn more
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
                Project Execution and Monitoring services
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
                        From civil foundation work to complete project
                        construction we follow
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
                        industry best practices for continuous monitoring of
                        each activity
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
                        and maintainence of utmost quality.
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
                    Learn more
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
                Miscellaneous services
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
                        With the intention to block the unwanted hassles for our
                        clients
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
                        we provide right services at right time for
                        miscellaneous
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
                        building specific activities
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
                    Learn more
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
