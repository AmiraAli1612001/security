import { Box, CardMedia, Grid } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import Home from "../components/html/Home";
import DefDrawer from "./defDrawer";
import { Link } from "react-router-dom";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BugReportIcon from "@mui/icons-material/BugReport";
import HubIcon from "@mui/icons-material/Hub";
import LanIcon from "@mui/icons-material/Lan";
import { t } from "i18next";
import Roboways from "../components/html/Roboways";
import img from "../assets/images/NCSC_White.webp";
import ico from "../assets/images/Robo - ANS.svg";
import { useTranslation } from "react-i18next";

import scan from "../assets/images/Mobile-Scan.webp";
const Mobile = () => {
  const { t, i18n } = useTranslation();

  let lay = [
    {
      icon: <PhoneAndroidIcon />,
      h1: t("lay-h1-1"),
      p: t("lay-p"),
      pt: t("lay-pt"),
    },
    {
      icon: <BugReportIcon />,
      h1: t("lay-h1-2"),
      p: t("lay-p-2"),
      pt: t("lay-pt-2"),
    },
    {
      icon: <HubIcon />,
      h1: t("lay-h1-3"),
      p: t("lay-p-3"),
      pt: t("lay-pt-3"),
    },
    {
      icon: <LanIcon />,
      h1: t("lay-h1-4"),
      p: t("lay-p-4"),
      pt: t("lay-pt-4"),
    },
  ];
  let home = {
    title: t("mobile-h1"),
    text: t("mobile-p"),
    icon: ico,
    background: scan,
  };
  // let [PermanentOrTemporary, setPermanentOrTemporary] = useState("permanent");
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  // let [drawerDir, setdrawerDir] = useState("left");
  return (
    <Box>
      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer
        noneOrBlock={noneOrBlock}
        setNoneOrBlock={setNoneOrBlock}
        // PermanentOrTemporary={PermanentOrTemporary}
        // setPermanentOrTemporary={setPermanentOrTemporary}
        // drawerDir={drawerDir}
      />
      <Home home={home} />

      <Box className="protect">
        <Box sx={{ width: { xs: "90vw", md: "80vw" }, margin: "auto" }}>
          <h1>{t("mobile-cyber-h1")}</h1>
          <p>{t("mobile-cyber-p1")}</p>
          <ul>
            <li>{t("mobile-cyber-li-1")}</li>
            <li>{t("mobile-cyber-li-2")}</li>
            <li>{t("mobile-cyber-li-3")}</li>
            <li>{t("mobile-cyber-li-4")}</li>
          </ul>
          <p className="two">{t("mobile-cyber-p2")}</p>
          <Link to="">{t("mobile-cyber-d")}</Link>
        </Box>
      </Box>

      <Box class="lay">
        <Grid
          container
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            padding:  {xs :"10px", lg  :"40px",},
            backgroundColor: "rgba(3, 12, 40, 0.6) ",
          }}
        >
          {lay.map((item) => {
            return (
              <Grid
                item
                xs={10}
                lg={2.8}
                className="item"
                sx={{ height: { xs: "90vh", md: "80vh" } }}
              >
                <Box className="layery" >
                  {item.icon}
                  <h2>{item.h1} </h2>
                  <p className="one">{item.p}</p>
                  <p>{item.pt}</p>
                </Box>
              </Grid>
            );
          })}
          {/* <Grid item xs={10} sm={5} md={3} className='item'>

                    <PhoneAndroidIcon/>
            <h2>Android </h2>
            <p className="one">Scanner</p>
        <p>Our mobile vulnerability scanner was originally built to demonstrate the simplicity we felt was needed in the Cyber Security industry. Our free app has since gone viral, allowing people and businesses all over the world to increase their Cyber Security posture for free, in a few short taps.</p>

                    </Grid> */}
        </Grid>
      </Box>

      <Roboways />

      <Box className="labtop">
        <Box>
          <p>{t("upgrade")}</p>
          <h2>{t("cyber-platform")}</h2>
          <Box className="links">
            <Link>{t("create-account")}</Link>
            <Link>{t("discover-more")}</Link>
          </Box>
        </Box>
      </Box>
      <Box className="about-image">
        <CardMedia sx={{ margin: "auto" }} component="img" image={img} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Mobile;

// <Box className="self-mob">
// <Grid container>
//     <Grid item xs = {10} sm={5} md={3} className="item">
//         <Box className="layer">
//             <PhoneAndroidIcon/>
//             <h2>Android Scanner</h2>
//             <p>Our mobile vulnerability scanner was originally built to demonstrate the simplicity we felt was needed in the Cyber Security industry. Our free app has since gone viral, allowing people and businesses all over the world to increase their Cyber Security posture for free, in a few short taps.</p>

//         </Box>
//     </Grid>

// </Grid>
// </Box>
