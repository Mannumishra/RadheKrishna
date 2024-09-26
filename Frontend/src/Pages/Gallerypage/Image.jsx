import React, { useEffect, useState } from "react";
import CapturedMovements from "../../Assets/Movements.png";
import { Helmet } from "react-helmet";

const Image = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const setMomentImages = [
    CapturedMovements,
    CapturedMovements,
    CapturedMovements,
    CapturedMovements,
    CapturedMovements,
    CapturedMovements,
  ];

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
              {setMomentImages &&
                setMomentImages.map((image, index) => (
                  <img
                    src={image}
                    alt="moments-image"
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(image)} // Click event to open the modal
                  />
                ))}
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
          <div className="modal-dialog modal-dialog-centered modal-fullscreen">
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
                <img src={selectedImage} alt="Fullscreen" className="img-fluid w-50 " />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
