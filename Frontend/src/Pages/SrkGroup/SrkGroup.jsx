import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import geeta from "../../Assets/about.jpeg";
import Reachus from "../../Components/Reachus/Reachus";
import "./SrkGroup.css";
const SrkGroup = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>SRK Bhagwat Geeta Group</title>
        <meta
          name="description"
          content="Join the SRK Bhagwat Geeta Group to partake in the global study of the Bhagavad Gita. Free registration, no fees, and open to all!"
        />
      </Helmet>
      <div className="hero home-hero"></div>

      <section className="about py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="geetaimg">
                <img
                  src={geeta}
                  alt="geeta"
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
                       SRK Bhagwat Geeta Group
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
                        src={geeta}
                        alt="geeta full-size"
                        className="img-fluid w-100"
                      />{" "}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-1"></div>
            {/* <div className="col-md-"></div> */}
            <div className="col-md-5">
              <h2 className="title-Head mb-2">SRK Bhagwat Geeta Group</h2>
              <p className="fs-bold">
                <strong>श्रीमद् भगवत गीता महाअध्यन</strong>
              </p>
              <p>हमारा उद्देश्य है - "घर घर में श्रीमद् भगवत गीता पाठ"🙏</p>

              <p className="mb-2">
                विश्व स्तर पर इस चमत्कारी महाज्ञान के विस्तार का प्रचार करना
                अपने आप में एक अद्भुत एहसास है, जो हमे हर क्षण प्रभु श्री कृष्ण
                से जुड़े रहने का एहसास करवाता है। प्रभु के चरणों से लगे रहने का
                एवं प्रभु की कृपा को पाने का यह बहुत ही सरल उपाय है।
              </p>
              <p className="mb-2">
                एकादशी के दिन, श्रीमद् भगवत गीता का अध्यन करने से, कई गुना
                ज्यादा पुन्न प्राप्त होता है। घर में सुख समृद्धि का वास होता है।
                इसलिए हर एकादशी पर प्रभु को केवल 15-20 मिनट अर्पण करके (अपने ही
                निवास स्थान या कार्यालय से), इस पवित्र ग्रंथ को पढ़कर हम सब अपने
                जीवन को कृतार्थ करें।
              </p>
              <p>
                इस प्रिक्रिया में सर्वप्रथम आपके नाम का निशुल्क रजिस्ट्रेशन किया
                जाएगा, उसके पश्चात् आपको एक बैच में जोड़ा जाएगा और आपको रोल नंबर
                दिया जाएगा।
              </p>
              <p className="fs-bold">
                <strong>प्रक्रिया का विवरण:</strong>
              </p>
              <p className="fs-bold">
                <ul>
                  <li>
                    <p>प्रत्येक एकादशी पर (15 दिनों में एक बार)</p>
                  </li>
                  <li>
                    <p>केवल 01 अध्याय पढ़ना होगा</p>
                  </li>
                  <li>
                    <p>अपने ही निवास स्थान या कार्यालय से ऑफ लाइन</p>
                  </li>
                  <li>
                    <p>अध्यन समय : 05 am to 05 pm (इस समय के मध्य कभी भी)</p>
                  </li>
                  <li>
                    <p>
                      अध्याय पठन के बाद, आपको दिए गए प्रारूप में अपने बैच में
                      जमा करना होगा।
                    </p>
                  </li>
                </ul>
              </p>
              <p>
                यदि आप हमारे वैश्वीक महाअध्यन "भगवत गीता ग्रुप" के साथ जुड़ना
                चाहतें हैं तो कृपया अपने नाम का रजिस्ट्रेशन करें या हमसे संपर्क
                करें।
              </p>
              <p className="fs-bold">
                <strong>यह प्रक्रिया निस्वार्थ भाव एवं निशुल्क है।</strong>
              </p>
              <div className="my-5 btns">
                <Link to="/registration" className="member-btn">
                  Register Now
                </Link>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <Reachus />
      </section>
    </>
  );
};

export default SrkGroup;
