import { Avatar, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import classNames from "classnames";
import React, { useState } from "react";
import Team from "../public/team.jpg";
import Why from "../public/why.jpg";
import styles from "./about.module.css";
import Fade from "@mui/material/Fade";
import VizSensor from "react-visibility-sensor";
import WhyUs from "public/whyus.png";

type Person = {
  name: string;
  role: string;
  education: string;
  description: string;
  avatar: string;
  avatarWidth?: number;
  avatarHeight?: number;
};

const ourTeam: Person[] = [
  {
    name: "Deepak Bharadwaj G.V",
    role: "Head - Design and Engineering",
    education: "B.E(Civil), M.Tech(Structures), MIE, CEng, RV (L&B)",
    description:
      "Around 10+ years of handful experience in Design and Engineering having worked on various designs across various sectors like Airports, Commercial buildings, Residential buildings Power plants.",
    avatar: "deepak.png",
  },
  {
    name: "Venkatesha N",
    role: "Head – Projects",
    education: "BE (Civil), M-Tech (Structures)",
    description:
      "Around 12+ years of diversified experience in both Design as well as construction with skillsets on High Rise residential buildings, Villas & Commercial buildings.",
    avatar: "venkatesh.png",
  },
  {
    name: "Shashidhara K M",
    role: "Head – Marketing",
    education: "MBA (Marketing)",
    description:
      "With over 15+ years of experience in the field of marketing. Pioneered and has achieved various milestones during his entire journey.",
    avatar: "shashi.png",
  },
  {
    name: "Divya Shashidhara",
    role: "Head – Environmental & CSR",
    education: "M-Sc, B-Ed",
    description:
      "With overall 13+ years of experience in the field of teaching & social service. Founder of Karnataka Women Power Empowerment & Dhatri Educare.",
    avatar: "divya.png",
  },
];

function About() {
  const [whoAreWeVisible, setWhoAreWeVisible] = useState(false);
  const [whyUsVisible, setWhyUsVisible] = useState(false);
  const [ourTeamVisible, setOurTeamVisible] = useState(false);
  const [visibleAvatars, setVisibleAvatars] = useState<Array<string>>([]);

  return (
    <Box>
      <Fade in={whoAreWeVisible} timeout={3000}>
        <Box className={classNames(styles.flex, styles.aboutContainer)}>
          <Box className={styles.imageContainer} width="50%">
            <Box
              src={Team}
              alt="team"
              component="img"
              width="100%"
              height="auto"
            />
            <a
              style={{ fontSize: "0.25rem" }}
              href="https://www.freepik.com/vectors/people"
              target="blank"
            >
              Designed by pch.vector
            </a>
          </Box>
          <Box
            className={classNames(styles.flex, styles.headerTextContainer)}
            width="50%"
          >
            <Box className={styles.flex} sx={{ flexFlow: "column" }}>
              <Box
                className={styles.flex}
                sx={{ justifyContent: "center", margin: "1rem" }}
              >
                <VizSensor
                  onChange={(isVisible) => {
                    setWhoAreWeVisible(isVisible);
                  }}
                >
                  <Typography className={styles.headerText}>
                    Who we are
                  </Typography>
                </VizSensor>
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
      </Fade>
      <Fade in={whyUsVisible} timeout={3000}>
        <Box className={classNames(styles.flex, styles.aboutContainer)}>
          <Box
            className={classNames(styles.flex, styles.headerTextContainer)}
            width="50%"
          >
            <Box className={styles.flex} sx={{ flexFlow: "column" }}>
              <Box
                className={styles.flex}
                sx={{ justifyContent: "center", margin: "1rem" }}
              >
                <VizSensor
                  onChange={(isVisible) => {
                    setWhyUsVisible(isVisible);
                    setVisibleAvatars([]);
                  }}
                >
                  <Typography className={styles.headerText}>Why us</Typography>
                </VizSensor>
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
              <Box className={styles.whyUsImageContainer}>
                <Box
                  component="img"
                  src={WhyUs}
                  alt="Why us"
                  className={styles.whyUsImage}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.imageContainer} width="50%">
            <Box
              src={Why}
              alt="why"
              component="img"
              width="100%"
              height="auto"
            />
            <a
              style={{ fontSize: "0.25rem", float: "right" }}
              href="https://www.freepik.com/vectors/question"
              target="blank"
            >
              Designed by freepik
            </a>
          </Box>
        </Box>
      </Fade>

      <Box className={styles.aboutContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Fade in={ourTeamVisible} timeout={3000}>
              <Box
                className={classNames(styles.flex, styles.meetTheTeamHeader)}
              >
                <VizSensor
                  onChange={(isVisible) => {
                    setOurTeamVisible(isVisible);
                  }}
                >
                  <Typography className={styles.headerText}>
                    Our team
                  </Typography>
                </VizSensor>
              </Box>
            </Fade>
          </Grid>
          {ourTeam.map((person) => (
            <Grid item xs={12} sm={6} key={person.name}>
              <Fade
                in={visibleAvatars.length !== 0}
                timeout={3000}
                key={person.name}
              >
                <Box>
                  <Box className={styles.avatarImageContainer}>
                    <Avatar
                      alt={person.name}
                      sx={{
                        width: person.avatarWidth ?? 250,
                        height: person.avatarHeight ?? 250,
                        margin: "2rem",
                      }}
                    >
                      <VizSensor
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setVisibleAvatars([...visibleAvatars, person.name]);
                          }
                        }}
                        key={person.name}
                      >
                        <Box
                          src={person.avatar}
                          alt={person.name}
                          component="img"
                          width="100%"
                          height="auto"
                        />
                      </VizSensor>
                    </Avatar>
                  </Box>

                  <Typography className={styles.avatarName}>
                    {person.name}
                  </Typography>

                  <Typography className={styles.avatarTitle}>
                    {person.role}
                  </Typography>
                  <Typography className={styles.avatarDescription}>
                    {person.education}
                  </Typography>
                  <Box
                    className={classNames(
                      styles.flex,
                      styles.avatarDescriptionContainer
                    )}
                  >
                    <Typography className={styles.avatarDescription}>
                      {person.description}
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
