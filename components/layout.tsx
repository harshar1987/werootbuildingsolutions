import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import tree from "../public/tree.png";

function Navigation() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        background: "rgba(34,60,0,1)",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              paddingBottom: "16px",
              paddingLeft: "12px",
              "&:hover": {
                background: "rgba(34,52,0,1)",
                cursor: "pointer",
              },
            }}
            onClick={(e) => {
              router.push("/");
            }}
          >
            <div
              style={{
                marginRight: "12px",
                marginTop: "10px",
              }}
            >
              <Box>
                <HomeOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: "2rem",
                  }}
                />
              </Box>
            </div>
            <div
              style={{
                paddingLeft: "14px",
              }}
            >
              <div>
                <Typography
                  style={{
                    color: "#fff",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    padding: "5px 5px 0px 5px",
                  }}
                >
                  We root building solutions
                </Typography>
              </div>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Image src={tree} alt="tree" width={25} height={25}></Image>
                <Typography
                  style={{
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    float: "right",
                    color: "#fff",
                    paddingRight: "5px",
                    fontFamily: "cursive",
                  }}
                >
                  Rooting your dreams
                </Typography>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
