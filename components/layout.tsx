import FacebookIcon from "@mui/icons-material/Facebook";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import tree from "../public/tree.png";
import styles from "./layout.module.css";

function Header() {
  const router = useRouter();

  return (
    <Grid container spacing={2} className={styles.headerGridContainer}>
      <Grid item xs={12}>
        <Box className={classNames(styles.flex, styles.headerContainer)}>
          <HomeOutlinedIcon
            className={styles.headerLogo}
            onClick={(e) => router.push("/")}
          />
          <Box className={styles.headerCompanyContainer}>
            <Typography className={styles.headerCompanyName}>
              WeRoot Building Solutions
            </Typography>
            <Box className={classNames(styles.flex, styles.headerCompanySloganContainer)}>
              <Image src={tree} alt="tree" width={25} height={25}></Image>
              <Typography className={styles.headerCompanySlogan}>
                Rooting your dreams
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Box></Box>
      </Grid>
    </Grid>
  );
}

function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <Box className={classNames(styles.flex, styles.footerSocialIconsContainerBox)}>
        <Box className={styles.footerSocialIconsContainer}>
          <a
            href="https://www.facebook.com/WeRoot-Building-Solutions-101112895676552"
            target="_"
          >
            <FacebookIcon className={styles.footerSocialIcons} />
          </a>
        </Box>
        <Box className={styles.footerSocialIconsContainer}>
          <a href="https://www.instagram.com/" target="_">
            <InstagramIcon className={styles.footerSocialIcons} />
          </a>
        </Box>
        <Box className={styles.footerSocialIconsContainer}>
          <a
            href="https://www.youtube.com/channel/UCBTLOcST1BlVmW4ts31OBcA"
            target="_"
          >
            <YouTubeIcon className={styles.footerSocialIcons} />
          </a>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        className={classNames(styles.flex, styles.footerSectionGroupContainer)}
      >
        <Grid item>
          <Box
            className={classNames(
              styles.flex,
              styles.footerSectionContainer
            )}
          >
            <Link href="/about">
              <a>
                <Typography
                  className={styles.footerSectionHeader}
                  sx={{ textDecoration: "underline" }}
                >
                  About Us
                </Typography>
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item>
          <Box
            className={classNames(
              styles.flex,
              styles.footerSectionContainer
            )}
          >
            <Link href="/contact">
              <a>
                <Typography
                  className={styles.footerSectionHeader}
                  sx={{ textDecoration: "underline" }}
                >
                  Contact Us
                </Typography>
              </a>
            </Link>

            <Typography>
              <a href="mailto:werootsolutions@gmail.com">
                Email:{" "}
                <span style={{ textDecoration: "underline" }}>
                  werootsolutions@gmail.com
                </span>
              </a>
            </Typography>
            <Typography>Phone: +91 8884 8282</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box className={classNames(styles.footerSectionCopyrights)}>
        <Typography>© 2021 WeRoot Building Solutions.</Typography>
      </Box>
    </Box>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>WeRoot Building Solutions</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
