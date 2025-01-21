import Navbar from "./navbar";
import Intro from "./intro";
import About from "./about";
import Why from "./why";
import What from "./what";
import Galleries from "./galleries";
import Amazing from "./amazing";
import Become from "./become";
import Stay from "./stay";
import Footer from "./footer";
import { Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import "@fontsource/manrope";
import "@fontsource/lato";
import "@fontsource/poppins";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 956,
      lg: 1560,
      xl: 1920,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Playfair Display", "Manrope", "Lato", "Poppins"].join(","),
    h1: {
      fontFamily: "Playfair Display",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Playfair Display",
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "Manrope",
      fontWeight: 300,
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Lato",
      fontWeight: 100,
    },
    body2: {
      fontFamily: "Lato",
      fontWeight: 500,
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#FFF",
          "&.MuiContainer-root": {
            paddingX: { xs: "20px", md: "0px", lg: "0px" },
          },
        }}
      >
        <Navbar />
        <Intro />
        <About />
        <Why />
        <What />
        <Galleries />
        <Amazing />
        <Become />
        <Stay />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
