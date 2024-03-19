import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      className="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={10} md={3}>
          <Typography variant="h4" color="inherit">
            {t("contact-us")}
          </Typography>
          <Typography variant="h6" color="inherit">
            {t("email")}
          </Typography>
          <p>hello@roboshadow.com</p>
          <Typography variant="h6" color="inherit">
            {t("phone")}
          </Typography>
          <p>+44 20 300 53729</p>
          <Typography variant="h6" color="inherit">
            {t("head-office")}
          </Typography>

          <p>RoboShadow</p>
          <p>64 Great Eastern St</p>
          <p>London</p>
          <p>EC2A 3QR, UK</p>
          <Box className="icons">
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
            <RedditIcon />
          </Box>
        </Grid>
        <Grid item xs={10} md={3}>
          <Typography variant="h4" color="inherit">
            {t("site-map")}
          </Typography>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("home")}
          </Link>

          <Typography variant="h6" color="inherit">
            {t("products")}
          </Typography>
          <Link
            className="margin"
            to="/cyber-platform"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("cyber-platform")}
          </Link>
          <Link
            className="margin"
            to="/vulnerability-scanner"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("vulnerability-scanner")}
          </Link>
          <Link
            className="margin"
            to="/mobile-network"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("andriod")}
          </Link>
          <Link
            className="margin"
            to="/pricing"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("price")}
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("contact-us")}
          </Link>
          <Link
            to="/about"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("about-us")}
          </Link>
        </Grid>
        <Grid item xs={10} md={3}>
          <Typography variant="h4" color="inherit">
            {t("legal")}
          </Typography>

          <Link
            to="/portal"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("portal")}
          </Link>
          <Link
            to="/privacy"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("privacy")}
          </Link>
          <Link
            to="/cookie"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("cookie")}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
