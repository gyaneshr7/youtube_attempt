import React from "react";
import { logo } from "../utils/constants";
import { useNavigate } from "react-router-dom";


const Logo = (props) => {
  const navigate = useNavigate()
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
        if(document.getElementById('sidebar'))
        document.getElementById("sidebar").style.display = "flex";
        navigate('/')
      }}
    />
  );
};

export default Logo;
