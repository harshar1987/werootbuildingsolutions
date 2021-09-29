import FacebookIcon from "@mui/icons-material/Facebook";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import tree from "../public/tree.png";
import styles from "./layout.module.css";

function Header() {
  const router = useRouter();

  return (
    <Grid container spacing={2} className={styles.headerGridContainer}>
      <Grid item xs={12}>
        <div className={styles.headerContainer}>
          <HomeOutlinedIcon className={styles.headerLogo} />
          <div className={styles.headerCompanyContainer}>
            <Typography className={styles.headerCompanyName}>
              We root building solutions
            </Typography>
            <div
              className={classNames(
                styles.flex,
                styles.flexDirectionRowReverse
              )}
            >
              <Image src={tree} alt="tree" width={25} height={25}></Image>
              <Typography className={styles.headerCompanySlogan}>
                Rooting your dreams
              </Typography>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

function Footer() {
  return (
    <Grid container spacing={2} className={styles.footerContainer}>
      <Grid item xs={12}>
        <div>
          <div
            className={classNames(styles.flex, styles.flexJustifyContentCenter)}
          >
            <div className={styles.footerSocialIconsContainer}>
              <a href="https://facebook.com" target="_">
                <FacebookIcon className={styles.footerSocialIcons} />
              </a>
            </div>
            <div className={styles.footerSocialIconsContainer}>
              <a href="https://www.instagram.com/" target="_">
                <InstagramIcon className={styles.footerSocialIcons} />
              </a>
            </div>
            <div className={styles.footerSocialIconsContainer}>
              <a href="https://www.youtube.com/" target="_">
                <YouTubeIcon className={styles.footerSocialIcons} />
              </a>
            </div>
          </div>
          <div
            className={classNames(
              styles.flex,
              styles.flexFlowColumnWrap,
              styles.flexAlignContentFlexEnd,
              styles.footerContactUsContainer
            )}
          >
            <div className={styles.footerContactUsText}>Contact Us</div>
            <div>Email: werootsolutions@gmail.com</div>
            <div>Phone: +91 7483979400</div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>We root building solutions</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
