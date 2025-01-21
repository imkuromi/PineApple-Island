import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
export default function Become() {
  return (
    <>
      <Grid
        container
        sx={{
          marginTop: { xs: "0rem", sm: "0rem", md: "10rem" },
          marginX: { md: "5rem", lg: "15rem" },
        }}
      >
        <Grid
          container
          size={{ xs: 12, sm: 12 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            flexDirection={"column"}
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: " #0E204E",
              height: "350px",
              width: "900px",
              lineHeight: "2rem",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "30px",
                paddingBottom: "2rem",
                textAlign: "center",
                color: "#FFF",
              }}
            >
              Become an Agent
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                paddingBottom: "2rem",
                textAlign: "center",
                color: "#FFF",
                lineHeight: "2rem",
              }}
            >
              A community that gives you a taste of
              <br /> happiness, a place you’ll love to live and
              <br /> an opportunity to build a home.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                paddingY: "1rem",
                paddingX: "1.75rem",
                backgroundColor: "#FFF",
                fontSize: "20px",
                color: "#0E204E",
                borderRadius: "0.5rem",
              }}
            >
              Join Now
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          size={{ md: 12 }}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Grid size={{ md: 6 }}>
            <Box
              flexDirection={"column"}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "60px",
                  color: "#0E204E",
                  paddingBottom: "2rem",
                }}
              >
                Become an
                <br /> Agent
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "19px", paddingBottom: "2rem" }}
              >
                a community that gives you a taste of
                <br /> happiness, a place you’ll love to live and
                <br /> an opportunity to build a home.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  paddingY: "1rem",
                  paddingX: "4rem",
                  backgroundColor: "#0E204E",
                  fontSize: "20px",
                  color: "#FFF",
                }}
              >
                Join Now
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            size={{ md: 6 }}
            alignItems={"center"}
            justifyContent={"end"}
          >
            <Grid size={{ md: 3 }}>
              <Box
                sx={{
                  backgroundColor: "#0E204E",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                  width: { xs: "none", sm: "none", md: "14rem", lg: "14rem" },
                  height: "445px",
                }}
              ></Box>
            </Grid>
            <Grid size={{ md: 9 }}>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/8.jpg"
                  alt="1"
                  width={552}
                  height={725}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
