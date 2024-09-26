import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
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

const SrkProducts = () => {
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
                  लिए परेशान नहीं होना पड़ता। हम उन्हे घर बैठे ही यह सेवा देते
                  हैं। हमारे कई क्लाइंट हैं बाहर विदेश में जिन्हें हम यह सुविधा
                  प्रदान करतें आ रहे हैं। एवं हमारी कलैक्शन की गुणवत्ता और हमारी
                  इस सेवा के लिए हम जाने जाते हैं।
                </small>
              </p>
              <p>
                <small>
                  यदि आपको भी आपके गोपाल जी के लिए पोशाक ऑर्डर करनी हो तो आप
                  नीचे दिए नंबर पर व्हाट्सअप मैसेज कर सकते हैं। आपको पोशाक की
                  फोटो कैटेलॉग मिल जायेगी। एवं नीचे दिए गए लिंक के माध्यम से भी
                  आप हमारे इंस्टाग्राम के पेज से जुड़ सकते हैं।
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
                    rel="noopener noreferrer" // Security measure
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
              <div className="col-md-3 mb-3" key={index}> {/* Use index as key */}
                <img
                  src={image}
                  alt={`Dress ${index + 1}`} // Better alt text
                  className="img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SrkProducts;
