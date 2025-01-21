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
        height="10.1875rem"
        sx={{ marginX: { sm: "0rem", md: "2rem", xl: "6.25rem" } }}
      >
        <Grid size={3}>
          <Box paddingTop="3.125rem" sx={{ color: "#0E204E" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "1.25rem", sm: "1.625rem", md: "2rem" } }}
            >
              Pineapple
              <br />
              Island
            </Typography>
          </Box>
        </Grid>
        <Grid container size={6} justifyContent="center" paddingTop="5.0625rem">
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              color: "#232323",
            }}
          >
            <Typography
              variant="subtitle1"
              component="a"
              padding="2rem"
              sx={{ fontSize: { md: "1.125rem", xl: "1.25rem" } }}
              href="#about"
            >
              About Us
            </Typography>
            <Typography
              variant="subtitle1"
              component="a"
              padding="2rem"
              sx={{ fontSize: { md: "1.125rem", xl: "1.25rem" } }}
              href="#what"
            >
              What we do
            </Typography>
            <Typography
              variant="subtitle1"
              component="a"
              padding="2rem"
              sx={{ fontSize: { md: "1.125rem", xl: "1.25rem" } }}
              href="#galleries"
            >
              Project
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          size={3}
          justifyContent="end"
          sx={{
            paddingTop: {
              xs: "3.125rem",
              sm: "3.125rem",
              md: "4.25rem",
              xl: "4.25rem",
            },
          }}
        >
          <Button
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              fontSize: { md: "1.125rem", xl: "1.25rem" },
              color: "#FFF",
              backgroundColor: "#0E204E",
              borderRadius: "0",
              width: "11.75rem",
              height: "3.125rem",
            }}
          >
            Get in Touch
          </Button>

          <MenuIcon
            sx={{
              display: { sm: "flex", md: "none" },
              padding: "0.9375rem",
              fontSize: { xs: "2rem", sm: "2.5rem" },
              color: "#0E204E",
            }}
          />
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default Navbar;
