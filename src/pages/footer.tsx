import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          backgroundColor: "#0E204E",
          height: "27rem",
          width: "100%",
          clipPath: {
            md: "polygon(10% 10%, 100% 40%, 100% 100%, 0 100%, 0 30%)",
          },
          color: "#FFFFFF",
        }}
      >
        <Grid
          container
          size={{ md: 12 }}
         
          columnSpacing={"10rem"}
          direction={'row'}
        >
          <Grid container size={{ md: 6 }} sx={{flexDirection:'column',paddingLeft:{md:'10rem',lg:'20rem'}}}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "30px", paddingTop: "7rem" }}
            >
              Banana
              <br /> Island
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "19px" }}>
              a community that gives you a taste 
              of happiness, a place you’ll love to 
              live and an opportunity to build a 
              home.
            </Typography>
          </Grid>
          <Grid size={{ md: 4 }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "30px", marginTop: "10rem" }}
            >
              Follow up
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "19px", marginBottom: "0.5rem" }}
            >
              Keep up with our newsletter to get 
              updates aboutprojects and offers
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row",gap:'0.1rem',height:'3rem',width:'100%' }}>
              <TextField
              fullWidth
                label="Email"
                variant="outlined"
                sx={{ fontSize:'18px',backgroundColor: "#FFF" }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  color: "#000",
                  backgroundColor: "#FFF",
                paddingTop:'0.50rem',
                paddingX:'0.5rem'
                }}
              >
                Subscribe
              </Typography>
            </Box>
            
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", sm: "flex", md: "none" },
          justifyContent: "center",
          backgroundColor: "#0E204E",
          height: "10rem",
          width: "100%",
          marginTop: "5rem",
          alignItems: "center",
          flexDirection: "column",

          clipPath: {
            md: "polygon(100% 100%, 100% 100%, 100% 100%, 0 100%, 0 100%)",
          },
          color: "#FFFFFF",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "22px", marginBottom: "0.5rem" }}
        >
          Pineapple Island
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "16px" }}>
          &copy; Copyright 2021 Glowdsgn All Rights Reserved
        </Typography>
      </Box>
    </>
  );
}
