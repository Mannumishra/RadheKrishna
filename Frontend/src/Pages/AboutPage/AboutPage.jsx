import React, { useEffect } from "react";
import Reachus from "../../Components/Reachus/Reachus";
import { Helmet } from "react-helmet";
import founderImage from "./founder.png";

import "./About.css";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Kanu SRK Group</title>
        <meta
          name="description"
          content="Learn about the founders and the mission of Kanu SRK Group."
        />
        <meta
          name="keywords"
          content="Kanu SRK Group, about us, founders, spiritual activities"
        />
        <meta name="author" content="Kanu SRK Group" />
      </Helmet>
      {/* bread-content ==  */}
      <div className="hero home-hero"></div>

      <section className="my-2 about">
        <div className="container">
          <h2 className="title-head">Founder President</h2>

          <div className="row overflow-hidden founder">
            <div className="col-md-5 bg-orange">
              <img
                src={founderImage}
                alt="Founder Mr. B.K Aggarwal and Ms.Kavita Aggarwal"
                className="p-5 pb-0"
              />
            </div>
            <div className="col-md-7 py-5 bg-yellow">
              <h2 className="text-center fw-bold ">
                Mr. B.K Aggarwal <br /> Ms.Kavita Aggarwal
              </h2>
              <p className="foundertext">
                05 August 2023 is still remembered very well by us, it will
                always be a date that we will remember throughout our lifetime.
                This was the day when Shri Krishna finally chose us to be a
                medium to play the main role in this spiritual activity.
              </p>
            </div>

            {/* <div className="col-md-5 mt-5">
              <img src={backbanner} alt="back banner" />
            </div> */}

            <div className="col-container">
              <h2 className="title-Head py-5 text-center">Our Story</h2>
              <div className="story-text">
                <p className="fs-bold mt-3 text-center">
                  <strong>ॐ नमो भगवते वासुदेवाय नमः</strong>
                </p>
                <p className="fs-bold text-center">
                  <strong>"वैश्विक महाअध्यन "</strong>
                </p>

                <p className="mt-2">
                  <small>
                    यदि आप सोच रहे हैं कि ये "महाअध्ययन" क्या है !! तो हमारा
                    विश्वास करें कि आप यहां किसी कारण से हैं। विश्वास करें कि
                    प्रभु श्री कृष्ण ने स्वयं आपको इस महाअध्ययन का हिस्सा बनने
                    के लिए चुना है एवं श्री कृष्ण का शौर्य कुछ ऐसा है जो आपको
                    अपने साथ जोड़कर, आपके जीवन के पलों को अच्छे पहलुओं में बदल
                    देता है। ऐसे ही हमे प्रभु से जुड़ने का सौभाग्य प्राप्त हुआ।
                  </small>{" "}
                </p>
                <p className="mt-2">
                  <small>
                    05 अगस्त 2023 हमें आज भी अच्छी तरह याद है, यह हमेशा एक ऐसी
                    तारीख रहेगी, जिसे हम अपने पूर्ण जीवनकाल में याद रखेंगे। यही
                    वह दिन था जब प्रभु श्री कृष्ण ने अंततः हमे इस आध्यात्मिक
                    गतिविधि में मुख्य भूमिका निभाने के लिए एक माध्यम बनने के लिए
                    चुना। एवं हमारे "श्री कनु ठाकुर जी" (हमारे लड्डू गोपाल) की
                    असीम कृपा से हम अपने जीवन को सफल मानते हैं और तह दिल से उनके
                    के इस उपकार के बहुत बहुत आभारी हैं की उन्होंने हम जैसे शून्य
                    को यह सामर्थ्य दिया।
                  </small>
                </p>
                <p className="mt-2">
                  <small>
                    उस दिन दोपहर के समय ऐसे ही बैठे हुए, हमे यह विचार आया कि
                    "श्रीमद्भागवत गीता" हमारे हिन्दू धर्म का एक सर्व श्रेष्ठ,
                    अद्भुत एवं चमत्कारिक ग्रंथ है। और यह ग्रंथ अधिकतर सभी के घर
                    में रखा होता है। परंतु कोई विरला ही होगा जो इसका अध्यन करता
                    होगा। तो विचार आया कि क्यों ना हम वैश्विक स्तर पर इस पवित्र
                    ग्रंथ "श्रीमद्भागवत गीता" का महा-अध्ययन शुरू करें। यह
                    श्रीमद्भागवत गीता एवं इसका अध्यन करने वाले, प्रभु श्री कृष्ण
                    को सबसे अधिक प्रिय हैं और हमारा सौभाग्य है की ठाकुर जी ने हम
                    सभी को यह सेवा का मौका दिया है। आने वाली अगली एकादशी में
                    केवल 7 दिन शेष थे और हमें अपने इस विचार को एक साकार रूप देने
                    के लिए एक सटीक परियोजना तैयार करनी थी। रात दिन लगकर हम दोनो
                    ने अंतत एक प्लेटफॉर्म तैयार किया, जिसमे एक ऐसी परियोजना का
                    निर्माण किया जिससे की हर एक व्यक्ति जन सरलता से इस महा अध्यन
                    के साथ जुड़ सके एवं रुचि के साथ इस अध्यन को निभा सकें।
                  </small>
                </p>
                <p className="mt-2">
                  <small>
                    हमने 18 लोगों के एक बैच से शुरू करना चाहा था, पर प्रभु की
                    कृपा देखो की पहली एकादशी 12 अगस्त 2023 को एक नही अपितु पूरे
                    6 बैच में 108 लोग जुड़ चुके थे, जिन्होंने सबने मिलकर पूरे
                    उत्साह और उल्लास के साथ सच्चे हृदय से इस आयोजन को सफल बनाया।
                    जिसके लिए हम संस्थापक होने के नाते, सभी सदस्यों का तह दिल से
                    आभार व्यक्त करते हैं। और हमें प्रसन्नता है की दूर दूर से
                    देश-विदेश से, नीत दिन लोग हमारे परिवार "कनु श्री राधे कृष्णा
                    ग्रुप (पंजी)" के साथ जुड़ते जा रहे हैं। हमें गर्व है की
                    दिल्ली के अतिरिक्त पंजाब, हरियाणा, राजस्थान, उत्तर प्रदेश,
                    उत्तराखंड, झारखंड, महाराष्ट्र एवं अंतर्राष्ट्रीय सदस्य दुबई,
                    लंदन, कनाडा, इंग्लैंड आदि विदेशों तक के लोग जुड़ चुके हैं।
                  </small>
                </p>
                <p className="mt-2">
                  <small>
                    यह एक पारिवारिक क्रिया है, जिसे हम सभी को एक जुट मिलकर साकार
                    रूप देना है। और अपने हिंदू धर्म की संस्कृति को सक्रिय बनाए
                    रखना है। तो आइए हम सब मिलकर एक धार्मिक इतिहास बनाए और अपने
                    जीवन में सुख समृद्धि को प्राप्त करें। हम सब मिलकर जीवन
                    पर्यन्त प्रभु की इच्छा तक इस भगवत गीता पाठ को क्रम के अनुसार
                    अध्यन करते रहेंगे। और इस महाअध्यन को विश्व स्तर पर ज्यादा से
                    ज्यादा विस्तार रूप देने का प्रयास करेगें।
                  </small>
                </p>
                <p className="mt-2">
                  <small>
                    हम आशा करते हैं के आप सब इसी प्रकार से "कनु श्री राधे कृष्णा
                    ग्रुप" के साथ जुड़े रहेंगे और सहायक बनेंगे।
                  </small>
                </p>
                <p className="fs-bold">
                  <strong>जय श्री राधे कृष्ण🙏 </strong>
                </p>
                <p className="fs-bold">
                  <strong>B.K Aggarwal and Ms. Kavita Aggarwal</strong>
                </p>
                <div className="founder-last">
                <p className="fs-bold">
                  <strong>(Founder President)</strong>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-5">
        <Reachus />
      </div>
    </>
  );
};

export default AboutPage;
