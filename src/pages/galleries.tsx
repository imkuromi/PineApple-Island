import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function Galleries() {
  return (
    <section id="galleries">
      <Grid
        container
        sx={{ marginTop: { xs: "5rem", sm: "8rem", md: "10rem" } }}
      >
        <Grid
          container
          size={{ xs: 12, sm: 12 }}
          sx={{
            justifyContent: "center",
            display: { xs: "flex", sm: "flex", md: "none" },
          }}
          spacing={"1rem"}
        >
          <Grid
            container
            size={{ md: 12 }}
            direction={"column"}
            sx={{
              justifyContent: "center",
              marginBottom: "1rem",
              width: "100%",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                marginBottom: "1rem",
                fontSize: "30px",
                color: "#0E204E",
              }}
            >
              Available Homes
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", fontSize: "16px", color: "#263238" }}
            >
              a community that gives you a taste of happiness,
              <br /> a place you’ll love to live and an opportunity to build a
              home.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-1.jpg"
                alt="1"
                width={450}
                height={200}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-2.jpg"
                alt="1"
                width={450}
                height={200}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-3.jpg"
                alt="1"
                width={450}
                height={200}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-4.jpg"
                alt="1"
                width={450}
                height={200}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            container
            size={{ xs: 6, sm: 6 }}
            direction={"column"}
            spacing={"1rem"}
          >
            <Grid size={{ xs: 12, sm: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-1-5.jpg"
                  alt="1"
                  width={450}
                  height={200}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-1-7.jpg"
                  alt="1"
                  width={450}
                  height={200}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6, sm: 6 }} direction={"column"} spacing={"1rem"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-6.jpg"
                alt="1"
                width={450}
                height={416}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }} direction={"column"} spacing={"1rem"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-8.jpg"
                alt="1"
                width={450}
                height={416}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            container
            size={{ xs: 6, sm: 6 }}
            direction={"column"}
            spacing={"1rem"}
          >
            <Grid size={{ xs: 12, sm: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-1-9.jpg"
                  alt="1"
                  width={450}
                  height={200}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-1-10.jpg"
                  alt="1"
                  width={450}
                  height={200}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-11.jpg"
                alt="1"
                width={450}
                height={200}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-12.jpg"
                alt="1"
                width={450}
                height={200}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/6-1-13.jpg"
                alt="1"
                width={900}
                height={200}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          size={{ md: 12 }}
          sx={{
            justifyContent: "center",
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
          <Grid
            container
            size={{ md: 12 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                marginBottom: "1rem",
                fontSize: "60px",
                color: "#0E204E",
              }}
            >
              Galleries
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "center", fontSize: "19px", color: "#263238" }}
            >
              a community that gives you a taste of happiness,
              <br /> a place you’ll love to live and an opportunity to build a
              home.
            </Typography>
          </Grid>
          <Grid
            container
            size={{ md: 12 }}
            spacing={4}
            sx={{
              justifyContent: "center",
              marginX: "5rem",
              marginTop: "2rem",
            }}
          >
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-1.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-2.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-3.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-4.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-5.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-6.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-7.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-8.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/6-9.jpg"
                  alt="1"
                  width={553}
                  height={469}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
