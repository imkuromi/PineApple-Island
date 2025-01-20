import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <Grid container>
        <Grid size={{ md: 3 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                position: "absolute",
                top: { md: "13rem", lg:"11rem",xl:"9rem" },
                left: { md: "4rem", lg: "4rem", xl: "6.25rem" },
                width: { md: "33rem", lg: "45rem", xl: "49.125rem" },
                height: { md: "22rem", lg: "30rem", xl: "31rem" },
                backgroundColor: " #0E204E",
                zIndex: 1,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#FFF",
                  fontSize: { md: "40px", lg: "64px" },
                  paddingTop: { md: "2.5rem",lg:"5rem", xl: "5rem" },
                  paddingLeft: { md: "4rem", xl: "4rem" },
                }}
              >
                Pineapple Island:
                <br />
                GenZ and Millenial
                <br /> Adobe
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#FFF",
                  fontSize: "20px",
                  paddingTop: "0.5rem",
                  paddingX: "4rem",
                }}
              >
                a community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 9 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 76% 85%, 0 100%)",
              position: "relative",
            }}
          >
            <Image
              src="/1.jpg"
              alt="intro"
              width={1368}
              height={717}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <Box
              sx={{
                position: "absolute",
                display: { xs: "flex", sm: "flex", md: "none" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: "26px", sm: "30px" },
                  textAlign: "center",
                  marginBottom: "1.5rem",
                }}
              >
                Pineapple Island:
                <br /> GenZ and Millenial Abode
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: "14px", sm: "16px" },
                  textAlign: "center",
                  marginBottom: "2rem",
                }}
              >
                a community that gives you a taste of happiness,
                <br /> a place you’ll love to live and an opportunity to
                <br /> build a home.
              </Typography>
              <Button
                href="#stay"
                sx={{
                  color: "#0E204E",
                  fontSize: { xs: "14px", sm: "16px" },
                  backgroundColor: "#FFF",
                  paddingY: "0.38rem",
                  paddingX: "1.1rem",
                  borderRadius: "0.25rem"
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
