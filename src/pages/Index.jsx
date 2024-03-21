import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Home from "../components/html/Home";
import Footer from "../components/html/Footer";
import Header from "../components/html/Header";
import { Link } from "react-router-dom";
import videos from "../assets/images/h-video.mp4";
import Icons from "../components/html/Icons";
import Sections from "../components/html/Sections";
import Ai from "../assets/images/BG-Image.webp";
import Cyper from "../components/html/Cyper";
import img from "../assets/images/NCSC_White.webp";

import Roboways from "../components/html/Roboways";
import DefDrawer from "./defDrawer";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

const Index = () => {
  const { t, i18n } = useTranslation();

  let [PermanentOrTemporary, setPermanentOrTemporary] = useState("permanent");
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  // let [drawerDir, setdrawerDir] = useState("left");
  return (
    <Box >
      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer
        noneOrBlock={noneOrBlock}
        setNoneOrBlock={setNoneOrBlock}
        // PermanentOrTemporary={PermanentOrTemporary}
        // setPermanentOrTemporary={setPermanentOrTemporary}
        // drawerDir={drawerDir}
      />
     <Box>
       <Box
         className="video"
         sx={{
           overflow: "hidden",
           position: "relative",
           flexDirection: "column",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           height :"99.5vh"
         }}
       >
         <video src={videos} autoPlay loop muted style={{objectFit :"cover"}}></video>
         <Box className="layer"></Box>
      
         <Box
           sx={{
             position: "absolute",
             transform: "translateY(-50px)",
             marginTop: { xs: "20px", lg: "0px" },
           }}
         >
           <Typography variant="h1" color="initial">
             {t("cyber-security")}
           </Typography>
           <Typography variant="h5" color="initial" sx={{ fontSize: "18px" }}>
             {t("demy")}
           </Typography>
           <Box
             sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               gap: "5px",
               marginTop: "20px",
             }}
           >
             <Link
               to="/login"
               style={{textTransform :"capitalize"}}
             >
               {t("create-small")}
             </Link>
             <Link   to="/cyber-platform">{t("learn-more")}</Link>
           </Box>
         </Box>
       </Box>
       {/* <Home/> */}
       <Icons />
       <Sections />
       <Box
         className="AI-bg"
         sx={{
           display: "flex",
           justifyContent: "center",
           flexDirection: "column",
         }}
       >
         <Grid
           container
           sx={{ display: "flex", alignItems: "center", padding: "30px" }}
         >
           <Grid item x={9} lg={6}>
             <p style={{ fontSize: "40px" }}>{t("why-robo")}</p>
             <p className="p">{t("why-p-1")}</p>
             <p className="p">{t("why-p-2")}</p>
             <p className="p">{t("why-p-3")}</p>
             <p className="p">{t("why-p-4")}</p>
           </Grid>
         </Grid>
       </Box>
       <Cyper />
       <Roboways />
       <Box className="about-image">
         <CardMedia sx={{ margin: "auto" }} component="img" image={img} />
       </Box>
       <Footer />
      </Box>
     </Box>
  );
};

export default Index;
