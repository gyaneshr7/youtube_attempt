import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [text, setText] = useState("");

  return (
    <nav className="navbar bg-body-primary">
      <div className="container-fluid">
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => {
            props.setSearchText(text);
            e.preventDefault();
          }}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            style={{ color: "whitesmoke" }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
