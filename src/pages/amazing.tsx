import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const box :any = [];
for (let times = 0; times < 5; times++) {
  box.push(
  <Grid container  size={{ md: 11,lg:10}} justifyContent={"end"}>
    <Typography variant="body1"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0E3F3333",
        width: "542px",
        height: "46px",
        paddingX: "1rem",
      
      }}
    >
      Lorem ipsum dolor sit amet, consectetur
      <Image
        src="/check.svg"
        alt="1"
        width={15}
        height={15}
        style={{ objectFit: "cover" }}
      />
    </Typography>
     <Typography variant="body1"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: "542px",
        height: "55px",
        paddingX: "1rem",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur
      <Image
        src="/check.svg"
        alt="1"
        width={15}
        height={15}
        style={{ objectFit: "cover" }}
      />
    </Typography>

    </Grid>
  );
}

export default function Amazing() {
  return (
    <>
      <Grid
        container
        maxWidth={"xl"}
        sx={{ marginTop: "10rem", marginX: { md: "5rem", lg: "15rem" } }}
      >
        <Grid
          container
          size={{ md: 12 }}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
          <Grid size={{ md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/7.jpg"
                alt="1"
                width={484}
                height={725}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 2 }}>
            <Box
              sx={{
                backgroundColor: "#0E204E",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
                width: { xs: "none", sm: "none", md: "8rem", lg: "14rem" },
                height: "445px",
              }}
            ></Box>
          </Grid>
          <Grid container size={{ md: 6 }} justifyContent={"end"}>
            <Grid container size={{ md: 11,lg:10 }} justifyContent={"center"} >
              <Typography variant="h1" sx={{fontSize:{ md: '48px',lg:'60px'} ,color:'#0E204E',paddingY:'2.5rem'}}  >
                Amazing Future
              </Typography>
            </Grid>
            <Grid  container  size={{ md: 11,lg:10}} justifyContent={"end"} >
            {box}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
