import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const items = [
  {
    name: "Image 1",
    imgPath: "/2.jpg",
  },
  {
    name: "Image 2",
    imgPath: "/3.jpg",
  },
];

export default function About() {
  return (
    <section id="about">
      <Grid
        container
        sx={{ marginTop: { xs: "2rem", sm: "4rem", md: "10rem" } }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{ display: { xs: "grid", sm: "grid", md: "none" } }}
          paddingY={"2.5rem"}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "24px", sm: "30px" },
              textAlign: "center",
              color: "#0E204E",
            }}
          >
            About
            <br /> Pineapple Island
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          paddingX={"4rem"}
          size={{ md: 3 }}
        >
          <Typography
            variant="h2"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              fontSize: { md: "50px", xl: "60px" },
              color: "#0E204E",
            }}
          >
            About
            <br />
            Pineapple
            <br />
            Island
          </Typography>
        </Grid>

        <Grid container size={{ md: 9 }}>
          <Grid size={{ md: 6, xl: 7 }}>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                height: { xs: "90%", sm: "95%", md: "100%" },
                width: "100%",
              }}
            >
              <Carousel sx={{ width: "100%" }}>
                {items.map((item, index) => (
                  <Image
                    key={index}
                    src={item.imgPath}
                    alt={item.name}
                    width={900}
                    height={618}
                    style={{ objectFit: "cover" }}
                  />
                ))}
              </Carousel>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                height: { xs: "90%", sm: "95%" },
                width: "100%",
                position: "relative",
              }}
            >
              <Image
                src="/2.jpg"
                alt="2"
                width={900}
                height={550}
                style={{ objectFit: "cover",width:"100%" }}
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
                  height:'100%',
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  paddingY: "1rem",
                  paddingX: { xs: "2rem", sm: "5rem" },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: { xs: "2rem", sm: "2.5rem" },
                    color: "#FFF",
                    fontSize: "16px",
                    textAlign: "center",
                    marginBottom: "2rem",
                    paddingX:'1.5rem'
                  }}
                >
                  Pineapple Island is the most sought-after community in Ibadan
                  that values and puts the needs of their clients first. It is a
                  territory with loft complexes that creates a country life and
                  homely feeling that is integrated with industrial development.
                  A perfect, professional built abode that gives you the true
                  taste of beauty and happiness.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ md: 4, xl: 3 }}>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "38.6rem",
                backgroundColor: "#0E204E",
                paddingX: "4rem",
              }}
            >
              <Typography
                variant="subtitle1"
                lineHeight="2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "19px",
                }}
              >
                Pineapple Island is the most sought-after community in Ibadan
                that values and puts the needs of their clients first. It is a
                territory with loft complexes that creates a country life and
                homely feeling thatis integrated with industrial development. A
                perfect, professional built abode that gives you the true taste
                of beauty and happiness.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
