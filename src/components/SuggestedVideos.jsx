import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuggestedVideos = (props) => {
  const [videoList, setVideoList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${props.id}&part=id%2Csnippet&type=video&maxResults=50`;
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
        console.log(result.items);
        setVideoList(result.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRelatedVideos();
  }, [props.id]);

  return (
    <div className="mx-5 d-flex flex-column" style={{ width: "25vw" }}>
      {videoList &&
        videoList
          .filter((element) => {
            return element !== undefined && element.id.videoId !== undefined;
          })
          .map((element) => (
            <div className="d-flex" key={element.id.videoId}>
              <img
                src={element.snippet.thumbnails.default.url}
                alt=""
                style={{ height: "100px", cursor: "pointer" }}
                onClick={() => {
                  navigate(`/video/${element.id.videoId}`);
                }}
              />

              <div
                className="d-flex flex-column mx-2"
                style={{
                  height: "3em",
                  transform: "translateY(8px)",
                  color: "white",
                }}
              >
                <p
                  className="title"
                  style={{
                    fontSize: "0.7em",
                    marginBottom: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(`/video/${element.id.videoId}`);
                  }}
                >
                  {element.snippet.title.length > 45
                    ? element.snippet.title.slice(0, 45).concat("...")
                    : element.snippet.title}
                </p>
                <p
                  style={{
                    fontSize: "x-small",
                    marginBottom: "5px",
                    cursor: "pointer",
                  }}
                >
                  {element.snippet.channelTitle}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default SuggestedVideos;
