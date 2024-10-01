import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import srkImage1 from "./image (2).png";
import Reachus from "../../Components/Reachus/Reachus";
import "./SrkGroup1.css";

const SrkGroup1 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>SRK Maa Bhimeshwari Kul</title>
        <meta
          name="description"
          content="Join the SRK Maa Bhimeshwari Kul and stay connected with our Kuldevi for the betterment of future generations."
        />
      </Helmet>
      <div className="hero home-hero"></div>

      <section className="about py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="Bhimeshwari">
                <img
                  src={srkImage1}
                  alt="Maa Bhimeshwari Kul"
                  data-bs-toggle="modal"
                  data-bs-target="#imageModal"
                  style={{ cursor: "pointer" }}
                />
              </div>

              {/* Bootstrap Modal */}
              <div
                className="modal fade"
                id="imageModal"
                tabIndex="-1"
                aria-labelledby="imageModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  {" "}
                  {/* modal-lg to make the modal larger */}
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="imageModalLabel">
                        SRK Maa Bhimeshwari Kul
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body text-center">
                      <img
                        src={srkImage1}
                        alt="Maa Bhimeshwari full-size"
                        className="img-fluid w-50"
                      />{" "}
                      {/* w-100 ensures the image fills the modal */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h2 className="title-Head py-2">SRK Maa Bhimeshwari Kul</h2>
              <p className="fs-bold py-2">
                <strong>एक नज़र कुल देवी की ओर</strong>
              </p>

              <p className="mb-2 py-2">
                हमारी कुल देवी बेरी वाली मां भीमेश्वरी जी हैं, जिनका ध्यान हम
                सदैव बनाए रखते हैं। हमारे SRK Group के माध्यम से यह हमारा एक
                छोटा सा प्रयास है की हम अपनी कुल देवी के भक्तों को एक ही परिवार
                में जोड़कर, अपनी आने वाली पीढ़ियों को, अपनी कुल देवी के प्रति
                जागरूक रख सकें। जिसके लिए हम चाहते हैं कि ज्यादा से ज्यादा
                दिल्ली से, दिल्ली  के आस पास और दूर दूर से, जिन सदस्यों की कुल
                देवी मां बेरी वाली हैं, वे हमारे साथ जुड़े एवं अपनी कुल देवी के
                प्रति होने वाली गतिविधियों में हिस्सा लें।
              </p>

              <p className="mt-4 py-2">
                यदि आप मां बेरी वाली के कुल से जुड़ना चाहते हैं तो कृप्या दाईं
                ओर दिए हुए व्हाट्सएप लिंक के द्वारा हमारे कम्युनिटी ग्रुप से
                जुड़े। जहां आपको प्रतिदिन मां बेरी वाली के दर्शन मिलेंगे एवं हर
                गतिविधि की सूचना दी जाएगी।
              </p>
              <p>
                <strong className="color" >
                  <i className="fa-brands fa-instagram" style={{color:"red"}}></i><a href="https://www.instagram.com/srkmaabhimeshwarikul.beri?igsh=MWR1eTJoMWI2aTBhZA=="
                    className="insta"
                    target="_blank"
                    rel="noopener noreferrer">
                    Follow us on Instagram
                  </a>
                </strong>
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <Reachus />
      </section>
    </>
  );
};

export default SrkGroup1;
