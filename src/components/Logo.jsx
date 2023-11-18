import React from "react";
import { logo } from "../utils/constants";

const Logo = (props) => {
  return (
    <img
      src={logo}
      alt="logo"
      style={{
        height: "30px",
        marginLeft: "10px",
        marginTop: "2px",
        cursor: "pointer",
      }}
      onClick={() => {
        props.setSearchText("new");
        document.getElementById("sidebar").style.display = "flex";
      }}
    />
  );
};

export default Logo;
