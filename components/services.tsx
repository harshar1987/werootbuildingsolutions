import { Box, Grid, Typography, Button } from "@mui/material";
import classNames from "classnames";
import React from "react";
import {
  Advisory,
  DesignAndEngineering,
  Miscellaneous,
  ProjectExecutionAndMonitoring,
} from "./Images";
import styles from "./services.module.css";

function Services() {
  return (
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
          className={classNames(
            styles.flex,
            styles.ourServicesSectionContentGroupContainer
          )}
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
              <Typography className={styles.ourServicesSectionContentText}>
                From initial discussions with architect and builders to detailed
              </Typography>

              <Typography className={styles.ourServicesSectionContentText}>
                project report our experts help our clients throughout to take
              </Typography>
              <Typography
                className={classNames(
                  styles.flex,
                  styles.ourServicesSectionContentText
                )}
                sx={{ justifyContent: "center" }}
              >
                right decisions
              </Typography>
              <Box className={classNames(styles.flex, styles.learnMoreButtonContainer)}>
                <Button variant="outlined" className={styles.learnMoreButton}>
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
              <Typography className={styles.ourServicesSectionContentText}>
                From initial discussions with architect and builders to detailed
              </Typography>

              <Typography className={styles.ourServicesSectionContentText}>
                project report our experts help our clients throughout to take
              </Typography>
              <Typography
                className={classNames(
                  styles.flex,
                  styles.ourServicesSectionContentText
                )}
                sx={{ justifyContent: "center" }}
              >
                right decisions
              </Typography>
              <Box className={classNames(styles.flex, styles.learnMoreButtonContainer)}>
                <Button variant="outlined" className={styles.learnMoreButton}>
                  Learn more
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          className={classNames(
            styles.flex,
            styles.ourServicesSectionContentGroupContainer
          )}
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
              <Typography className={styles.ourServicesSectionContentText}>
                From initial discussions with architect and builders to detailed
              </Typography>

              <Typography className={styles.ourServicesSectionContentText}>
                project report our experts help our clients throughout to take
              </Typography>
              <Typography
                className={classNames(
                  styles.flex,
                  styles.ourServicesSectionContentText
                )}
                sx={{ justifyContent: "center" }}
              >
                right decisions
              </Typography>
              <Box className={classNames(styles.flex, styles.learnMoreButtonContainer)}>
                <Button variant="outlined" className={styles.learnMoreButton}>
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
              <Typography className={styles.ourServicesSectionContentText}>
                From initial discussions with architect and builders to detailed
              </Typography>

              <Typography className={styles.ourServicesSectionContentText}>
                project report our experts help our clients throughout to take
              </Typography>
              <Typography
                className={classNames(
                  styles.flex,
                  styles.ourServicesSectionContentText
                )}
                sx={{ justifyContent: "center" }}
              >
                right decisions
              </Typography>
              <Box className={classNames(styles.flex, styles.learnMoreButtonContainer)}>
                <Button variant="outlined" className={styles.learnMoreButton}>
                  Learn more
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Services;
