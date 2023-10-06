import React from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  Card,
} from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CustomCardActions = styled(CardActions)`
  ${({ shouldapplymargin }) => shouldapplymargin && `margin-top: 0px; justify-Content: center;`}
`;
const CustomCardActions2 = styled(CardActions)`
  ${({ shouldapplymargin }) => shouldapplymargin && `margin-top: -0.4rem; justify-Content: center;`}
`;
const CustomCardActions3 = styled(CardActions)`
  ${({ shouldapplymargin }) => shouldapplymargin && `margin-top: -10px; justify-Content: center;`}
`;
const CustomCardActions4 = styled(CardActions)`
  ${({ shouldapplymargin }) => shouldapplymargin && `margin-top: 6px; justify-Content: center;`}
`;
const Cards = (props) => {
  const coverPhotos = props.coverphoto.coverphotoPosts;
  const handleLearnMoreClick = (slug) => {
    window.history.replaceState(null, null, `/phones/${slug}`);
    window.scrollTo(0, 0); // ریست کردن صفحه و رفتن به بالای صفحه
  };
  return (
    <Card
      onClick={handleLearnMoreClick}
      className='cardtheme'
      sx={{
        minWidth: 130,
        height: 262,
        textAlign: "center",
        color: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
      }}
      spacing={4}
    >
      <CardActionArea style={{ fontWeight: "500" }}>
        {coverPhotos.map((item, index) => (
          <CardMedia
            component='img'
            key={index}
            height={100}
            width={100}
            sx={{
              width: 75,
              margin: "0 auto",
              paddingTop: "1rem",
            }}
            image={item.coverphoto.url}
            alt='green iguana'
          />
        ))}
        <CardContent style={{ paddingBottom: "1rem" }}>
          <Typography
            style={{ fontFamily: "Roboto,YekanBakh" }}
            gutterBottom
            variant='p'
            component='p'
            sx={{ width: "8rem", margin: "0 auto" }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {["samsung-galaxy-s23-ultra"].includes(props.slug) && (
        <CustomCardActions shouldapplymargin='true'></CustomCardActions>
      )}
      {["nova-y90", "redmi-note-11s"].includes(props.slug) && (
        <CustomCardActions2 shouldapplymargin='true'></CustomCardActions2>
      )}
      {["redmi-note-11s", "iphone-13-pro-max"].includes(props.slug) && (
        <CustomCardActions3 shouldapplymargin='true'></CustomCardActions3>
      )}
      {["iphone-14-pro"].includes(props.slug) && (
        <CustomCardActions4 shouldapplymargin='true'></CustomCardActions4>
      )}

      <CardActions style={{ justifyContent: "center" }}>
        <Link to={`./phones/${props.slug}`} className='buttoncard'>
          <Button
            style={{
              textTransform: "none",
              paddingTop: "2px",
              color: "white",

              fontFamily: "Roboto",
              fontWeight: "400",
              backgroundColor: "#2f2b3a",
            }}
            variant='outlined'
            size='small'
            color='primary'
          >
            ...Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cards;
