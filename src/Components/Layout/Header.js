import React, { useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { NavLink } from "react-router-dom";
import "../../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [moblileOpen, setMoblieOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMoblieOpen(!moblileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
       <Typography bgcolor={"black"} variant="h6" sx={{ flexGrow: 1, my:2 }}>
       <img src="./assets/logo.svg" alt="logo" height={"70"} width={"200"}/>

            </Typography>
            <Divider/>
      <ul className="drawMenu">
        <li>
          <NavLink activeClassName="active" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ margin: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" sx={{ flexGrow: 1 }}>
             <img src="./assets/logo.svg" alt="logo" height={"70"} width={"250"}/>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navMenu">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer variant="temporary" open={moblileOpen} onClose={handleDrawerToggle}
          sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"240px"
          }}}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{padding:'5x'}}>

        <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;
