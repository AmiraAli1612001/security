import { Box, CardMedia, Grid } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import Icons from "../components/html/Icons";
import Sections from "../components/html/Sections";
import Roboways from "../components/html/Roboways";
import img from "../assets/images/NCSC_White.webp";
import Home from "../components/html/Home";
import { Link } from "react-router-dom";
import Monitor from "../assets/images/monitor.webp";

import DefDrawer from "./defDrawer";
import Comma from "../components/html/Comma";
import Who from "../components/html/Who";
import OurBlog from "../components/html/OurBlog";
import computer from "../assets/images/computer.webp";
import image from "../assets/images/background.webp";
import { t } from "i18next";

const Cyber = () => {
  let home = {
    title: t("cyber-platform"),
    text: t("cyber-p"),
    icon: Monitor,
    img: computer,
    background: image,
  };
  let [PermanentOrTemporary, setPermanentOrTemporary] = useState("permanent");
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
      <Icons />
      <Sections />
      <Roboways />

      <Comma />
      <Who />
      <OurBlog />
      <Box className="about-image">
        <CardMedia sx={{ margin: "auto" }} component="img" image={img} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Cyber;
