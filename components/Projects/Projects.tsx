import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import Fade from "@mui/material/Fade";
import VizSensor from "react-visibility-sensor";

type ImageData = {
  src: string;
  title?: string;
  rows?: number;
  cols?: number;
  width?: number;
  height?: number;
};

const imageData: ImageData[] = [
  {
    src: "/projects/1.png",
    rows: 5,
    width: 400,
    height: 600,
  },
  {
    src: "/projects/3.png",
    rows: 5,
    width: 400,
    height: 600,
  },
  {
    src: "/projects/2.png",
    rows: 5,
    width: 400,
    height: 600,
  },
  {
    src: "/projects/4.png",
    rows: 5,
    width: 400,
    height: 600,
  },
  {
    src: "/projects/5.png",
    rows: 5,
    width: 400,
    height: 600,
  },
  {
    src: "/projects/6.png",
    rows: 5,
    width: 400,
    height: 600,
  },
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [componentVisible, setComponentVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    if (mediaQuery.matches) {
      setIsMobile(true);
    }
  }, []);

  const imageCols = isMobile ? 1 : 7;

  return (
    <Fade in={componentVisible} timeout={3000}>
      <Box sx={{ margin: "1rem" }}>
        <Box
          className={classNames(
            styles.flex,
            styles.ourProjectsSectionContainer
          )}
        >
          <VizSensor
            onChange={(isVisible) => {
              if(!componentVisible){
                setComponentVisible(isVisible);
              }
            }}
          >
            <Typography className={styles.ourProjectsSectionText}>
              Our Projects
            </Typography>
          </VizSensor>
        </Box>
        <Box className={styles.flex} sx={{ justifyContent: "center" }}>
          <ImageList
            className={styles.imageList}
            variant="quilted"
            cols={imageCols}
          >
            {imageData.map((image) => (
              <ImageListItem
                key={image.src}
                cols={image.cols || 1}
                rows={image.rows || 1}
              >

                  <Box
                    component="img"
                    alt={image.title}
                    src={image.src}
                    height={isMobile ? "auto" : image.height}
                    width={isMobile ? "100%" : image.width}
                  ></Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Fade>
  );
}
