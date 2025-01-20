import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "white" }}
    >
      <Grid
        container
        height="163px"
        
        sx={{marginX: {sm:"0rem",md:"2rem",xl:"6.25rem"}}}
      >
        <Grid size={3}>
          <Box  paddingTop="50px" sx={{ color: "#0E204E" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "24px", sm: "26px", md: "32px" } }}
            >
              Pineapple
              <br />
              Island
            </Typography>
          </Box>
        </Grid>
        <Grid container size={6} justifyContent="center"  paddingTop="81px">
          <Box
            sx={{
              display: {xs:"none",sm: "none", md: "block" },
              color: "#232323",
            }}
          >
            <Typography
              variant="subtitle1"
              component="a"
              sx={{ padding: "2rem", fontSize: {md:"18px",xl:"20px"} }}
              href="#about"
            >
              About Us
            </Typography>
            <Typography
              variant="subtitle1"
              component="a"
              sx={{ padding: "2rem", fontSize: {md:"18px",xl:"20px"} }}
              href="#what"
            >
              What we do
            </Typography>
            <Typography
              variant="subtitle1"
              component="a"
              sx={{ padding: "2rem", fontSize: {md:"18px",xl:"20px"} }}
              href="#galleries"
            >
              Project
            </Typography>
          </Box>
        </Grid>
        <Grid container size={3} justifyContent="end" sx={{paddingTop: {xs:"none",sm:"none",md:"68px",xl:"68px"}}} >
          <Button 
            sx={{
              display: { xs:"none",sm: "none", md: "flex" },
              fontSize: {md:"18px",xl:"20px"},
              color: "#FFF",
              backgroundColor: "#0E204E",
              borderRadius: "0",
              width: "188px",
              height: "50px"
            }}
          >
            Get in Touch
          </Button>

          <Box
            sx={{
              display: { sm: "flex", md: "none" },
              
            }}
          >
            <IconButton sx={{ color: "#0E204E" }}>
              <MenuIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default Navbar;
