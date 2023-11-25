import React from "react";

function OurDocterSec() {
  return (
    <>
      {/* <!-- Hero Area============================================ --> */}
      <div
        className="fix col-lx-12 col-lg-12 bannermobi"
        style={{
          backgroundImage:
            "url('/assest/images/HomeImages/uknewbannerdr.png')",
          backgroundSize: "cover",
          // background:"black",
          // borderBottom:"solid"
        }}
      >
        <div className="container">
          {/* <img src="/assest/images/HomeImages/Layer5.png" /> */}
          <div className="hero-slide-content float-right text-right heromobi">
            <div className="row gy-4">
              <div className="col-md-8" data-aos="flip-down">
                <img
                  alt="our1"
                  src="/assest/images/HomeImages/section3.png"
                  style={{ marginBottom: "-2px" }}
                />
              </div>
              <div
                className="col-md-4"
                style={{
                  height: "auto",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* <h3>welcome to VT</h3> */}
                <h3
                  data-aos="fade-down"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                  style={{
                    textAlign: "right",
                    fontWeight: "600",
                    fontSize: "32px",
                    fontFamily: "sans-serif",
                    paddingBottom: "0px",
                  }}
                >
                  Global Access,Local Expertise: Connect with Top Health care
                  Professionals Anywhere, Anytime!
                </h3>
                <br />

                <p
                  data-aos="fade-left"
                  style={{
                    textAlign: "right",
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    paddingBottom: "2rem",
                  }}
                >
                  With our global presence, whether you require a
                  prescription,medical advice,lab requisitions, or specialised
                  consultations,accessing a healthcare provider within minutes
                  is just a click away. Say goodbye to the limitations of time
                  and distance and embrace a new era of virtual healthcare
                  excellence. Book your appointment now and experience the
                  seamless convenience of our globally recognized Virtual Triage
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurDocterSec;
