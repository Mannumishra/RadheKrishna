import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./SrkProducts.css";
import dress1 from "../../Assets/dress1.jpeg";
import dress2 from "../../Assets/dress2.jpeg";
import dress3 from "../../Assets/dress3.jpeg";
import dress4 from "../../Assets/dress4.jpeg";
import dress5 from "../../Assets/dress5.jpeg";
import dress6 from "../../Assets/dress6.jpeg";
import dress7 from "../../Assets/dress7.jpeg";
import dress8 from "../../Assets/dress8.jpeg";
import dress9 from "../../Assets/dress9.jpeg";
import dress10 from "../../Assets/dress10.jpeg";
import dress11 from "../../Assets/dress11.jpeg";
import dress12 from "../../Assets/dress12.jpeg";
import { Modal, Button } from "react-bootstrap";

const SrkProducts = () => {
  // State to manage modal visibility and selected image
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const setMomentImages = [
    dress1,
    dress2,
    dress3,
    dress4,
    dress5,
    dress6,
    dress7,
    dress8,
    dress9,
    dress10,
    dress11,
    dress12,
  ];

  // Function to open modal with selected image
  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Poshak Bhandar - Shri Kanu</title>
        <meta
          name="description"
          content="Explore premium dresses for Laddoo Gopal Ji at Shri Kanu Poshak Bhandar. Order now for home delivery!"
        />
      </Helmet>

      <div className="hero home-hero"></div>

      <section className="my-4 mission">
        <div className="container">
          <div className="imagetext">
            <h1 className="title-head">Shree Kanu Poshak Bhandar</h1>
            <div className="mission-text text-left">
              {/* Text content goes here */}
              <p>
                <small>
                  हमारे यहां लड्डू गोपाल जी की हर प्रकार की सुंदर एवं प्रिमियम
                  पोशाक मिलती है...
                </small>
              </p>
              <p className="vedicLastText">जय श्री कृष्णा</p>
              <p>
                <strong>Whatsapp no. +91 9873031650</strong>
              </p>
              <p>
                <strong>
                  <i className="fa-brands fa-instagram"></i>
                  Follow us on Instagram
                  <a
                    href="https://www.instagram.com/shreekanu_poshakbhandar?igsh=b25idmRveG85c2Rp"
                    className="insta"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    {" "}
                    Check it out
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row our-products">
            {setMomentImages.map((image, index) => (
              <div className="col-md-3 mb-3" key={index}>
                {/* Click handler to open modal */}
                <img
                  src={image}
                  alt={`Dress ${index + 1}`}
                  className="img"
                  onClick={() => handleOpenModal(image)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for displaying images */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Dress Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Dress"
              className="img-fluid w-100"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SrkProducts;
