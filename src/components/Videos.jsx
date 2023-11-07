import React from "react";
import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";

const Videos = (props) => {
  const [channel, setChannel] = useState("");

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
        const link = result.items[0].snippet.customUrl;

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

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="mt-5">
        <div className="d-flex" style={{ margin: "32px" }}>
          <div className="row">
            {props.searchData &&
              props.searchData
                .filter((element) => {
                  return element.id.videoId !== undefined;
                })
                .map((element) => (
                  <div
                    className="col align-items-center mb-5 d-flex justify-content-center"
                    key={element.snippet.title}
                  >
                    <VideoCard
                      key={element.snippet.title}
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
  );
};

export default Videos;
