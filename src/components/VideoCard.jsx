import React from "react";
import { useState } from "react";
import "./VideoCard.css";

const VideoCard = (props) => {
  const slicedTitle = props.title.slice(0, 60);
  const videoData = {
    title: props.title.length > 60 ? slicedTitle.concat("...") : props.title,
    description: props.channelTitle,
    thumbnailUrl: props.thumbNail,
  };

  return (
    <div
      className="video-card text-center"
      style={{ cursor: "pointer", width: "fit-content" }}
    >
      <a
        href={`https://www.youtube.com/watch?v=${props.videoID}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={videoData.thumbnailUrl}
          alt={videoData.title}
          style={thumbnailStyle}
        />
      </a>
      <div
        className="video-details d-flex flex-column align-items-start"
        style={detailsContainerStyle}
      >
        <a
          href={`https://www.youtube.com/watch?v=${props.videoID}`}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="text-start">
            <h3
              className="titleHeading"
              style={titleStyle}
              dangerouslySetInnerHTML={{ __html: videoData.title }}
            ></h3>
          </div>
        </a>

        <div className="hover">
          <p
            style={descriptionStyle}
            onClick={() => {
              props.setChannel(props.channelID);
            }}
          >
            {videoData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const thumbnailStyle = {
  width: "240px",
  height: "135px",
  objectFit: "cover",
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
};

const detailsContainerStyle = {
  flex: 1,
  padding: "6px",
  color: "white",
};

const titleStyle = {
  fontSize: "1rem",
  margin: 0,
  color: "white",
  width: "15em",
};

const descriptionStyle = {
  fontSize: "1rem",
  color: "#555",
  margin: 0,
};

export default VideoCard;
