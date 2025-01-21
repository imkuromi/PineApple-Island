import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function What() {
  return (
    <section id="what">
      <Grid container maxWidth={"xl"} sx={{ marginTop: {xs:'5rem',sm:'5rem',md:'10rem'}  }}>
        <Grid
          container
          size={{ xs: 12, sm: 12 }}
          sx={{
            display: { xs: "grid", sm: "grid", md: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#0E204E",
              fontSize:'30px',
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            Pineapple Island Offers
          </Typography>

          <Grid size={{ sm: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                width: "100%",
                position: "relative",
                zIndex: 0,
              }}
            >
              <Image
                src="/4.jpg"
                alt="1"
                width={900}
                height={650}
                style={{ objectFit: "cover",width: "100%" }}
              />
            </Box>
            <Box sx={{ position: "relative" ,marginBottom:'10rem'}}>
              <Box
                sx={{
                  position: "absolute",
                  display: { xs: "flex", sm: "flex", md: "none" },
                  zIndex: 1,
                  alignItems: "center",
                  top: "-10rem",
                  left: "9%",
                  width: "80%",
                  height: "400px",
                  backgroundColor: "#0E204E",
                
                }}
              >
              <Grid
                  size={{ xs: 12, sm: 12 }}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  rowSpacing={'3rem'}
                 
                >
                  <Grid size={{ xs: 4, sm: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "46",
                        height: "52",
                        flexDirection: "column",
                      }}
                    >
                      <Image
                        src="/eco-w.svg"
                        alt="1"
                        width={46}
                        height={52}
                        style={{ objectFit: "cover" }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "center", paddingTop: "1.5rem",color:"#FFF",fontSize:'16px' }}
                      >
                       Eco Friendly
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 4, sm: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "56",
                        height: "60",
                        flexDirection: "column",
                      }}
                    >
                      <Image
                        src="/smart-w.svg"
                        alt="1"
                        width={46}
                        height={50}
                        style={{ objectFit: "cover" }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "center", paddingTop: "1.5rem",color:'white',fontSize:'16px' }}
                      >
                        Smart Homes
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 4, sm: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "56",
                        height: "60",
                        flexDirection: "column",
                      }}
                    >
                      <Image
                        src="/good-w.svg"
                        alt="1"
                        width={46}
                        height={50}
                        style={{ objectFit: "cover" }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "center", paddingTop: "1.5rem",color:'#FFF',fontSize:'16px' }}
                      >
                        Good Rates
                      </Typography>
                    </Box>
                  </Grid>
                <Grid
                  size={{ xs: 12, sm: 12 }}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Grid size={{ xs: 4, sm: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "62",
                        height: "76",
                        flexDirection: "column",
                      }}
                    >
                      <Image
                        src="/serviced-w.svg"
                        alt="1"
                        width={52}
                        height={66}
                        style={{ objectFit: "cover" }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "center", paddingTop: "1.5rem",color:'#FFF',fontSize:'16px' }}
                      >
                        Serviced Apartment
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 4, sm: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "60",
                        height: "76",
                        flexDirection: "column",
                      }}
                    >
                      <Image
                        src="/private-w.svg"
                        alt="1"
                        width={50}
                        height={66}
                        style={{ objectFit: "cover" }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "center", paddingTop: "1.5rem",color:'#FFF',fontSize:'16px' }}
                      >
                      
                        Private Security
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 4, sm: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "52",
                        height: "76",
                        flexDirection: "column",
                      }}
                    >
                      <Image
                        src="/24-w.svg"
                        alt="1"
                        width={45}
                        height={68}
                        style={{ objectFit: "cover" }}
                      />
                      <Typography
                     variant="subtitle2"
                     sx={{ textAlign: "center", paddingTop: "1.5rem",color:'#FFF',fontSize:'16px' }}
                   >
                        24/7 Electricity
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        

        <Grid size={{ md: 12 }} marginBottom={"5rem"}>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              fontSize: "60px",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: "60px",color:'#0E204E' }}>
              What Pineapple Land Offers
            </Typography>
          </Box>
        </Grid>

        <Grid
          container
          size={{ md: 12 }}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            marginX: {md:'0rem',lg:"6rem"},
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
                src="/4.jpg"
                alt="1"
                width={900}
                height={634}
                style={{ objectFit: "cover",width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 2 }}>
            <Box
              sx={{
                backgroundColor: "#0E204E",
                width: { xs: "none", sm: "none", md: "8rem", lg: "14rem" },
                height: "22.375rem",
              }}
            ></Box>
          </Grid>

          <Grid container size={{ md: 6 }}>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/Eco.svg"
                  alt="1"
                  width={70}
                  height={70}
                  style={{ objectFit: "cover" }}
                />
                 <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center", paddingTop: "2.5rem",fontSize:"18px" }}
                >
                  Eco Friendly
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/Smart.svg"
                  alt="1"
                  width={70}
                  height={70}
                  style={{ objectFit: "cover" }}
                />
                  <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center", paddingTop: "2.5rem",fontSize:"18px" }}
                >
                  Smart Homes
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/Good.svg"
                  alt="1"
                  width={70}
                  height={70}
                  style={{ objectFit: "cover" }}
                />
                 <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center", paddingTop: "2.5rem",fontSize:"18px" }}
                >
                  Good Rates
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          size={{ md: 12 }}
          justifyContent={"start"}
          alignItems={"center"}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            marginX:{md:'0rem',lg:"6rem"}
          }}
        >
          <Grid container size={{ md: 6 }}>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "157px",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/serviced.svg"
                  alt="1"
                  width={70}
                  height={70}
                  style={{ objectFit: "cover" }}
                />
                 <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center", paddingTop: "2.5rem",fontSize:"18px" }}
                >
                  Serviced Apartment
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "157px",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/private.svg"
                  alt="1"
                  width={70}
                  height={70}
                  style={{ objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center", paddingTop: "2.5rem",fontSize:"18px" }}
                >
                  Private Security
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "157px",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/24.svg"
                  alt="1"
                  width={70}
                  height={70}
                  style={{ objectFit: "cover" }}
                />
                  <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center", paddingTop: "2.5rem",fontSize:"18px" }}
                >
                  24/7 Electricity
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            size={{ md: 2 }}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Box
              sx={{
                backgroundColor: "#0E204E",
                width: { xs: "none", sm: "none", md: "8rem", lg: "14rem" },
                height: "22.375rem",
              }}
            ></Box>
          </Grid>
          <Grid size={{ md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/5.jpg"
                alt="1"
                width={900}
                height={634}
                style={{ objectFit: "cover",width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      </section>
  );
}
