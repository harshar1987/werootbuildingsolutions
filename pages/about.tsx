import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Team from "../public/team.jpg";
import Why from "../public/why.jpg";
import Deepak from "../public/deepak.png";
import Divya from "../public/divya_2.png"
import { Avatar, Grid, Typography } from "@mui/material";
import styles from "./about.module.css";
import classNames from "classnames";

function About() {
  return (
    <Box>
      <Box className={classNames(styles.flex, styles.aboutContainer)}>
        <Box className={styles.imageContainer}>
          <Image src={Team} alt="team" width={2000} height={1500} priority={true}/>
          <a
            style={{ fontSize: "0.25rem" }}
            href="https://www.freepik.com/vectors/people"
            target="blank"
          >
            Designed by pch.vector
          </a>
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
              We are young and dynamic engineers specialized in the field of{" "}
              <span className={styles.higlightedText}>
                Design, Engineering and Construction{" "}
              </span>
              with a belief in{" "}
              <span className={styles.higlightedText}>
                absolute reliability, top quality and the long-term success{" "}
              </span>{" "}
              and with the belief that a true success of our business is by
              having happy and satisfied clients.
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
          <Image src={Why} alt="why" width={1500} height={1500} priority={true} />
          <a
            style={{ fontSize: "0.25rem", float: "right" }}
            href="https://www.freepik.com/vectors/question"
            target="blank"
          >
            Designed by freepik
          </a>
        </Box>
      </Box>
      <Box
        className={classNames(styles.flex, styles.aboutContainer)}
        sx={{ justifyContent: "center" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className={classNames(styles.flex, styles.meetTheTeamHeader)}>
              <Typography className={styles.headerText}>Our team</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Grid
                container
                className={classNames(styles.flex, styles.avatarGridContainer)}
              >
                <Grid item className={styles.avatarGridItem}>
                  <Box>
                    <Box className={styles.avatarImageContainer}>
                      <Avatar
                        alt="Deepak"
                        sx={{ width: 250, height: 250, margin: "2rem" }}
                      >
                        <Image
                          src={Deepak}
                          alt="deepak"
                          width={800}
                          height={800}
                        />
                      </Avatar>
                    </Box>
                    <Typography className={styles.avatarName}>
                      Deepak Bharadwaj G.V
                    </Typography>
                    <Typography className={styles.avatarTitle}>
                      Head - Design and Engineering
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      B.E(Civil), M.Tech(Structures), MIE, CEng, RV (L&amp;B)
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      10 years of industry expertise in construction and
                      structural design.
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      Previously worked at L&amp;T, Sterling &amp; Wilson,
                      Statkraft.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item className={styles.avatarGridItem}>
                  <Box>
                    <Box className={styles.avatarImageContainer}>
                      <Avatar
                        alt="Deepak"
                        sx={{ width: 250, height: 250, margin: "2rem" }}
                      >
                        <Image
                          src={Deepak}
                          alt="deepak"
                          width={800}
                          height={800}
                        />
                      </Avatar>
                    </Box>
                    <Typography className={styles.avatarName}>
                      Venkatesha N
                    </Typography>
                    <Typography className={styles.avatarTitle}>
                      Head - Projects
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      B.E(Civil), M-Tech(Structures)
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      10 years of industry expertise in construction and
                      structural design.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item className={styles.avatarGridItem}>
                  <Box>
                    <Box className={styles.avatarImageContainer}>
                      <Avatar
                        alt="Deepak"
                        sx={{ width: 250, height: 250, margin: "2rem" }}
                      >
                        <Image
                          src={Deepak}
                          alt="deepak"
                          width={800}
                          height={800}
                        />
                      </Avatar>
                    </Box>
                    <Typography className={styles.avatarName}>
                      Shashidhara K M
                    </Typography>
                    <Typography className={styles.avatarTitle}>
                      Head - Marketing &amp; Finance
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      M.B.A (Marketing)
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      10 years of industry expertise in marketing and
                      finance management.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item className={styles.avatarGridItem}>
                  <Box>
                    <Box className={styles.avatarImageContainer}>
                      <Avatar
                        alt="Divya"
                        sx={{ width: 250, height: 250, margin: "2rem" }}
                      >
                        <Image
                          src={Divya}
                          alt="divya"
                          width={800}
                          height={800}
                        />
                      </Avatar>
                    </Box>
                    <Typography className={styles.avatarName}>
                      Divya Shashidhar 
                    </Typography>
                    <Typography className={styles.avatarTitle}>
                      Head - Environmental &amp; CSR
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      M.Sc
                    </Typography>
                    <Typography className={styles.avatarDescription}>
                      10 years of industry expertise in evironment and
                      CSR.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
