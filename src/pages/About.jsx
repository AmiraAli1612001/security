import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import img from "../assets/images/NCSC_White.webp";
import { Link } from "react-router-dom";
import pOne from "../assets/images/p-one.webp"
import pTwo from "../assets/images/p-two.webp"
import pThree from "../assets/images/p-three.webp"
import pFour from "../assets/images/p-four.webp"
import pFive from "../assets/images/p-five.webp"
import pSix from "../assets/images/p-six.webp"
import TopAbout from "../components/html/TopAbout";
import Cyper from "../components/html/Cyper";
import DefDrawer from "./defDrawer";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";




const About = () => {
  const { t, i18n } = useTranslation();

  let [PermanentOrTemporary, setPermanentOrTemporary] = useState("permanent");
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  // let [drawerDir, setdrawerDir] = useState("left");
    let persons = [
        {img : pOne , title :"CEO" , name : "Terry Lewis"},
        {img : pTwo , title : "HEAD OF OPERATIONS" ,name : "James Edwards"},
        {img : pThree , title :"HEAD OF SALES", name :"Jonathan Collins"},
        {img : pFour ,  title : "CHIEF TECHNOLOGY OFFICER" , name : "Mark Hobart"},
        {img : pFive , title :"CHIEF FINANCE OFFICER" , name : "Hayley Lewis"},
        {img : pSix , title :"CHIEF MARKETING OFFICER" , name :"Liz Gill"},

    ]
  return (
    <Box>
      <Header  setNoneOrBlock={setNoneOrBlock}  />
      <DefDrawer   
          noneOrBlock={noneOrBlock}
          setNoneOrBlock={setNoneOrBlock}
          // PermanentOrTemporary={PermanentOrTemporary}
          // setPermanentOrTemporary={setPermanentOrTemporary}
          // drawerDir={drawerDir}
        />
      <TopAbout/>
      <Box className="paragraph" >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <Grid item xs={10} md={5}>
            <p>
             {t("about-p-one")}
            </p>
          </Grid>
          <Grid item xs={10} md={5}>
            <p>
            {t("about-p-two")}

            </p>
          </Grid>
        </Grid>
      </Box>
      {/* <Box className="about-img">
        <Typography variant="p"  sx={{padding :{xs :"50px",md :"100px"} ,marginTop:"30px" , color :"white" , fontSize :"40px" }}><span style={{fontWeight:"bold"}}>About</span> Us</Typography>
        <Grid container className="person-box" sx={{marginTop :"50px"}}>
           {
            persons.map((item)=> {
                return (
                    <Grid item xs={12} md={4} className="person">
                    <CardMedia component="img" image={item.img} />
                    <Box className="layer">
                       <Box className="border">
                       <p>{item.title}</p>
                        <h1>{item.name}</h1>
                       </Box>
                    </Box>
                </Grid>
                )
            })
           }
        </Grid>

      </Box> */}

      <Box className="driven">
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid item xs={10} md={5} lg={3}>
            <h1>
              {t("driven")}
            </h1>
            <p>
              {t("driven-p-one")}
            </p>
          </Grid>
          <Grid item xs={10} md={4}>
            <h1>
              {t("accomplish")}
            </h1>
            <p>
             {t("driven-p-two")}
            </p>
          </Grid>
        </Grid>
      </Box>
  <Cyper/>

      <Box className="about-image">
        <CardMedia
          sx={{ margin: { xs: "0px auto" } , marginLeft :{lg :"200px"} }}
          component="img"
          image={img}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
