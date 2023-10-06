import React from "react";
import { GET_POST_INFO2 } from "../../graph/Query";
import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import SamsungCard from "../Cards/SamsungCard";
import IphoneCard from "../Cards/IphoneCard";
import NovaCard from "../Cards/NovaCard";
import RedmiCard from "../Cards/RedmiCard";
import Loader from "../loader/loader";

const Phonepage = () => {
  const { slug } = useParams();
  const { data, loading } = useQuery(GET_POST_INFO2, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  return (
    <div>
      {data &&
        data.postsinfo.map((item) => (
          <div
            key={item.id}
            style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}
          >
            <img
              src={item.coverphoto.coverphotoPosts[0].coverphoto.url}
              style={{ width: "20rem" }}
              alt='img'
            />
            <Typography
              gutterBottom
              variant='h3'
              component='p'
              sx={{ margin: "0 auto", paddingTop: "1.5rem" }}
            >
              {item.title}
            </Typography>
            <Grid item xs={12} mt={5} mb={5}>
              <div
                style={{ margin: "0 2rem", lineHeight: "2rem" }}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(item.content.html),
                }}
              ></div>
            </Grid>
            {item.slug.includes("samsung") && <SamsungCard />}
            {item.slug.includes("iphone") && <IphoneCard />}
            {item.slug.includes("nova") && <NovaCard />}
            {item.slug.includes("redmi") && <RedmiCard />}
          </div>
        ))}
    </div>
  );
};
export default Phonepage;
