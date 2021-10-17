import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import styles from "./Layout.module.css";
import Logo from "./Logo";
import { layoutData, layoutContent, layoutRoutes, layoutSocialIcons } from "./Layout.data";

function Header() {
  const router = useRouter();

  return (
    <Grid container spacing={2} className={styles.headerGridContainer}>
      <Grid item xs={12} sx={{ paddingTop: "2px !important" }}>
        <Box className={styles.topNavigation}>
          <Box className={styles.topNavigationContentBox}>
            <a href={`tel: ${layoutData.phoneNumber}`}>
              <Typography className={styles.topNavigationText}>
                {layoutData.phoneNumber}
              </Typography>
            </a>
          </Box>
          <Divider
            orientation="vertical"
            className={styles.topNavigationContentDivider}
            flexItem
          />
          <Box className={styles.topNavigationContentBox}>
            <Link href={layoutRoutes.about}>
              <a>
                <Typography className={styles.topNavigationText}>
                  {layoutContent.aboutUs}
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
            <Link href={layoutRoutes.contact}>
              <a>
                <Typography className={styles.topNavigationText}>
                  {layoutContent.contactUs}
                </Typography>
              </a>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: "8px !important" }}>
        <Box className={classNames(styles.flex, styles.headerContainer)} >
          <Box className={styles.headerLogo} onClick={e => router.push("/")}>
            <Logo style={{ fill: "rgb(82,33,39)" }} />
          </Box>
          <Box className={styles.headerCompanyContainer} onClick={e => router.push("/")}>
            <Box className={styles.flex}>
              <Typography className={styles.headerCompanyName}>
                {layoutData.companyName1}
              </Typography>
            </Box>
            <Box className={styles.flex}>
              <Typography className={styles.headerCompanySlogan}>
                {layoutData.companyName2}
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
            href={layoutSocialIcons.faceBook}
            target="_"
          >
            <FacebookIcon className={styles.footerSocialIcons} />
          </a>
        </Box>
        <Box className={styles.footerSocialIconsContainer}>
          <a href={layoutSocialIcons.instagram} target="_">
            <InstagramIcon className={styles.footerSocialIcons} />
          </a>
        </Box>
        <Box className={styles.footerSocialIconsContainer}>
          <a
            href={layoutSocialIcons.youtube}
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
            <Link href={layoutRoutes.about}>
              <a>
                <Typography
                  className={styles.footerSectionHeader}
                  sx={{ textDecoration: "underline" }}
                >
                  {layoutContent.aboutUs}
                </Typography>
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item>
          <Box
            className={classNames(styles.flex, styles.footerSectionContainer)}
          >
            <Link href={layoutRoutes.contact}>
              <a>
                <Typography
                  className={styles.footerSectionHeader}
                  sx={{ textDecoration: "underline" }}
                >
                  {layoutContent.contactUs}
                </Typography>
              </a>
            </Link>

            <a href={`mailto:${layoutData.email}`}>
              <Typography>
                Email:{" "}
                <span className={styles.footerContactUs}>
                  {layoutData.email}
                </span>
              </Typography>
            </a>

            <a href={`tel: ${layoutData.phoneNumber}`}>
              <Typography>
                Phone:{" "}
                <span className={styles.footerContactUs}>
                  {" "}
                  {layoutData.phoneNumber}{" "}
                </span>
              </Typography>
            </a>
          </Box>
        </Grid>
      </Grid>

      <Box className={classNames(styles.footerSectionCopyrights)}>
        <Typography>© 2021 {layoutData.companyName1}{" "}{layoutData.companyName2}.</Typography>
      </Box>
    </Box>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>{layoutData.companyName1}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
