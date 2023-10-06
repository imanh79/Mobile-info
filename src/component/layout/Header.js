import React, { useState } from "react";
import { AppBar, Toolbar, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { GET_PHONE_INFO } from "../../graph/Query";
import { useQuery } from "@apollo/client";
import Loader from "../loader/loader";
const Header = () => {
  const { data, loading } = useQuery(GET_PHONE_INFO);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  if (loading) return <Loader />;
  return (
    <AppBar
      position='static'
      sx={{
        bgcolor: "rgb(47, 43, 58)",
        color: "black",
        boxShadow: 0,
        zIndex: 3,
        padding: "0",
        height: "50px",
        padding: "0rem 0",
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          style={{
            zIndex: "1",
            justifyContent: "space-between",
            padding: "0",
            alignItems: "baseline",
            height: "39px",
            paddingTop: "8px",
          }}
        >
          <li
            className='phoneinfo'
            flex={1}
            style={{
              fontWeight: "500",
              color: "white",
              transition: "color 0.3s ease",
              cursor: "pointer",
              listStyle: "none",
              fontSize: "18px",
              marginTop: "8px",
            }}
          >
            Mobile-info
          </li>
          <li
            flex={1}
            style={{
              fontFamily: "Roboto",
              fontWeight: "500",
              marginLeft: "60px",
              color: isHovered ? "white" : "white",
              transition: "color 0.3s ease",
              cursor: "pointer",
              listStyle: "none",
              fontSize: "18px",
            }}
            onMouseEnter={handleMouseEnter}
          >
            <i className='fa-solid fa-bars-sort'></i>
          </li>
          {isHovered && (
            <Box
              onMouseLeave={handleMouseLeave}
              style={{
                color: "white",
                width: "100%",
                height: "14.7rem",
                backgroundColor: "rgb(47, 43, 58)",
                position: "absolute",
                top: "0rem",
                left: "0",
                right: "0",
                zIndex: "-1",
              }}
            >
              <i
                onClick={handleMouseLeave}
                className='fa-solid fa-x'
                style={{ position: "absolute", top: "5rem", right: "3rem", fontSize: "18px" }}
              ></i>
              <ul style={{ padding: "4rem 0 0 0" }}>
                {data?.brands?.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      textDecoration: "none",
                      listStyle: "none",

                      textAlign: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Link
                      className='linkitem'
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontFamily: "Roboto",
                        fontWeight: "500",
                      }}
                      to={`./Brands/${item.slug}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          )}
          <Link to={"./"} style={{ textDecoration: "none" }}>
            <i
              className='fa-solid fa-house homeicon'
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
