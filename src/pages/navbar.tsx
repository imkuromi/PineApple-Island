import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setIsopen] = React.useState(false);

  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsopen(open);
    };

  const list = (anchor: "right") => (
    <Box>
      <List>
        <ListItem sx={{ display: "flex", flexDirection: "column" }}>
          <Hamburger toggled={isOpen} toggle={setIsopen} />
          <Typography
            variant="subtitle1"
            component="a"
            padding="2rem"
            sx={{ fontSize: { md: "1.125rem", xl: "1.25rem" } }}
            href="#about"
          >
            About
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
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "white" }}
    >
      <Grid
        container
        
        sx={{ marginX: { sm: "0rem", md: "2rem", xl: "6.25rem" } ,height:{xs:'7.875rem',xl:'10.1875rem'}}}
      >
        <Grid size={3} container justifyContent="start" alignItems=" start">
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
          alignItems="start"
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
            href="#stay"
          >
            Get in Touch
          </Button>
          <Button onClick={toggleDrawer("right", true)}>
            <Hamburger color="#0E204E" toggled={isOpen} toggle={setIsopen} />
          </Button>
          <Drawer
            anchor={"right"}
            open={isOpen}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default Navbar;
