import React, { useRef } from "react";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Videos from "../components/Videos";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import LoadingBar from "react-top-loading-bar";
import NoResult from "../components/NoResult";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [searchText, setSearchText] = useState("new");
  const [searchData, setSearchData] = useState([]);
  // const searchData = useRef([])
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [nextPage, setNextPage] = useState("");
  const [cumResults, setCumResults] = useState(50);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchText}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "82c2def9a1mshba65abc8c666d67p13f42ajsnfb77d04de1fe",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      try {
        setLoading(true);
        setProgress(15);
        const response = await fetch(url, options);
        setProgress(40);
        const result = await response.json();
        setProgress(65);
        // console.log(result.items)
        setSearchData(result.items);
        // searchData.current = result.items
        // console.log(searchData)
        setTotalResults(result.pageInfo.totalResults);
        setNextPage(result.nextPageToken);
        setProgress(100);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchText]);

  return (
    <>
      <LoadingBar height={4} color="red" progress={progress} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "black",
          alignItems: "center",
        }}
        className="fixed-top"
      >
        <Logo setSearchText={setSearchText} />
        <SearchBar setSearchText={setSearchText} />
      </div>
      <div className="d-flex">
        <Sidebar setSearchText={setSearchText}/>
        {loading === true ? (
          <Spinner />
        ) : searchData.length !== 0 ? (
          <Videos
            searchData={searchData}
            setSearchData={setSearchData}
            nextPage={nextPage}
            setNextPage={setNextPage}
            searchText={searchText}
            cumResults={cumResults}
            setCumResults={setCumResults}
            totalResults={totalResults}
          />
        ) : (
          <NoResult />
        )}
      </div>
    </>
  );
};

export default Home;
