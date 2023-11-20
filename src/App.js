import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [searchText, setSearchText] = useState("new");
  const [searchData, setSearchData] = useState([]);
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
        setSearchData(result.items);
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
    <BrowserRouter>
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchText={searchText}
              setSearchText={setSearchText}
              searchData={searchData}
              setSearchData={setSearchData}
              loading={loading}
              setLoading={setLoading}
              progress={progress}
              setProgress={setProgress}
              nextPage={nextPage}
              setNextPage={setNextPage}
              cumResults={cumResults}
              setCumResults={setCumResults}
              totalResults={totalResults}
              setTotalResults={setTotalResults}
            />
          }
        ></Route>
        <Route path="/video/:id" element={<VideoDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
