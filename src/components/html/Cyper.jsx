import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Cyper = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box className="about-discover">
      <Box className="center" >
        <p>{t("use")}</p>
        <h1>{t("cyber-platform")}</h1>
        <h2>{t("complete")}</h2>
        <Box className="links">
          <Link to="/login" style={{ transform: "translateY(25%)" }}>
            {t("create-account")}
          </Link>
          <Link to="/cyber-platform">{t("discover-more")}</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Cyper;
