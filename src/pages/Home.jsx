import React, { useRef } from "react";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Videos from "../components/Videos";
import Spinner from "../components/Spinner";
import LoadingBar from "react-top-loading-bar";
import NoResult from "../components/NoResult";
import Sidebar from "../components/Sidebar";

const Home = (props) => {
  return (
    <>
      <LoadingBar height={4} color="red" progress={props.progress} />
      <div className="d-flex">
        <Sidebar setSearchText={props.setSearchText}/>
        {props.loading === true ? (
          <Spinner />
        ) : props.searchData.length !== 0 ? (
          <Videos
            searchData={props.searchData}
            setSearchData={props.setSearchData}
            nextPage={props.nextPage}
            setNextPage={props.setNextPage}
            searchText={props.searchText}
            cumResults={props.cumResults}
            setCumResults={props.setCumResults}
            totalResults={props.totalResults}
          />
        ) : (
          <NoResult />
        )}
      </div>
    </>
  );
};

export default Home;
