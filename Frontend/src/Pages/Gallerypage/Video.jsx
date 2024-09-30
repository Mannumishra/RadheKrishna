import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import YouTube from "react-youtube";

// Helper function to extract the YouTube video ID
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const Video = () => {
  const [videoSources, setVideoSources] = useState([]);
  const currentVideoRef = useRef(null);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get("https://api.kanusrkgroup.in/api/video");
        if (res.status === 200) {
          setVideoSources(res.data.data);
        }
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
    };

    getApiData();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleVideoPlay = (event) => {
    if (currentVideoRef.current && currentVideoRef.current !== event.target) {
      currentVideoRef.current.pauseVideo();
    }
    currentVideoRef.current = event.target;
  };

  return (
    <>
      <Helmet>
        <title>Videos Gallery - Kanu SRK Group</title>
        <meta
          name="description"
          content="Explore the moments captured in our video gallery."
        />
        <meta name="keywords" content="Video Gallery, Kanu SRK Group, Moments" />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>

      <div className="hero home-hero">
        {/* Add hero content here */}
      </div>

      <section className="my-2">
        <div className="container">
          <div className="imagetext">
            <h2 className="title-head">Videos Gallery</h2>

            <div className="row">
              {videoSources && videoSources.length > 0 ? (
                videoSources.map((video, index) => {
                  const videoId = getYouTubeVideoId(video.video); // Extract video ID
                  if (!videoId) return null; // Skip if videoId is invalid

                  return (
                    <div className="col-md-4 col-sm-6 mb-4" key={index}>
                      <YouTube
                        videoId={videoId}
                        opts={{
                          width: "100%",
                          height: "240",
                          playerVars: {
                            autoplay: 0,
                          },
                        }}
                        onPlay={handleVideoPlay}
                      />
                    </div>
                  );
                })
              ) : (
                <p>No videos available</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
