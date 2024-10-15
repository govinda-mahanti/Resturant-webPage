import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15, textAlign:"center", p:2,
        "& h4":{
          fontWeight:"bold",
          my: 2,
          fontSize:"2rem"
        },
        "& p":{
          textAlign:"justify",
          fontWeight:"400"
        },
        "@media (max-width:600px)":{
          mt:0,
          
        }
      }}>
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          rerum placeat est optio recusandae sint ea, cumque sapiente obcaecati
          non. Amet dolor sunt quae libero nisi vero cupiditate doloribus, ad
          soluta, provident consectetur maxime nobis! Sit culpa beatae explicabo
          quas adipisci praesentium corporis asperiores deserunt libero,
          distinctio porro aliquid a quia nulla fuga ab! Quidem sunt odit quam
          consequuntur officiis quas. Quam velit, dolores corporis sint voluptas
          in ab explicabo omnis repudiandae dignissimos assumenda laboriosam
          eligendi molestiae quia totam facilis dolorem ad distinctio, magni rem
          consectetur expedita error qui placeat? Repellendus quo quaerat
          perspiciatis iure nihil et vero hic porro.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
          asperiores distinctio corrupti quidem similique ea magnam
          exercitationem earum aspernatur, placeat nisi laudantium ut dolores ex
          aliquid adipisci officiis minus in esse soluta, eum sequi. Corrupti
          porro earum itaque modi eum dolore minus accusamus culpa, illo,
          asperiores, libero suscipit rerum quaerat quibusdam! Illum maiores
          quos perspiciatis ipsum dolorem reprehenderit ex explicabo quidem
          atque! Ad officiis suscipit culpa quibusdam nam, temporibus nesciunt
          molestias fugiat explicabo aspernatur. A iusto rerum illum quasi
          praesentium, cupiditate ipsa vitae architecto at incidunt repellat
          fuga optio officia distinctio reprehenderit maiores consequuntur
          reiciendis ducimus. Ex cumque voluptas rerum!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
