import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import home from "../public/home.png";

const Home: NextPage = () => {
  const [imageHeight, setImageHieght] = useState(0);

  const setParentRef = (element: HTMLDivElement) => {
    if (element) {
      const navigationRect =
        element.parentElement?.firstElementChild?.getBoundingClientRect();
      const navigationHeight = navigationRect?.height ?? 0;
      const navigationTop = navigationRect?.top ?? 0;
      const imageHeight = window.innerHeight - navigationHeight - navigationTop;
      setImageHieght(imageHeight);
    }
  };
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: `${imageHeight}px`
        }}
        ref={setParentRef}
      >
        <Paper
         elevation={0}
          sx={{
            width: "45%",
            position: "absolute",
            height: "500px",
            top: "150px",
            left: "10px",
            padding: 10
          }}
        >
          <Image src={home} alt="home" layout="fill" />
        </Paper>
        <Paper
          elevation={0}
          style={{
            width: "50%",
            position: "absolute",
            height: "23rem",
            top: "150px",
            right: "10px",
            padding: 10,
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              component="h1"
              sx={{ fontSize: "32px", fontWeight: 600 }}
            >
              Dream big !!
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: "32px",
                fontWeight: 600,
                display: "flex",
                color: "rgba(0,104,20,1)",
                marginLeft: 1,
              }}
            >
              and worry not
            </Typography>
          </div>
          <Typography component="h1" sx={{ fontSize: "24px", fontWeight: 550 }}>
            We are here to assist you to root your dreams into reality
          </Typography>
          <Typography
            component="p"
            sx={{ marginTop: "10px", fontSize: "20px" }}
          >
            <span style={{color: "rgba(0,104,20,1)", fontWeight: "bold"}}>We Root Building Solutions</span> is evolved to provide building solutions
            with optimized and innovative state of art designs, utilizing
            specialized expertise from our experienced engineers.
          </Typography>
          <Typography
            component="p"
            sx={{ marginTop: "10px", fontSize: "20px" }}
          >
            Our businesses is characterized by professionalism and high
            standards utmost focus on delivering high quality service to our
            clients
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(0,104,20,1)",
              fontSize: "1.25rem",
              marginTop: "1.5rem",
              textTransform: "capitalize",
              "&:hover": {
                background: "rgba(0,120,0,1)"
              },
            }}
          >
            Contact us
          </Button>
          <Button
            variant="text"
            color="secondary"
            sx={{
              marginLeft: 2,
              color: "rgba(0,104,20,1)",
              fontSize: "1.25rem",
              textTransform: "capitalize",
              borderColor: "rgba(0,120,0,1)",
              textDecoration: "underline",
              marginTop: "1.5rem",
              "&:hover": {
                background: "#fff",
                color: "rgba(0,104,20,1)",
                textDecoration: "underline",
              },
            }}
          >
            More about us
          </Button>
        </Paper>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          zIndex: 1,
          height: "150px",
          background: "rgba(34,60,0,1)",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "10px",
            width: "350px",
            color: "#fff",
            margin: "20px",
          }}
        >
          <Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </Typography>
          {/* <Typography>We Root Building Solutions</Typography>
          <Typography>No. 258, 2nd Floor</Typography>
          <Typography>7th main, BCC Layout</Typography>
          <Typography>Bengaluru – 560040</Typography> */}
          <Typography>E-Mail: werootsolutions@gmail.com</Typography>
          <Typography>Mobile: 7483979400</Typography>
        </div>
        <div
          style={{
            position: "absolute",
            left: "10px",
            bottom: "0px",
            width: "350px",
            color: "#fff",
            margin: "20px",
          }}
        >
          <Typography>© Copyright 2021 All rights reserved</Typography>
        </div>
      </Box>
    </>
  );
};

export default Home;
