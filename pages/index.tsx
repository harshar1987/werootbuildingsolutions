import type { NextPage } from "next";
import React from "react";
import Intro from "components/Introduction/Introduction";
import Services from "components/Services/Services";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import styles from "./index.module.css";
import { SnackbarProvider } from "notistack";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 104, 20, 1)",
    },
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Intro />
        <Box className={styles.sectionDivider}>
          <Divider variant="middle" />
        </Box>
        <Services />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Home;
