import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- Feature Area============================================ --> */}
      <div
        id="feature-area"
        className="feature-area  pt-30 pb-30"
        style={{
          backgroundImage:
            "url(/assest/images/HomeImages/time-healing-concept-top-view.png)",
          backgroundColor: "white",
        }}
      >
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row">
            <div className="col-md-6">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h1
                  className="mobimedical"
                  style={{
                    fontSize: "71px",
                    fontWeight: "600",
                    fontFamily: "sans-serif",
                    color: "#4b4b4bf5",
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  Healthcare Practitioners Available for Online Consultation
                </h1>
                <h1
                  className="mobimedicalnum"
                  style={{
                    fontSize: "71px",
                    fontWeight: "600",
                    fontFamily: "sans-serif",
                    color: "#50cada",
                  }}
                  data-aos="fade-left"
                >
                  24/7
                </h1>
                <p
                  style={{
                    fontSize: "20px",
                    color: "black",
                    fontFamily: "sans-serif",
                  }}
                  data-aos="flip-right"
                >
                  We believe in healthcare that's as unique as you are. Our
                  advanced AI technology carefully assesses your medical
                  history, lifestyle, and individual preferences to craft a
                  personalized care plan tailored to your specific needs. No
                  more one-size-fits-all solutions. With Virtual Triage, you
                  have control over your healthcare. Get the right medical
                  attention when and where you need it.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mainicon mobimainicon" data-aos="flip-right">
                <img src="/assest/images/HomeImages/Layer10.png" alt="about1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
