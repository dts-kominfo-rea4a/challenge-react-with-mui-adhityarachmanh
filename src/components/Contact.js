// Adhitya Rachman Hidayatullah
// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  const { photo, name, phone, email } = data;
  return (
    <>
      <Grid sx={{ marginBottom: "10px" }} alignItems="center" container>
        <Avatar
          alt="Contact Photo"
          src={photo}
          sx={{ width: 80, height: 80, marginRight: "40px" }}
        />
        <Box textAlign="left">
          <Typography variant="body1" component="div">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            color="text.secondary"
          >
            {phone}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {email}
          </Typography>
        </Box>
        <Divider style={{ color: "red" }} />
      </Grid>
      <Divider style={{ marginBottom: "20px" }} />
    </>
  );
};

export default Contact;
