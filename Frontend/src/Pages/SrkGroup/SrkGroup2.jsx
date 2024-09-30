import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import srkImage2 from "./image (3).png";
import Reachus from "../../Components/Reachus/Reachus";
import "./SrkGroup2.css";

const SrkGroup2 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>SRK Yatra Group</title>
        <meta
          name="description"
          content="Join the SRK Yatra Group and stay connected with our Kuldevi for the betterment of future generations."
        />
      </Helmet>
      <div className="hero home-hero"></div>

      <section className="about py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="yatraGroup">
                <img
                  src={srkImage2}
                  alt="SRK Yatra Group"
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
                        SRK Yatra Group
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
                        src={srkImage2}
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
              <h2 className="title-Head py-2">SRK Yatra Group</h2>

              <p className="py-2">
                हम अपने "कनु श्री राधे कृष्णा ग्रुप" के सभी सदस्यों के लिए
                धार्मिक एवं अन्य पारिवारिक समूह यात्राओं का अयोजन करते हैं। सभी
                अच्छे से अच्छी व्यवस्थाओं को ध्यान में रखते हुए, कोशिश करते हैं
                की कम से कम खर्चे पर अपने ग्रुप को यात्राओं पर लेकर जाएं। जैसे
                ज्योर्तिलिंग दर्शन, त्रिवेणी संगम, गंगा सागर और सभी बड़े धाम
                इत्यादि। एवं केवल धार्मिक यात्रा ही नही, अन्य परिवारिक मनोरंजन
                यात्राओं पर भी लेकर जाते हैं।
              </p>
              <p className="py-2">
                पिछले वर्षों में कई धार्मिक एवं परिवारिक सफल यात्राएं करी हैं और
                आगे भी इसी तरह अलग अलग देश विदेश की यात्राएं करवाते रहेंगे।
              </p>
              <p className="py-2">
                यदि आप SRK यात्रा ग्रुप के साथ जुड़ना चाहते हैं तो कृप्या दाईं
                ओर दिए हुए व्हाट्सएप लिंक के द्वारा हमारे कम्युनिटी ग्रुप से
                जुड़े। जहां आपको आने वाले समय में नई यात्राओं के विषय में
                जानकारी मिलती रहेगी।
              </p>
              <p>
                <strong className="color" >
                  <i className="fa-brands fa-whatsapp"></i><a href="https://chat.whatsapp.com/LpObqmi3hnsDnKEeL0k0Lv"
                    className="whatsapp"
                    target="_blank"
                    rel="noopener noreferrer">
                    Join Whatsapp Community
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

export default SrkGroup2;
