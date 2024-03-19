import React, { useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import { Box } from "@mui/material";
import "../css/shares.css";
import "../css/style.css";
import LegalTop from "../components/html/legalTop";
import { Link } from "react-router-dom";
import DefDrawer from "./defDrawer";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Cookie = () => {
  const { t, i18n } = useTranslation();

  let legal = {
    title: t("cookie-top"),
  };
  let [PermanentOrTemporary, setPermanentOrTemporary] = useState("permanent");
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  // let [drawerDir, setdrawerDir] = useState("left");
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer
        noneOrBlock={noneOrBlock}
        setNoneOrBlock={setNoneOrBlock}
        // PermanentOrTemporary={PermanentOrTemporary}
        // setPermanentOrTemporary={setPermanentOrTemporary}
        // drawerDir={drawerDir}
      />
      <LegalTop legal={legal} />
      <Box
        className="data"
        sx={{
          color: "white",
          width: { xs: "90vw", md: "80vw" },
          margin: "auto",
          padding: "50px 20px",
        }}
      >
        <h1>{t("cookie-h1-1")}</h1>
        <p>{t("cookie-p-1")}</p>
        <h3>{t("cookie-h2-1")}</h3>
        <p>{t("cookie-p-2")}</p>
        <h3>{t("cookie-h2-2")}</h3>
        <p>{t("cookie-p-3")}</p>
        <h3>{t("cookie-h2-3")}</h3>
        <p>{t("cookie-p-4")}</p>
        <h3>{t("cookie-h2-4")}</h3>
        <ul>
          <li>{t("cookie-li-1")}</li>
          <li>{t("cookie-li-2")}</li>
          <li>{t("cookie-li-3")}</li>
          <li>{t("cookie-li-4")}</li>
        </ul>
        <h3>{t("cookie-h2-5")}</h3>
        <p>{t("cookie-p-5")}</p>
        <ul>
          <li>{t("cookie-li-5")}</li>
          <li>{t("cookie-li-6")}</li>
          <li>{t("cookie-li-7")}</li>
        </ul>
        <h3>{t("cookie-h2-6")}</h3>
        <p>
          {t("cookie-p1")}
          <Link style={{ margin: "0px 10px" }}>{t("cookie-link")}</Link>
          {t("cookie-p3")}
        </p>
      </Box>

      <Footer />
    </Box>
  );
};

export default Cookie;
