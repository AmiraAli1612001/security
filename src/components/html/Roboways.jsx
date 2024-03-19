import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import one from "../../assets/images/one.webp";
import two from "../../assets/images/two.webp";
import three from "../../assets/images/three.webp";
import four from "../../assets/images/four.webp";
import { t } from "i18next";

const Roboways = () => {
  let roboWays = [
    {
      icon: one,
      title: t("robo-scan"),
      text: t("robo-p-1"),
    },
    {
      icon: two,
      title: t("robo-detect"),
      text: t("robo-p-2"),
    },
    { icon: three, title: t("robo-protect"), text: t("robo-p-3") },
    {
      icon: four,
      title: t("robo-Anticipate"),
      text: t("robo-p-4"),
    },
  ];
  return (
    <Box className="robo-way">
      <h1>{t("why-robo")}</h1>

      <Grid
        container
        className="line"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {roboWays.map((item) => {
          return (
            <Grid
              item
              xs={10}
              sm={6}
              md={3}
              className="item"
              sx={{ marginTop: "50px" }}
            >
              <CardMedia component="img" image={item.icon} />
              <p className="one">{item.title}</p>
              <p className="two">{item.text}</p>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Roboways;
