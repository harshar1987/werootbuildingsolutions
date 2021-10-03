import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Intro from "components/Introduction/Introduction";
import Services from "components/Services/Services";
import type { NextPage } from "next";
import React from "react";
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
