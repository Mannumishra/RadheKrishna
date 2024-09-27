import React, { useEffect } from "react";
import "./Objective.css";
import { Helmet } from "react-helmet";

const Objective = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>

<Helmet>
        <title>Our Mission - Kanu SRK Group</title>
        <meta name="description" content="Discover the mission and values of Kanu SRK Group. Join us in our journey of self-realization, love, and service." />
        <meta name="keywords" content="mission, values, Kanu SRK Group, spiritual family" />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>
      {/* bread-content ==  */}
      <div className="hero home-hero">
       
      </div>

      <section className="my-2 mission">
        <div className="container">
          <div className="imagetext">
            <h1 className="title-head">Our Mission</h1>
            <div className="mission-obj text-left">
            <h2 className="fs-6 fw-bold text-start py-1"><strong>परिचय (Introduction)</strong></h2>
            
              <p>
                <small>
                  हमारा समूह एक आध्यात्मिक परिवार है, जो आत्म-ज्ञान, प्रेम और
                  सेवा के मार्ग पर चलते हुए जीवन की अद्भुत आनंदमयी प्रसन्नता का
                  अनुभव करते हैं। हमारा उद्देश्य है व्यक्तिगत जन को अपने अंतर मन
                  की शांति और संतुष्टि को प्राप्त करने में मदद करना, और समाज में
                  सकारात्मक परिवर्तन लाने के लिए एक साथ, एक जुट होकर काम करना।
                </small>
              </p>
              <h2 className="fs-6 fw-bold text-start py-2"><strong> हमारे मूल्य (Our Values)</strong></h2>
              <p></p>
              <ul>
                <li>
                  <p>प्रेम और सहानुभूति</p>
                  </li>
                <li><p>आत्म-ज्ञान और व्यक्तिगत विकास</p></li>  
                 <li><p>सेवा और समाजिक सद्भाव</p></li>
                 <li><p>एकता और समर्थन</p></li> 
                
              </ul>

              <h2 className="fs-6 fw-bold text-start py-2"><strong> हमारे कार्यक्रम (Our Programs)</strong></h2>
              <p></p>
              <ul>
                <li>
                  <p>धार्मिक एवं पारिवारिक यात्राएं</p>
                  </li>
                  <li><p>आध्यात्मिक विचार-विमर्श</p></li>
                  
                 <li> <p>सामाजिक सेवा गतिविधियाँ</p></li> 
                 <li><p>धार्मिक कार्यक्रम (कथा, कीर्तन, भजन संध्या आदि)</p></li> 
                
              </ul>

              <p>
                <small>
                  "आओ मिलकर आत्म-ज्ञान की ओर बढ़ें, और जीवन की सच्ची खुशी को
                  खोजें। हमारा आध्यात्मिक परिवार आपका स्वागत करता है।"
                </small>
              </p>
              <p><small>
                हमें आशा है की आप भी हमारे "कनु श्री राधे कृष्णा ग्रुप" के साथ
                जुड़कर...स्वयं भी इस आलौकिक अनुभव को प्राप्त करना चाहेंगे।
                </small> </p>
              <p><strong>जय श्री राधे कृष्ण </strong></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Objective;
