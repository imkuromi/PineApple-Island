import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
export default function Stay() {
  const textField = {
    "& .MuiInputLabel-outlined": {
      color: "#000",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
  };

  const massage = {
    "& .MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: 0,
    },
  };
  return (
    <section id="stay">
      <Grid container sx={{ marginY: { xs: "2rem", sm: "5rem", md: "10rem" } }}>
        <Grid
          container
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
          size={{ md: 12 }}
          sx={{ display: { xs: "grid", sm: "grid", md: "none" } }}
        >
          <Typography
            variant="h2"
            sx={{
              marginBottom: "1.5rem",
              fontSize: "30px",
              color: "#0E204E",
              textAlign: "center",
            }}
          >
            Stay In Touch
          </Typography>
         
            <Typography variant="body1" sx={{
              marginBottom: "1.5rem",
              fontSize: "16px",
              textAlign: "center",
              color:'#000000BD'
            }}>
            If you are interested in finding out more about
            <br /> The Discovery Village, leave a message
            </Typography>
          
          <Grid
            container
            size={{ xs: 12, sm: 12 }}
            rowSpacing={"1rem"}
            sx={{ justifyContent: "center" }}
          >
            <Grid size={{ xs: 8, sm: 8 }}>
              <TextField
                fullWidth
                variant="standard"
                label="Name"
                type="name"
                autoComplete="current-name"
              />
            </Grid>
            <Grid size={{ xs: 8, sm: 8 }}>
              <TextField
                fullWidth
                variant="standard"
                label="Phone No"
                type="phone"
                autoComplete="current-phone"
              />
            </Grid>
            <Grid size={{ xs: 8, sm: 8 }}>
              <TextField
                fullWidth
                variant="standard"
                label="Email"
                type="email"
                autoComplete="current-email"
              />
            </Grid>
            <Grid size={{ xs: 8, sm: 8 }}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "0.75rem",
                  marginBottom: "0.45rem",
                }}
              >
                Massage
              </InputLabel>
              <TextField fullWidth multiline rows={4} sx={{ massage }} />
            </Grid>

            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginX: "25rem",
                width:'82px',
                height:'40px',
                backgroundColor: "#0E204E",
                fontSize: "16px",
                color: "white",
                borderRadius: "0.5rem",
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
          direction={"column"}
          rowSpacing={"2rem"}
          size={{ md: 12 }}
          sx={{ display: { xs: "none", sm: "none", md: "grid" } }}
        >
          <Typography variant="h2" sx={{ fontSize: "60px", color: "#0E204E" }}>
            Stay In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", fontSize: "19px" }}
          >
            Are you curious about Pineapple Island? Send a message
          </Typography>

          <Grid size={{ sm: 12 }}>
            <TextField
              fullWidth
              multiline
              label="Name"
              type="name"
              autoComplete="current-name"
              sx={textField}
            />
          </Grid>
          <Grid size={{ sm: 12 }}>
            <TextField
              fullWidth
              multiline
              label="Phone No"
              type="phone"
              autoComplete="current-phone"
              sx={textField}
            />
          </Grid>
          <Grid size={{ sm: 12 }}>
            <TextField
              fullWidth
              multiline
              label="Email"
              type="email"
              autoComplete="current-email"
              sx={textField}
            />
          </Grid>
          <Grid size={{ sm: 12 }}>
            <TextField
              fullWidth
              multiline
              label="Massage"
              sx={textField}
              rows={4}
            />
          </Grid>

          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginX: "25rem",
              width: "143px",
              height: "48px",
              textAlign: "center",
              backgroundColor: "#0E204E",
              fontSize: "18px",
              color: "white",
              borderRadius: 0,
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
