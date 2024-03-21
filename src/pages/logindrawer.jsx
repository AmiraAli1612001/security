// import { Close, Home, Login } from '@mui/icons-material';
import { Box, Divider, Drawer, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../assets/images/logo.webp";
import { useTranslation } from "react-i18next";

const Logindrawer = (props) => {
  const { t } = useTranslation();


  const list = [
    {
      icon: (
        <LanguageIcon
          sx={{
            fontSize: "23px !important",
            margin: " 0px 8px",
          }}
        />
      ),
      text: t("Website"),
      path: "/",
    },
    {
      icon: (
        <EmailIcon
          sx={{
            fontSize: "23px !important",
            margin: " 0px 8px",
          }}
        />
      ),
      text: t("contact-us"),
      path: "/contact",
    },
    {
      icon: (
        <PersonAddIcon
          sx={{
            fontSize: "23px !important",
            margin: " 0px 8px",
          }}
        />
      ),
      text: t("sign-up-free"),
      path: "/login",
    },
    {
      icon: (
        <LoginIcon
          sx={{
            fontSize: "23px !important",
            margin: " 0px 8px",
          }}
        />
      ),
      text: t("portal-login"),
      path: "/login",
    },
  ];
  let drawerWidth = 240;
  return (
    <Drawer
      onClick={() => {
        props.setNoneOrBlock("none");
      }}
      className="drawer logDrawer"
      variant="temporary"
      //   anchor={drawerDirr}
      smooth="true"
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
      open={props.noneOrBlock}
      onClose={() => {
        // setPermanentOrTemporary("permanent");
        props.setNoneOrBlock("none");
      }}
    >
      {/* <Box sx={{backgroundColor:"#663cb1", padding :"10px"  , textAlign :"right"}}> */}
      {/* <Close  sx={{cursor :"pointer"}} onClick={() => {

          props.setNoneOrBlock("none")
          
        }}/> */}
      {/* </Box> */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia component="img" image={logo} />
      </Box>
      <Divider />

      {list.map((item) => {
        return (
          <Link to={item.path} onClick={() => {
          
      
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

        }} >
            {item.icon}
            {item.text}
          </Link>
        );
      })}
    </Drawer>
  );
};

export default Logindrawer;
