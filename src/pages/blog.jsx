import { Box, Grid, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
// import back from "../assets/images/Robo Shadow Blog.webp";
import { Link } from "react-router-dom";
import Right from "../components/html/rightBlog";
import DefDrawer from "./defDrawer";
import mid from "../assets/images/midd.webp";
import one from "../assets/images/blog-1.webp";
import two from "../assets/images/blog-3.webp";
import three from "../assets/images/blog-4.webp";
import four from "../assets/images/blog-5.webp";
import five from "../assets/images/blog-6.webp";
import { t } from "i18next";

// import Pagination from "../components/html/pagination";
// // import Pagination from "../components/html/pagination";
// import {MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
// import Paginatio from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';

const Blog = () => {
  // let [PermanentOrTemporary, setPermanentOrTemporary] = useState("permanent");
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  // let [drawerDir, setdrawerDir] = useState("left");

  let blog = [
    {
      span: t("blog-span-1"),
      link: t("blog-linky-1"),
      img: one,
      read: t("blog-read"),
    },

    {
      span: t("blog-top-1"),
      link: t("blog-linky-3"),
      img: two,
      read: t("blog-read"),
    },

    {
      span: t("blog-span-1"),
      link: t("blog-linky-4"),
      img: three,
      read: t("blog-read"),
    },
    {
      span: "",
      link: t("blog-linky-5"),
      img: four,
      read: t("blog-read"),
    },
    {
      span: t("blog-top-1"),
      link: t("blog-linky-6"),
      img: five,
      read: t("blog-read"),
    },
  ];

  return (
    <Box className="blog">
      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer
        noneOrBlock={noneOrBlock}
        setNoneOrBlock={setNoneOrBlock}
        // PermanentOrTemporary={PermanentOrTemporary}
        // setPermanentOrTemporary={setPermanentOrTemporary}
        // drawerDir={drawerDir}
      />
      <Box className="top">
        <Box className="back">
          <Box className="parent">
            <span>{t("blog-top-1")}</span>
            <h1>{t("blog-top-2")}</h1>
            <p>{t("blog-top-3")}</p>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        className="grid"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid
          item
          className="left"
          xs={10}
          md={9.5}
          sx={{
            position: "relative",
            transform: { xs: "translateY(-0px)", md: "translateY(-100px)" },
            display: "flex",
          }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "center", gap: "30px" }}
          >
            {blog.map((item, index) => {
              return (
                <Grid
                  item
                  key={index}
                  className="item"
                  xs={11}
                  md={++index % 3 === 0 ? 10.3 : 5}
                >
                  <span>{item.span}</span>
                  <CardMedia component="img" image={item.img} />
                  <Box className="links">
                    <Link className="one">{item.link}</Link>
                    <Link className="two">{item.read}</Link>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Right />
      </Grid>
      <Footer />
    </Box>
  );
};

export default Blog;
