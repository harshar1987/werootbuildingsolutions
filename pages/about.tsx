import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Team from "../public/team.jpg";
import Why from "../public/why.jpg";
import { Typography } from "@mui/material";
import styles from "./about.module.css";
import classNames from "classnames";

function About() {
  return (
    <Box>
      <Box className={classNames(styles.flex, styles.aboutContainer)}>
        <Box className={styles.imageContainer}>
          <Image src={Team} alt="team" width={2000} height={1500} />
          <a style={{fontSize: "0.5rem"}} href="https://www.freepik.com/vectors/people">Designed by pch.vector</a>
        </Box>
        <Box className={classNames(styles.flex, styles.headerTextContainer)}>
          <Box className={styles.flex} sx={{ flexFlow: "column" }}>
            <Box
              className={styles.flex}
              sx={{ justifyContent: "center", margin: "1rem" }}
            >
              <Typography className={styles.headerText}>Who we are</Typography>
            </Box>

            <Typography className={styles.contentText}>
              We are{" "}
              <span className={styles.higlightedText}>
                young and dynamic engineers
              </span>{" "}
              specialized in the field of{" "}
              <span className={styles.higlightedText}>
                Design, Engineering and Construction{" "}
              </span>
              with a belief in{" "}
              <span className={styles.higlightedText}>
                absolute reliability, top quality and the long-term success{" "}
              </span>{" "}
              and with the belief that a true success of our business is by
              having{" "}
              <span className={styles.higlightedText}>
                happy and satisfied clients.
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classNames(styles.flex, styles.aboutContainer)}>
        <Box className={classNames(styles.flex, styles.headerTextContainer)}>
          <Box className={styles.flex} sx={{ flexFlow: "column" }}>
            <Box
              className={styles.flex}
              sx={{ justifyContent: "center", margin: "1rem" }}
            >
              <Typography className={styles.headerText}>Why us</Typography>
            </Box>

            <Typography className={styles.contentText}>
              We and our project managers, engineers and designers are looking
              to set new standards in the industry, being{" "}
              <span className={styles.higlightedText}>
                fully transparent and practicing a fully organized design and
                construction approach{" "}
              </span>{" "}
              with the constant quest for top-class quality
            </Typography>
          </Box>
        </Box>
        <Box className={styles.imageContainer}>
          <Image src={Why} alt="team" width={1500} height={1500} />
          <a style={{fontSize: "0.5rem", float: "right"}} href="https://www.freepik.com/vectors/question">Designed by freepik</a>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
