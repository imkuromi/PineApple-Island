import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
export default function Stay() {
  return (
    <section id="stay"><Grid
    container
    maxWidth={"xl"}
    sx={{ marginY: {xs:"5rem",sm:"5rem",md:"10rem"}}}>
       <Grid
          container
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
          size={{ md: 12 }}
          sx={{display:{xs:'grid',sm:'grid',md:'none'}}}
        >
          <Typography variant="h1" sx={{ marginBottom: "1.5rem", fontSize: "30px",color:'#0E204E' ,textAlign:'center'}}>
            Stay In Touch
          </Typography>
          <Box sx={{ marginBottom: "1.5rem", fontSize: "20px",textAlign:'center' }}>
          If you are interested in finding out more about<br/> The Discovery Village, leave a message
          </Box>
       <Grid container size={{xs:12,sm:12}} rowSpacing={'1rem'} sx={{justifyContent:'center'}}>
       <Grid size ={{xs:8,sm:8}}>
       <TextField
       fullWidth
        variant="standard"
          label="Name"
          type="name"
          autoComplete="current-name"
        />
       </Grid>
       <Grid size ={{xs:8,sm:8}}>
       <TextField
        fullWidth
        variant="standard"
          label="Phone No"
          type="phone"
          autoComplete="current-phone"
        />
       </Grid>
       <Grid size ={{xs:8,sm:8}}>
        <TextField
         fullWidth
          variant="standard"
          label="Email"
          type="email"
          autoComplete="current-email"
        />
        </Grid>
        <Grid size ={{xs:8,sm:8}}>
      
         <TextField
           fullWidth
          multiline
           label="Massage"
          rows={4}

          variant="standard"
        />
          </Grid>
          
          <Typography variant="body1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginX: "25rem",
              paddingY: "0.75rem",
              paddingX: "2rem",
               backgroundColor: "#0E204E",
              fontSize: "16px",
              color: "white",
              borderRadius:'0.5rem'
            }}
          >
            Send
          </Typography>
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
          sx={{display:{xs:'none',sm:'none',md:'grid'}}}
        >
           <Typography variant="h1"sx={{fontSize: "60px",  color: "#0E204E" }}>
            Stay In Touch
          </Typography>
          <Typography  variant="body1" sx={{ marginBottom: "1rem", fontSize: "19px" }}>
            Are you curious about Pineapple Island? Send a message
          </Typography>

          <Grid size ={{sm:12}}>
       <TextField
        fullWidth
        multiline
 
          label="Name"
          type="name"
          autoComplete="current-name"
        />
       </Grid>
       <Grid size ={{sm:12}}>
       <TextField
         fullWidth
         multiline
  
          label="Phone No"
          type="phone"
          autoComplete="current-phone"
        />
       </Grid>
       <Grid size ={{sm:12}}>
        <TextField
          fullWidth
          multiline
         
          label="Email"
          type="email"
          autoComplete="current-email"
        />
        </Grid>
        <Grid size ={{sm:12}}>
      
         <TextField
            fullWidth
            multiline
          
           label="Massage"
          rows={4}

   
        />
          </Grid>

          <Typography variant="body1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginX: "25rem",
              paddingY: "0.5rem",
              paddingX: "2rem",
               backgroundColor: "#0E204E",
              fontSize: "16px",
              color: "white",
            }}
          >
            Send
          </Typography>
        </Grid>
 
      </Grid>
      
    </section>
  );
}
