import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graph/Query";
import { Divider, Grid } from "@mui/material";
import Cards from "../Cards/Card";
import Loader from "../loader/loader";

const Phone = () => {
  const { data, loading, error } = useQuery(GET_POST_INFO);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        borderRadius: "0.7rem",
        overflow: "hidden",
        backgroundColor: "#2f2b3a",
        padding: "0 1.5rem 1.5rem 1.5rem",
      }}
    >
      <h3
        style={{ textAlign: "center", margin: "1rem 0", fontFamily: "Roboto", fontWeight: "400" }}
        variant='p'
        component='p'
      >
        Phones
      </h3>
      <Divider />
      <Grid container spacing={2}>
        {data &&
          data.postsinfo.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={3}>
              <Cards {...item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
export default Phone;
