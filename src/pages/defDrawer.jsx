import React from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Divider,
  Drawer,
  Grid,
 
  Typography,
} from "@mui/material";
// import computer from "../assets/images/computer.webp";
import { Link, useNavigate } from "react-router-dom";
import eye from "../assets/images/eye.svg";
import hand from "../assets/images/hand.svg";
import scanner from "../assets/images/scanner.svg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../css/shares.css";
import "../css/style.css";

import { useTranslation } from "react-i18next";

const DefDrawer = (props) => {
  const { t } = useTranslation();

  // let [PermanentOrTemporary, setPermanentOrTemporary] = useState("permanent");
  // let [noneOrBlock, setNoneOrBlock] = useState("none");
  // let [drawerDir, setdrawerDir] = useState("left");
  let navigate = useNavigate();
  let drawerWidth = 240;
  const list = [
    { text: t("products"), path: "/" },
    { text: t("about-us"), path: "/about" },
    { text: t("price"), path: "/pricing" },
    { text: t("blog"), path: "/blog" },
    { text: t("contact"), path: "/contact" },
    { text: t("login"), path: "/login" },
  ];
  let boxes = [
    {
      icon: eye,
      title: "Cyber Platform",
      p: "Demystify Cyber Security is baked into everything we do, our platform is the perfect vehicle to help us deliver Cyber Serenity.",
      link: "LEARN MORE",
      path: "/cyber-platform",
    },
    {
      icon: hand,
      title: "Vulnerability Scanner",
      p: "Manage Internal & External Vulnerabilities, all reconciled against the Global Cyber Security Databases.",
      link: "LEARN MORE",
      path: "/vulnerability-scanner",
    },
    {
      icon: scanner,
      title: "Mobile Network Scanner",
      p: "Our Mobile Network scanner is the most advanced Cyber Utility in the Play Store and a top 10 common organic result for many Cyber Security.",
      link: "LEARN MORE",
      path: "/mobile-network",
    },
  ];
  return (
    <Drawer
      className="drawer"
      variant="temporary"
        anchor="left"
      smooth="true"
      onClick={() => {
        props.setNoneOrBlock("none");
      }}
      sx={{
        display: props.noneOrBlock,
        // display :"block",
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      open="true"
      onClose={() => {
        // setPermanentOrTemporary("temporary");
        props.setNoneOrBlock("none");
      }}
    >
      <Box
        sx={{ backgroundColor: "#663cb1", padding: "10px", textAlign: "right" }}
      >
        <Close
          sx={{ cursor: "pointer" }}
          onClick={() => {
            props.setNoneOrBlock("none");
          }}
        />
      </Box>

      <Divider />

      <Box className="menu">
        <Link
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {t("products")}
          <NavigateNextIcon />
        </Link>
        <Grid container className="dropdown">
          {boxes.map((item) => {
            return (
              <Grid
                item
                md={4}
                className="item"
                onClick={() => {
                  navigate(item.path);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Box>
                  <CardMedia
                    sx={{ width: "40px", height: "40px" }}
                    component="img"
                    image={item.icon}
                  />
                  <Typography variant="h4" color="inherit">
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {list.map((item) => {
        return <Link to={item.path}>{item.text}</Link>;
      })}
      <Link
        style={{
          textAlign: "center",
          width: "210px",
          padding: "10px",
          display: "block",
          margin: "auto",
        }}
        className="createA"
        to="/login"
      >
        {t("create-account")}
      </Link>
    </Drawer>
  );
};

export default DefDrawer;
