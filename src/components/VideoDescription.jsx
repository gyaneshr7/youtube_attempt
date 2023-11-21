import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoDescription = (props) => {
  const [videoDetails, setVideoDetails] = useState(null)

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const url =
        `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${props.id}`;
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
        setVideoDetails(result.items[0])
      } catch (error) {
        console.error(error);
      }
      
    };

    fetchVideoDetails()
  }, [props.id]);

  return (
    <div style={{ color: "white", width: "640px" }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${props.id}`}
        className="react-player"
        controls
      />
      <p
        className="titleName"
        style={{
          fontSize: "larger",
          fontWeight: "600",
          width: "33em",
          marginTop: "0.5rem",
          marginBottom: "0rem",
        }}
      >
        {videoDetails && videoDetails.snippet.title}
      </p>

      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <p
          className="channelName"
          style={{ fontSize: "small", fontWeight: "600", width: "33em" }}
        >
          {videoDetails && videoDetails.snippet.channelTitle}
        </p>

        <span
          style={{ fontSize: "small", fontWeight: "600", borderRadius: "2px" }}
        >
          {videoDetails && videoDetails.statistics.likeCount} likes
        </span>
      </div>

      <div
        style={{
          background: "#282828",
          fontSize: "smaller",
          fontWeight: "300",
          borderRadius: "10px",
          overflow: "hidden",
          padding: "6px",
        }}
      >
        <span
          style={{
            background: "#282828",
          }}
        >
          {videoDetails && videoDetails.statistics.viewCount} views
        </span>
        <p
          style={{
            background: "#282828",
            marginBottom: "0px",
          }}
          className="description"
        >
          {videoDetails && videoDetails.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDescription;
