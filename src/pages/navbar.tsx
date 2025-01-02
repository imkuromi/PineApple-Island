import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "white", paddingY: "1.5rem" }}
    >
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid size={3}>
          <Box sx={{color: "#0E204E"}}>
            <Typography variant="h1" sx={{ fontSize: { xs: "24px", sm: "26px", md: "30px" } }}>
              Pineapple<br/>Island
            </Typography>
          </Box>
        </Grid>
        <Grid container size={6} justifyContent={"center"}>
          <Box sx={{display: { xs: "none", sm: "none", md: "block" },color: "#232323"}}>
            <Typography
              variant="subtitle1"
              component="a"
              sx={{ padding: "2rem", fontSize: "16px" }}
              href="#about"
            >
              About Us
            </Typography>
            <Typography
              variant="subtitle1"
              component="a"
              sx={{ padding: "2rem", fontSize: "16px" }}
              href="#what"
            >
              What we do
            </Typography>
            <Typography
              variant="subtitle1"
              component="a"
              sx={{ padding: "2rem", fontSize: "16px" }}
              href="#galleries"
            >
              Project
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent={"end"} size={3}>
          <Box sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              backgroundColor: "#0E204E",
              paddingX: "2rem",
              paddingY: "0.5rem",
              marginRight: { xs: "0rem", sm: "0rem", md: "2rem", lg: "6rem" },
              color: "#FFFFFF",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontSize: "16px" }} noWrap>
              Get in Touch
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              justifyContent: "center",
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
