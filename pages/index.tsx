import type { NextPage } from "next";
import React from "react";
import Intro from "../components/intro";
import Services from "../components/services";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <Box className={styles.sectionDivider}>
        <Divider variant="middle" />
      </Box>
      <Services />
    </>
  );
};

export default Home;
