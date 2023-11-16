import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import AOS from "aos";
import "../AllSection/HomeSec/ResponsiveWeb.css";
import './Banner.css'

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds (1 second)
      delay: 200, // Delay before animation starts in milliseconds (200 milliseconds)
    });
  }, []);
  const openCalendlyPopup = () => {
    // Initialize the Calendly popup widget
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/d/4bw-9rm-5vv?hide_gdpr_banner=1&background_color=40c4d9&text_color=ffffff&primary_color=ffffff",
    });
  };
  return (
    <>
      {/* <!-- Hero Area============================================ --> */}
      <div className="fix col-lx-12 col-lg-12 main-banner pb-20">
        <Header />
        <div className="container">
          <div className="hero-slide-content text-right">
            <div className="row">
              <div
                className="col-md-6 col-lx-6 col-lg-6"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  alt="banner"
                  className="mobibanner"
                  src="/assest/images/HomeImages/Banner-vt-Correction.png"
                  style={{
                    marginTop: "-25px",
                    scale: "1.3",
                  }}
                />
              </div>
              <div className="col-md-6 col-lx-6 col-lg-6">
                <div data-aos="zoom-out-left">
                  <h1
                    style={{
                      textAlign: "left",
                      textTransform: "capitalize",
                      letterSpacing: "1px",
                      fontSize: "62px",
                      fontFamily: "sans-serif",
                      marginLeft: "72px",
                      fontWeight: "700",
                    }}
                    data-aos="fade-up"
                    className="bannername typewriter"
                  >
                    Embracing
                  </h1>

                  <h1
                    style={{
                      textAlign: "left",
                      textTransform: "capitalize",
                      letterSpacing: "1px",
                      fontSize: "62px",
                      fontFamily: "sans-serif",
                      marginLeft: "72px",
                      fontWeight: "700",
                    }}
                    className="bannername2"
                  >
                    Cutting-Edge
                  </h1>
                  <h1
                    style={{
                      textAlign: "left",
                      textTransform: "capitalize",
                      letterSpacing: "1px",
                      fontSize: "62px",
                      fontFamily: "sans-serif",
                      marginLeft: "72px",
                      fontWeight: "700",
                    }}
                    className="bannername2"
                  >
                    Technology
                  </h1>
                </div>
                <div
                  style={{
                    textAlign: "start",
                    marginLeft: "75px",
                    fontFamily: "sans-serif",
                  }}
                  className="bannername3"
                >
                  <h4
                    className="text-white bnertextmobi"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    to Seamlessly Connect
                  </h4>
                  <h4
                    className="text-white bnertextmobi"
                    style={{
                      textTransform: "capitalize",
                      fontWeight: "800",
                      textAlign: "start",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Practitioners and Patients
                  </h4>
                  <h4
                    className="text-white bnertextmobi"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Worldwide
                  </h4>
                </div>
                <div style={{marginRight: "34%" }}>
                  <div className="button-group btnmobi">
                    <Link
                      to="https://portal.virtualtriage.ca/doctor_register"
                      className="btn transparent"
                      style={{
                        borderRadius: "15px",
                        textTransform: "capitalize",
                        width: "150px",
                        paddingTop: "0px",
                        fontSize: "20px",
                        fontFamily: "Calibri",
                      }}
                    >
                      <b>Free Trial</b>
                    </Link>
                    <Link
                      onClick={openCalendlyPopup}
                      to=""
                      className="btn transparent"
                      style={{
                        borderRadius: "15px",
                        textTransform: "capitalize",
                        width: "150px",
                        paddingTop: "0px",
                        fontSize: "20px",
                        fontFamily: "Calibri",
                      }}
                    >
                      <b>Book A Demo</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
