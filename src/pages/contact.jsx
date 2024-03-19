import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import img from "../assets/images/NCSC_White.webp";
import london from "../assets/images/London.jpg";
import aus from "../assets/images/Australia.jpg";
import ind from "../assets/images/India.webp";
import DefDrawer from "./defDrawer";

import "../css/shares.css";
import "../css/style.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  let [PermanentOrTemporary, setPermanentOrTemporary] = useState("permanent");
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  // let [drawerDir, setdrawerDir] = useState("left");
  const { t, i18n } = useTranslation();

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
      <Box className="contact">
        <Grid container className="grid">
          <Grid item xs={10} lg={4.5} className="left">
            <Typography variant="h1" color="initial">
              {t("contact-us")}
            </Typography>
            <p className="one">{t("contact-p-one")}</p>
            <p className="two">{t("email")}</p>
            <p className="three">hello@roboshadow.com</p>
            <p className="two">{t("phone")}</p>
            <p className="three">+44 20 300 53729</p>
          </Grid>
          <Grid item xs={10} md={4.5}>
            <form>
              <h1>{t("get-touch")}</h1>
              <label htmlFor="">
                {t("name")}
                <span>*</span>
              </label>
              <input type="text" />
              <label htmlFor="">
                {t("email")} <span>*</span>
              </label>
              <input type="email" />
              <label htmlFor="">
                {t("phone")}
                <span>*</span>
              </label>
              <input type="tel" />
              <label htmlFor="">
                {t("msg")} <span>*</span>
              </label>

              <textarea></textarea>
              <input type="submit" className="submit" value={t("submit")} />
            </form>
          </Grid>
        </Grid>
      </Box>

      <Box className="country">
        <Grid container sx={{ backgroundColor: "black", color: "white" }}>
          <Grid
            className="half"
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: { xs: "20px", md: "100px" },
            }}
          >
            <h1>{t("london-title")}</h1>
            <h2>{t("london-off")}</h2>
            <p className="first">{t("london-sh")}</p>
            <p>{t("london-great")}</p>
            <p>{t("london")}</p>
            <p>{t("london-E")}</p>
          </Grid>

          <Grid className="half" item xs={12} md={6}>
            <CardMedia component="img" image={london} />
          </Grid>
          <Grid className="half" item xs={12} md={6}>
            <CardMedia component="img" image={aus} />
          </Grid>
          <Grid
            className="half"
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: { xs: "20px", md: "100px" },
            }}
          >
            <h1>{t("aus-title")}</h1>
            <h2>{t("aus-off")}</h2>
            <p>{t("aus-sh")}</p>
            <p>{t("aus-great")}</p>
            <p>{t("aus")}</p>
            <p>{t("aus-E")}</p>
          </Grid>
          <Grid
            className="half"
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: { xs: "20px", md: "100px" },
            }}
          >
            <h1>{t("ind-title")}</h1>
            <h2>{t("ind-off")}</h2>
            <p>{t("london-sh")}</p>
            <p>{t("ind-great")}</p>
            <p>{t("ind")}</p>
            <p>{t("ind-E")}</p>
          </Grid>
          <Grid className="half" item xs={12} md={6}>
            <CardMedia component="img" image={ind} />
          </Grid>
        </Grid>
      </Box>

      <Box className="image">
        <CardMedia
          sx={{ marginLeft: { xs: "0px", lg: "200px" } }}
          component="img"
          image={img}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
