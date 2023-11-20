import React from "react";
import ReactPlayer from "react-player";
import SuggestedVideos from "../components/SuggestedVideos";
import { useParams } from "react-router-dom";

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
      <div style={{color: "white"}}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
        />
        <p style={{fontSize: "larger", fontWeight: '600', width:"33em", marginTop: "0.5rem", marginBottom: "0rem"}}>
          Lorem ipsum dolor sit
        </p>
        
        <p  style={{fontSize: "small", fontWeight: '100', width:"33em"}}>
          Lorem ipsum dolor sit
        </p>

      </div>

      <SuggestedVideos />
    </div>
  );
};

export default VideoDetail;
