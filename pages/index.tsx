import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import home from "../public/home.png";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className={styles.flex}>
            <div className={styles.homeImage}>
              <Image src={home} alt="home" width={4000} height={3000} />
            </div>
            <div className={styles.homeContent}>
              <Grid container spacing={0} sx={{ margin: "0.5rem" }}>
                <Grid item xs={12}>
                  <Typography
                    component="h1"
                    sx={{ fontSize: 32, fontWeight: 600 }}
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
                      We Root Building Solutions
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
                  <Grid container spacing={0}>
                    <Grid item>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "rgba(0,104,20,1)",
                          fontSize: "1.25rem",
                          marginTop: "1.5rem",
                          textTransform: "capitalize",
                          "&:hover": {
                            background: "rgba(0,120,0,1)",
                          },
                        }}
                      >
                        Contact us
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="secondary"
                        sx={{
                          marginLeft: 2,
                          color: "rgba(0,104,20,1)",
                          fontSize: "1.25rem",
                          textTransform: "capitalize",
                          borderColor: "rgba(0,120,0,1)",
                          marginTop: "1.5rem",
                          "&:hover": {
                            background: "rgba(0,104,20,1)",
                            color: "#fff",
                          },
                        }}
                      >
                        More about us
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
