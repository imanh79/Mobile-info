import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PHONE_INFO2 } from "../../graph/Query";
import SamsungCard from "../Cards/SamsungCard";
import { Grid } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import IphoneCard from "../Cards/IphoneCard";
import NovaCard from "../Cards/NovaCard";
import RedmiCard from "../Cards/RedmiCard";
import Loader from "../loader/loader";
const Brandpage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_PHONE_INFO2, {
    variables: { slug },
  });
  if (loading) return <Loader/>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data &&
        data.brands.map((item) => (
          <div key={item.id}>
            <video width='100%' height='80%' loop autoPlay controls>
              <source src={item.trailer.url} type='video/mp4' />
            </video>

            <Grid item xs={12} mt={5} mb={5}>
              <div
                style={{ margin: "0 2rem", lineHeight: "2rem" }}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(item.content.html),
                }}
              ></div>
            </Grid>
            {item.slug.includes("samsung-brand") && <SamsungCard />}
            {item.slug.includes("apple-brand") && <IphoneCard />}
            {item.slug.includes("huawei-brand") && <NovaCard />}
            {item.slug.includes("xiaomi-brand") && <RedmiCard />}
          </div>
        ))}
    </div>
  );
};

export default Brandpage;
