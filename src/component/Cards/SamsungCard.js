import { useQuery } from "@apollo/client";
import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { GET_POST_INFO } from "../../graph/Query";
import { Link } from "react-router-dom";
const SamsungCard = () => {
  const handleLearnMoreClick = (slug) => {
    window.history.replaceState(null, null, `/phones/${slug}`);
    window.scrollTo(0, 0); // ریست کردن صفحه و رفتن به بالای صفحه
  };

  const { data } = useQuery(GET_POST_INFO);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "end",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      {data &&
        data.postsinfo.map((item, index) => {
          if (item.slug.includes("samsung")) {
            return (
              <Card
                key={item.id}
                sx={{
                  height: "15rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                }}
                className='cardtheme'
              >
                <div>
                  {item.coverphoto.coverphotoPosts.map((item, index) => (
                    <CardMedia
                      component='img'
                      key={index}
                      height={100}
                      width={100}
                      sx={{ width: 80, margin: "0 auto", paddingTop: "1rem" }}
                      image={item.coverphoto.url}
                      alt='green iguana'
                    />
                  ))}
                  <Typography
                    style={{
                      fontFamily: "Yekanbakh",
                      fontWeight: "500",
                      textAlign: "center",
                      margin: "0 1rem",
                      marginTop: "0.5rem",
                    }}
                    gutterBottom
                    variant='p'
                    component='p'
                    sx={{
                      width: "16rem",
                      margin: "0 auto",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Link
                    onClick={handleLearnMoreClick}
                    to={`/phones/${item.slug}`}
                    style={{ display: "flex", justifyContent: "center", textDecoration: "none" }}
                  >
                    <Button
                      variant='outlined'
                      size='small'
                      color='primary'
                      style={{
                        textTransform: "none",
                        marginTop: "1rem",
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        color: "white",
                        backgroundColor: "rgb(47, 43, 58)",
                      }}
                    >
                      ...Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          }
          return null;
        })}
    </div>
  );
};

export default SamsungCard;
