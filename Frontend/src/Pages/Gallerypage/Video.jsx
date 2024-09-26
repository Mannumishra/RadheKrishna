import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Example of YouTube video URLs
const videoSources = [
  "https://www.youtube.com/embed/71-a76ENbY4",
  "https://www.youtube.com/embed/71-a76ENbY4",
  "https://www.youtube.com/embed/71-a76ENbY4",
  "https://www.youtube.com/embed/71-a76ENbY4",
  "https://www.youtube.com/embed/71-a76ENbY4",
  "https://www.youtube.com/embed/71-a76ENbY4",
];

const Video = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Videos Gallery - Kanu SRK Group</title>
        <meta name="description" content="Explore the moments captured in our video gallery." />
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
              {videoSources &&
                videoSources.map((videoSrc, index) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={index}>
                    <iframe
                      width="100%"
                      height="240"
                      src={videoSrc}
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
