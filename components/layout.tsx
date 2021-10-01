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
import Divider from "@mui/material/Divider";
import Logo from "./logo";

function Header() {
  const router = useRouter();

  return (
    <Grid container spacing={2} className={styles.headerGridContainer}>
      <Grid item xs={12} sx={{ paddingTop: "0px !important" }}>
        <Box className={styles.topNavigation}>
          <Box className={styles.topNavigationContentBox}>
            <Typography className={styles.topNavigationText}>
              + 91 8884 8282 11
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            className={styles.topNavigationContentDivider}
            flexItem
          />
          <Box className={styles.topNavigationContentBox}>
            <Link href="/about">
              <a>
                <Typography
                  className={styles.topNavigationText}
                  sx={{ textDecoration: "underline" }}
                >
                  About us
                </Typography>
              </a>
            </Link>
          </Box>
          <Divider
            orientation="vertical"
            className={styles.topNavigationContentDivider}
            flexItem
          />
          <Box className={styles.topNavigationContentBox}>
            <Link href="/about">
              <a>
                <Typography
                  className={styles.topNavigationText}
                  sx={{ textDecoration: "underline" }}
                >
                  Contact us
                </Typography>
              </a>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: "8px !important" }}>
        <Box className={classNames(styles.flex, styles.headerContainer)}>
          {/* <HomeOutlinedIcon
            className={styles.headerLogo}
            onClick={(e) => router.push("/")}
          /> */}
          {/* <Image src={GVLOGO} alt="home" width={75} height={75}/> */}
          <Box className={styles.headerLogo}>
            <Logo style={{ fill: "rgb(82,33,39)" }} />
          </Box>
          <Box className={styles.headerCompanyContainer}>
          <Box className={styles.flex}>
            <Typography className={styles.headerCompanyName}>
              WeRoot Building Solutions
            </Typography>
            </Box>
            <Box className={styles.flex}>
              <Typography className={styles.headerCompanySlogan}>
                Rooting your dreams...
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <Box
        className={classNames(
          styles.flex,
          styles.footerSocialIconsContainerBox
        )}
      >
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
            className={classNames(styles.flex, styles.footerSectionContainer)}
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
            className={classNames(styles.flex, styles.footerSectionContainer)}
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
            <Typography>Phone: +91 8884 8282 11</Typography>
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
