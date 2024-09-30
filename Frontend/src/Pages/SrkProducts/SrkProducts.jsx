import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./SrkProducts.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

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

  const [momentImages, setMomentImages] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.kanusrkgroup.in/api/dress");
      console.log(res);
      if (res.status === 200) {
        setMomentImages(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, [momentImages.length]);

  // Function to open modal with selected image
  const handleOpenModal = (image) => {
    setSelectedImage(image.dressImage); // Pass the image source to the modal
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
                  पोशाक मिलती है। हमारे पास जो कलैक्शन है वह खास इस बात का ध्यान
                  में रखते हुए है की गोपाल जी इतने कोमल हैं की उनको किसी भी तरह
                  की कोई पोशाक चुभनी नही चाहिए।
                </small>
              </p>
              <p>
                <small>
                  आप लोग घर बैठे भी यह पोशाक खरीद सकतें हैं। जो जल्द से जल्द
                  आपको कोरियर के माध्यम से मिल जायेगी। एवं हमारे यहां से
                  देश-विदेश में हर जगह पोशाक भेजने की सुविधा दी जाती है। जिससे
                  कि जो लोग अंतरराष्ट्रीय रहते हैं, उन्हें गोपाल जी की पोशाक के
                  लिए परेशान नहीं होना पड़ता । हम उन्हे घर बैठे ही यह सेवा देते
                  हैं। हमारे कई क्लाइंट हैं बाहर विदेश में जिन्हें हम यह सुविधा
                  प्रदान करतें आ रहे हैं। एवं हमारी कलैक्शन की गुणवत्ता और हमारी
                  इस सेवा के लिए हम जाने जाते हैं।{" "}
                </small>
              </p>
              <p>
                <small>
                  यदि आपको भी आपके गोपाल जी के लिए पोशाक ऑर्डर करनी हो तो आप
                  नीचे दिए नंबर पर व्हाट्सअप मैसेज कर सकते हैं। आपको पोशाक की
                  फोटो कैटेलॉग मिल जायेगी। एवं नीचे दिए गए लिंक के माध्यम से भी
                  आप हमारे इंस्टाग्राम के पेज से जुड़ सकते हैं।
                </small>{" "}
              </p>
              <p>
                <strong>Whatsapp no. +91 9873031650</strong>
              </p>
              <p>
                <strong className="color" >
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
            {momentImages.map((image, index) => (
              <div className="col-md-3 mb-3" key={index}>
                {/* Click handler to open modal */}
                <img
                  src={image.dressImage}
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
