import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PHONE_INFO } from "../../graph/Query";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import Loader from "../loader/loader";
const Brands = () => {
  const { loading, data, error } = useQuery(GET_PHONE_INFO);
  if (loading) return <Loader />;
  if (error) return <p>Error</p>;
  return (
    <div
      style={{
        borderRadius: "0.7rem",
        overflow: "hidden",
        backgroundColor: "#2f2b3a",
        padding: "0 1.5rem ",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "13px",
          fontFamily: "Roboto",
          fontWeight: "400",
        }}
      >
        Brands
      </h3>
      <Divider style={{ padding: "0", border: "1px solid #b9b9b966" }} />
      {data &&
        data.brands.map((item) => (
          <div key={item.id}>
            <Link to={`./Brands/${item.slug}`} style={{ textDecoration: "none" }}>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: "0",
                }}
              >
                <li
                  className='linkitem'
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    fontFamily: "Roboto",
                    color: "white",
                  }}
                >
                  {item.title}
                </li>
                {/* <div
                  style={{
                    width: "2rem",
                    fontSize: "2rem",
                    marginRight: "0.5rem",

                    position: "relative",
                    top: "8px",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.svg.text.replace(/\\n/g, "") }}
                /> */}
              </ul>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Brands;
