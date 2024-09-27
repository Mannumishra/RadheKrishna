import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Image = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch image data from API on component mount
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get("https://api.kanusrkgroup.in/api/gallery");
        if (response.status === 200 && response.data.success) {
          setImages(response.data.data); // Set images from the API response
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();

    // Scroll to the top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image as selected
  };

  return (
    <>
      {/* Add Helmet for managing document head */}
      <Helmet>
        <title>Photos Gallery - Kanu SRK Group</title>
        <meta name="description" content="Explore the moments captured in our photo gallery." />
        <meta name="keywords" content="Photo Gallery, Kanu SRK Group, Moments" />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>

      <div className="hero home-hero"></div>

      <section className="my-2">
        <div className="container">
          <div className="imagetext">
            <h2 className="title-head">Photos Gallery</h2>

            <div className="grid-3">
              {/* Render images dynamically from API */}
              {images.length > 0 ? (
                images.map((imageData, index) => (
                  <img
                    src={imageData.gallery}
                    alt="moments-image"
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(imageData.gallery)} // Click event to open the modal
                  />
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bootstrap Modal for Fullscreen Image */}
      {selectedImage && (
        <div
          className="modal fade show"
          style={{ display: "block" }} // Ensures modal is displayed when selectedImage is set
          tabIndex="-1"
          aria-labelledby="imageModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedImage(null)} // Close the modal
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedImage} alt="Fullscreen" className="img-fluid w-100 " />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
