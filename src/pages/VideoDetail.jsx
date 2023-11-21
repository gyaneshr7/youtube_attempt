import React from "react";
import SuggestedVideos from "../components/SuggestedVideos";
import { useParams } from "react-router-dom";
import VideoDescription from "../components/VideoDescription";

const VideoDetail = () => {
  const { id } = useParams();

  return (
    <div
      className="d-flex"
      style={{
        maxWidth: "87vw",
        marginTop: "65px",
        justifyContent: "center",
        marginLeft: "5vw",
      }}
    >
      <VideoDescription id={id}/>
      <SuggestedVideos id={id}/>
    </div>
  );
};

export default VideoDetail;
