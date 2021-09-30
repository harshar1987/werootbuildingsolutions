import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import React from "react";
import home from "../public/home.png";
import styles from "./intro.module.css";

const Intro = () => {
  return (
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
                  component="h1"
                  sx={{ fontSize: "2.5rem", fontWeight: 600, marginTop: 5 }}
                >
                  Dream big !!{" "}
                  <span className={styles.higlightedText}>and worry not</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component="h1"
                  sx={{ fontSize: 24, fontWeight: 550 }}
                >
                  We are here to assist you to root your dreams into reality
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" sx={{ fontSize: 20, marginTop: 1 }}>
                  <span className={styles.higlightedText}>
                    WeRoot Building Solutions
                  </span>{" "}
                  is evolved to provide building solutions with optimized and
                  innovative state of art designs, utilizing specialized
                  expertise from our experienced engineers.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" sx={{ marginTop: 1, fontSize: 20 }}>
                  Our businesses is characterized by professionalism and high
                  standards utmost focus on delivering high quality service to
                  our clients.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={0} sx={{justifyContent: "center"}}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={styles.primaryButton}
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
  );
};

export default Intro;