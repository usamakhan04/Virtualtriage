import React from "react";

import "./Rating.css";
function SecSix() {
  return (
    <>
      <div
        className="fix"
        style={{
          backgroundImage:
            "url('/assest/images/HomeImages/new logo VT-02-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgb(9 181 205 / 82%)",
          backgroundBlendMode: "overlay",
          height: "800px",
        }}
      >
        <div className="container p-5">
          <h2
            style={{
              textAlign: "center",
              letterSpacing: 3,
              color: "white",
              fontSize: "40px",
            }}
            data-aos="fade-right"
            className="hearwhatmobi"
          >
            Hear What Our Patients
            <br />
            Have to Say About Us
          </h2>
          <div className="row">
            <div
              className="card1 mt-5 ratingbgmobi"
              style={{ borderRadius: "70px" }}
              data-aos="fade-left"
              
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="rating_circle"
                      style={{
                        backgroundColor: "#32c6da"
                      }}
                    >
                      <img
                        src="/assest/images/cardratingimg/icon1-removebg-preview.png"
                        alt="ratingimg"
                        style={{ borderRadius: "60px" }}
                      />
                    </div>
                    <h4
                      style={{
                        marginLeft: "112px",
                        marginTop: "-100px",
                        color: "#32c6da",
                      }}
                      className="ratingnametextmobi"
                    >
                      Kumail
                      <br />
                      Raza
                    </h4>
                    <br />
                    <img
                      alt="sec6"
                      src="/assest/images/HomeImages/star.png"
                      style={{ marginLeft: "110px", marginTop: "-65px" }}
                      className="ratingstarmobi"
                    />
                  </div>
                  <div class="verticalkumail ratinglinemobi"></div>
                  <div className="col-md-8">
                    <h5 className="ratingtextmobi" style={{ textAlign: "start", marginTop: "1px" }}>
                      Virtual Triage has become an essential part of my health
                      care routine.The convenience of scheduling appointments
                      and having video consultations has made managing my health
                      so much easier.Thank you for this
                      <br />
                      amazing service!
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div
              className="card1 mt-5 ratingbgmobi"
              style={{ borderRadius: "70px" }}
              data-aos="fade-right"
              
            >
              <div className="card-body cardbodymobi">
                <div className="row">
                  <div className="col-md-8">
                    <h5
                      style={{ textAlign: "right", marginTop: "-14px" }}
                      className="p-3 ratingtextgirlmobi"
                    >
                      I cannot express how grateful I am for Virtual Triage, it
                      has revolutionized my healthcare experience. The ease of
                      scheduling appointments and the efficiency of video
                      consultations have given me the flexibility to prioritize
                      my health without any hassle.
                    </h5>
                  </div>
                  <div className="col-md-1">
                  <div class="verticalCanoy ratinglinemobi"></div>
                  </div>

                  <div className="col-md-3">
                    <h4
                      style={{
                        marginLeft: "46px",
                        color: "#32c6da",
                        letterSpacing: "1px",
                      }}
                      className="ratingnamtext"
                    >
                      Canoy
                      <br />
                      Ann
                    </h4>
                    <img
                      alt="sec6"
                      src="/assest/images/HomeImages/star.png"
                      style={{ width: "110px", marginLeft: "35px" }}
                      className="ratingclinetstar"
                    />

                    <div
                      className="rating_circle2 ratingbgcolr"
                      style={{ backgroundColor: "#32c6da" }}
                      
                    >
                      <img
                        src="/assest/images/cardratingimg/icon3-removebg-preview.png"
                        alt="ratingimg"
                        style={{ borderRadius: "60px" }}
                        className="ratingdpclinet"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div
              className="card1 mt-5"
              style={{ borderRadius: "70px" }}
              data-aos="fade-left"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="rating_circle"
                      style={{ backgroundColor: "#32c6da" }}
                    >
                      <img
                        src="/assest/images/cardratingimg/icon2-removebg-preview.png"
                        alt="ratingimg"
                        style={{ borderRadius: "60px" }}
                      />
                    </div>
                    <h4
                      style={{
                        marginLeft: "112px",
                        marginTop: "-100px",
                        color: "#32c6da",
                      }}
                    >
                      John.F
                      <br />
                      Kennady
                    </h4>
                    <br />
                    <img
                      alt="sec6"
                      src="/assest/images/HomeImages/star.png"
                      style={{ marginLeft: "110px", marginTop: "-65px" }}
                    />
                  </div>
                  <div class="verticalKennady"></div>
                  <div className="col-md-8">
                    <h5 style={{ textAlign: "start" }}>
                      Virtual Triage has been a game changer for me! The
                      convenience of booking appointments and connecting with
                      healthcare professionals through video consultations has
                      made my
                      <br />
                      health journey a breeze.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default SecSix;
