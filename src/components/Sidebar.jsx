import React from "react";
import { useState } from "react";

const Sidebar = (props) => {
  const style = {
    background: "red",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "25px",
    borderRadius: "20px",
    whiteSpace: "nowrap",
    marginBottom: "1rem",
    cursor: "pointer",
  };

  const [category, setCategory] = useState("New");

  // const selectCategory = (e) => {
  //   setCategory(e.target.value)
  //   console.log(e.target.value)
  // }

  return (
    <div
      className="mx-2 mt-5"
      id="sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        borderRightColor: "white",
        borderRightStyle: "solid",
        padding: "5px",
        height: "fit-content",
      }}
    >
      <div
        id="new"
        style={{
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingLeft: "15px",
          paddingRight: "25px",
          borderRadius: "20px",
          whiteSpace: "nowrap",
          marginBottom: "1rem",
          cursor: "pointer",
          background:
            document.getElementById("new") &&
            document.getElementById("new").innerText === category
              ? "red"
              : "black",
        }}
        onClick={() => {
          setCategory("New");
          props.setSearchText("New");
          document.getElementById("textarea").value = ""
        }}
      >
        New
      </div>

      <div
        id="Sports"
        style={{
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingLeft: "15px",
          paddingRight: "25px",
          borderRadius: "20px",
          whiteSpace: "nowrap",
          marginBottom: "1rem",
          cursor: "pointer",
          background:
            document.getElementById("Sports") &&
            document.getElementById("Sports").innerText === category
              ? "red"
              : "black",
        }}
        onClick={() => {
          setCategory("Sports");
          props.setSearchText("Sports")
          document.getElementById("textarea").value = ""
        }}
      >
        Sports
      </div>
      
      <div
        id="Music"
        style={{
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingLeft: "15px",
          paddingRight: "25px",
          borderRadius: "20px",
          whiteSpace: "nowrap",
          marginBottom: "1rem",
          cursor: "pointer",
          background:
            document.getElementById("Music") &&
            document.getElementById("Music").innerText === category
              ? "red"
              : "black",
        }}
        onClick={() => {
          setCategory("Music");
          props.setSearchText("Music")
          document.getElementById("textarea").value = ""
        }}
      >
        Music
      </div>
     
      <div
        id="Technology"
        style={{
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingLeft: "15px",
          paddingRight: "25px",
          borderRadius: "20px",
          whiteSpace: "nowrap",
          marginBottom: "1rem",
          cursor: "pointer",
          background:
            document.getElementById("Technology") &&
            document.getElementById("Technology").innerText === category
              ? "red"
              : "black",
        }}
        onClick={() => {
          setCategory("Technology");
          props.setSearchText("Technology")
          document.getElementById("textarea").value = ""
        }}
      >
        Technology
      </div>
    </div>
  );
};

export default Sidebar;
