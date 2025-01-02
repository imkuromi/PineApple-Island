import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
export default function Why() {
  return (
    <Grid container maxWidth={"lg"} sx={{ marginTop: {xs:'2rem',sm:'4rem',md:'10rem'}  }}>
      <Grid
        container
        size={{ xs: 12, sm: 12 }}
        sx={{
          display: { xs: "grid", sm: "grid", md: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "#0E204E",fontSize:'30px',textAlign: "center",
                    marginBottom: "1.5rem", }}>
          Why Choose Pineapple Island
        </Typography>
        <Typography variant="body1" sx={{ color: "#0E204E",fontSize:'16px', textAlign:'center',paddingX:'2rem' }}>
          Pineapple Island is the most sought-after community in Ibadan that
          values and puts the needs of their clients first. It is a territory
          with loft complexes that creates a country life and homely feeling
          that is integrated with industrial development. A perfect,
          professional built abode that gives you the true taste of beauty and
          happiness.
        </Typography>
        <Grid size={{xs:12,sm: 12 }}>
                <Box
                  sx={{
                      display: {
                        xs: "flex",
                        sm: "flex",
                        md: "none",
                      },
                      marginTop:"1.5rem",
                    justifyContent: "center",
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)"
                  }}
                >
                  <Image
                    src="/3.jpg"
                    alt="1"
                    width={900}
                    height={400}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
      </Grid>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            position: "absolute",
            backgroundColor: "#0E204E",
            height: "40rem",
            width: "100%",
            clipPath: "polygon(65% 80%, 100% 98%, 100% 0, 0 0, 0 98%)",
            zIndex: 0,
          }}
        />
        <Box sx={{ position: "Relative", zIndex: 1 }}>
          <Grid container justifyContent={"center"} paddingTop={"5rem"}>
            <Grid size={{ md: 3 }}>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  color: "#FFFFFF",
                }}
              >
                <Typography variant="h1" sx={{fontSize:'50px'}}>
                  Why <br /> Choose <br />
                  Pineapple <br />
                  Island
                </Typography>
              </Box>
            </Grid>

            <Grid container size={{ md: 9 }}>
              <Grid size={{ md: 5 }}>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "flex",
                    },
                    height: "39.625rem",
                    width: "100%",
                    backgroundColor: " #FFFFFF",
                    paddingX: {md:"3rem",lg:'3.5rem'},
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1" sx={{fontSize:'19px'}}>
                    Pineapple Island is the most sought-after community in
                    Ibadan that values and puts the needs of their clients
                    first. It is a territory with loft complexes that creates a
                    country life and homely feeling that is integrated with
                    industrial development. A perfect, professional built abode
                    that gives you the true taste of beauty and happiness.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ md: 6 }}>
                <Box
                  sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "flex",
                      },
                    justifyContent: "center",
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)"
                  }}
                >
                  <Image
                    src="/3.jpg"
                    alt="1"
                    width={900}
                    height={634}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}
