import React, { useState, useEffect } from "react";
// import "../../../App.css";
import "./SecFour.css";
import img1 from "../../../assets/Images/mobileSlider/1.png";
import img2 from "../../../assets/Images/mobileSlider/2.png";
import img3 from "../../../assets/Images/mobileSlider/3.png";

function SecFour() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    //  fix col-lx-12 col-lg-12 pb-10
    <div
      className="fix col-lx-12 col-lg-12"
      style={{ backgroundColor: "white" }}
    >
      <div className="center-container">
        <div className="hero-slide-content mobi-5">
          <div className="row">
            <div className="col-md-7">
              <div
                className="sec1"
                data-aos="fade-right"
              >
                <h3 style={{ color: "#50cada", fontWeight: "800", fontFamily:"sans-serif" }}>
                  How it works:
                </h3>
                <div className="row gy-4">
                  <div className="col-md-8 secfour-con">
                    <h1
                      style={{
                        color: "#50cada",
                        fontWeight: "400",
                        fontSize: "23px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      ➥ Seamless Symptom Description Made Effortless
                    </h1>
                    <p
                      style={{
                        color: "black",
                        textAlign: "start",
                        fontFamily:"sans-serif"
                      }}
                    >
                      Describe your symptoms through
                      <br />
                      our user-friendly Virtual Triage
                      <br />
                      app.
                    </p>
                  </div>
                  <div
                    className="col-md-4 worksiconmobi"
                    style={{ paddingLeft: "70px" }}
                  >
                    <img alt="Sec" src="/assest/images/HomeImages/icon1.png" />
                  </div>
                </div>

                <div className="row  gy-4">
                  <div className="col-md-8">
                    <h1
                      style={{
                        color: "#50cada",
                        fontWeight: "400",
                        fontSize: "23px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      ➥ Stay Connected with Your Practitioner or Patients
                    </h1>
                    <p
                      style={{
                        color: "black",
                        textAlign: "start",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Effortless Interaction and Seamless Communication Between 
                      <br />
                      Healthcare Practitioners and Patients.
                    </p>
                  </div>
                  <div
                    className="col-md-4 worksiconmobi"
                    style={{ paddingLeft: "70px" }}
                  >
                    <img alt="sec1" src="/assest/images/HomeImages/icon2.png" />
                  </div>
                </div>

                <div className="row  gy-4">
                  <div className="col-md-8">
                    <h1
                      style={{
                        color: "#50cada",
                        fontWeight: "400",
                        fontSize: "23px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      ➥ Cutting-Edge E-Prescription System
                    </h1>
                    <p
                      style={{
                        color: "black",
                        textAlign: "start",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Introducing the revolutionary
                      <br />
                      e-prescriptions system
                      <br />
                      through virtual triage.
                    </p>
                  </div>
                  <div
                    className="col-md-4 worksiconmobi mobi-4"
                    style={{ paddingLeft: "70px" }}
                  >
                    <img alt="sec3" src="/assest/images/HomeImages/icon3.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="imagesContaineruk">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`imageDiv ${
                      index === currentIndex ? "fadeIn" : "fadeOut"
                    }`}
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecFour;
