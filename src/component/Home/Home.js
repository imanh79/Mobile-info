import React from "react";
import Brands from "../Brand/Brands";
import Phone from "../phones/phone";
import { Container, Grid } from "@mui/material";
const Home = () => {
  return (
    <Container maxWidth='lg' sx={{ display: "flex" }}>
      <Grid container style={{ justifyContent: "space-between", marginTop: "1rem" }}>
        <Grid item xs={12} sm={6} md={4} className='brandpd'>
          <Brands />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Phone />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
