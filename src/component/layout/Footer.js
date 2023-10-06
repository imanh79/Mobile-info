import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Link to={"https://github.com/imanh79"} style={{ textDecoration: "none" }}>
      <div style={{ marginTop: "3rem" }}>
        <div
          className='linkitem'
          style={{
            width: "100%",
            textAlign: "center",
            background: "rgb(47, 43, 58)",
            color: "white",
            padding: "0.5rem 0",
          }}
        >
          <p style={{ margin: "0", display: "inline", marginLeft: "0.5rem" }}>♡Developed by Iman</p>{" "}
          <i class='fa-brands fa-github'></i>
        </div>
      </div>
    </Link>
  );
};

export default Footer;
