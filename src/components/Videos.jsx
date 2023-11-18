import React from "react";
import VideoCard from "./VideoCard";
import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const Videos = (props) => {
  const [channel, setChannel] = useState("");
  const prevNextPageRef = useRef(props.nextPage);
  console.log(props.totalResults);

  useEffect(() => {
    const fetchChannelData = async () => {
      const url = `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channel}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "82c2def9a1mshba65abc8c666d67p13f42ajsnfb77d04de1fe",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        const link = result && result.items[0].snippet.customUrl;

        window.open(
          `https://youtube.com/${link}`,
          "_blank" // <- This is what makes it open in a new window.
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchChannelData();
  }, [channel]);

  const fetchMoreData = async () => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${props.searchText}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date&pageToken=${prevNextPageRef.current}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "82c2def9a1mshba65abc8c666d67p13f42ajsnfb77d04de1fe",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      props.setSearchData(props.searchData.concat(result.items));
      prevNextPageRef.current = result.nextPageToken;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={
        props.searchData.filter((element) => {
          return element !== undefined;
        }).length
      }
      next={fetchMoreData}
      hasMore={
        props.nextPage
          ? props.searchData.filter((element) => {
              return element !== undefined;
            }).length !== props.totalResults
          : false
      }
      loader={<Spinner />}
      style={{ overflowY: "hidden" }}
    >
      <div style={{ backgroundColor: "black" }}>
        <div className="mt-5">
          <div className="d-flex" style={{ margin: "32px" }}>
            <div className="row">
              {props.searchData
                .filter((element) => {
                  return (
                    element !== undefined && element.id.videoId !== undefined
                  );
                })
                .map((element, index) => (
                  <div
                    className="col align-items-center mb-5 d-flex justify-content-center"
                    key={element.id.videoId}
                  >
                    <VideoCard
                      // key={element.snippet.title}
                      title={element.snippet.title}
                      thumbNail={element.snippet.thumbnails.high.url}
                      channelTitle={element.snippet.channelTitle}
                      videoID={element.id.videoId}
                      channelID={element.snippet.channelId}
                      setChannel={setChannel}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Videos;
