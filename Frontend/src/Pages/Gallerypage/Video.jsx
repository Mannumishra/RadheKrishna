import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Video = () => {
  // State to store video data from API
  const [videoSources, setVideoSources] = useState([]);

  // Fetch video data from API on component mount
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

    // Scroll to the top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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

      {/* bread-content ==  */}
      <div className="hero home-hero">
        {/* Add hero content here */}
      </div>

      <section className="my-2">
        <div className="container">
          <div className="imagetext">
            <h2 className="title-head">Videos Gallery</h2>

            {/* Bootstrap grid system */}
            <div className="row">
              {videoSources && videoSources.length > 0 ? (
                videoSources.map((video, index) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={index}>
                    <iframe
                      width="100%"
                      height="240"
                      src={video.video} // Use video URL from API data
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))
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
