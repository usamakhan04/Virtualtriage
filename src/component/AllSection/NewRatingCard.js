import React from "react";
import "../AllSection/HomeSec/NewRatingCards.css";

function NewRatingCard() {
  return (
    <div>
      <section
        class="light fix"
        style={{
          backgroundImage:
            "url('/assest/images/HomeImages/LayerSec6banner.jpg')",
          backgroundSize: "cover",
          // background:"black",
          // borderBottom:"solid"
        }}
      >
        <div class="container py-2">
          <div class="h1 text-center text-dark" id="pageHeaderTitle">
            <h2
              style={{
                textAlign: "center",
                letterSpacing: 3,
                color: "white",
                fontSize: "40px",
                fontFamily:"sans-serif"
              }}
              data-aos="fade-right"
              className="hearwhatmobi"
            >
              Hear What Our Users
              <br />
              Have to Say About Us
            </h2>
          </div>

          <article
            class="postcard light blue"
            data-aos="flip-right"
            style={{ borderRadius: "50px", height: "200px", opacity: "0.9" }}
          >
            <div class="postcard__text t-dark">
              <h1 class="postcard__title blue">
                <h2 style={{ color: "black", fontFamily:"sans-serif" }}>
                  Dr Robert Bryce
                </h2>
              </h1>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt" style={{fontFamily:"sans-serif"}}>
                This App has revolutionized my healthcare experience. The ease
                of scheduling appointments and the efficiency of video
                consultations have given me the flexibility to prioritize my
                health without any hassle.
              </div>
            </div>
          </article>

          <article
            class="postcard light red"
            data-aos="flip-left"
            style={{ borderRadius: "50px", height: "201px", opacity: "0.9" }}
          >
            <div class="postcard__text t-dark">
              <h1 class="postcard__title red">
                <h2 style={{ color: "black", fontFamily:"sans-serif" }}>
                  Terence Boateng
                </h2>
              </h1>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt" style={{fontFamily:"sans-serif"}}>
                Virtual Triage has been a game changer for me! The convenience
                of booking appointments and connecting with healthcare
                professionals through video consultations has made my health
                journey a breeze.
              </div>
            </div>
          </article>

          <article
            class="postcard light green"
            data-aos="flip-right"
            style={{ borderRadius: "50px", height: "201px", opacity: "0.9" }}
          >
            <div class="postcard__text t-dark">
              <h1 class="postcard__title green">
                <h2  style={{ color: "black",fontFamily:"sans-serif" }}>
                  Rakesh Modi
                </h2>
              </h1>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt" style={{fontFamily:"sans-serif"}}>
                Virtual Triage has become an essential part of my health care
                routine.The convenience of scheduling appointments and having
                video consultations has made managing my health so much
                easier.Thank you for this amazing service!
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default NewRatingCard;
