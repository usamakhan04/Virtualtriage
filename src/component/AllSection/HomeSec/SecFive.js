import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SecFive.css";
import "swiper/css";
import "swiper/css/autoplay";
import { EffectFade } from "swiper/modules";

import "swiper/css";

import { Autoplay } from "swiper/modules";
function SecFive() {
  const images = [
    "/assest/images/Spectilies/Icons/Aesthetic.png",
    "/assest/images/Spectilies/Icons/Audiologist.png",
    "/assest/images/Spectilies/Icons/Cannabis.png",
    "/assest/images/Spectilies/Icons/Chiropractic.png",
    "/assest/images/Spectilies/Icons/Dental.png",
    "/assest/images/Spectilies/Icons/Dermatology.png",
    "/assest/images/Spectilies/Icons/Eye-Care.png",
    "/assest/images/Spectilies/Icons/Fertility.png",
    "/assest/images/Spectilies/Icons/Hair Treatment.png",
    "/assest/images/Spectilies/Icons/Medical Therapy.png",
    "/assest/images/Spectilies/Icons/Naturopathic.png",
    "/assest/images/Spectilies/Icons/Neurologist.png",
    "/assest/images/Spectilies/Icons/Nutrition.png",
    "/assest/images/Spectilies/Icons/Optometry.png",
    "/assest/images/Spectilies/Icons/Orthotics.png",
    "/assest/images/Spectilies/Icons/Physiotherapy.png",
    "/assest/images/Spectilies/Icons/Plastic Surgery.png",
    "/assest/images/Spectilies/Icons/Podiatry.png",
    "/assest/images/Spectilies/Icons/Psychology.png",
    "/assest/images/Spectilies/Icons/Radiologist.png",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const getStyle = (slideIndex, centeredIndex) => {
    const totalImages = images.length;
    const adjustedCenteredIndex = (centeredIndex + totalImages) % totalImages;

    if (slideIndex === centeredIndex) {
      return {
        marginTop: "10%",
        position: "relative",

        transition: "margin-top 0.4s    ease-in-out, top 0.3s ease-in-out", // Add transition for marginTop and top properties
      };
    } else if (
      slideIndex === (adjustedCenteredIndex + totalImages - 1) % totalImages ||
      slideIndex === (adjustedCenteredIndex + 1) % totalImages
    ) {
      return {
        marginTop: "6%",
        position: "relative",

        transition: "margin-top 0.4s ease-in-out, top 0.3s ease-in-out", // Add transition for marginTop and top properties
      };
    } else {
      return {};
    }
  };

  return (
    <>
      <div style={{
          backgroundColor: "white",
        }}>
        <br />
        <br />

        <h2
          style={{ textAlign: "center", color: "#50cada", fontFamily:"sans-serif" }}
          data-aos="zoom-in-up"
          className="spefontmobi"
        >
          OUR SPECIALITIES
        </h2>
        <br />
        <div className="container">
        <h4 className="sec5mobi" style={{ textAlign: "center", fontFamily:"sans-serif" }}>
          Experience Seamless, Specialized,{" "}
          <span style={{ color: "#50cada", fontFamily:"sans-serif" }}>24/7</span> Online Consultations from
          anywhere in the world. Unleash the Power of
           Convenient, Personalized Care Today
        </h4>
        </div>
        <br />
        {/* Swiper */}
        <div className="container">
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            modules={[Autoplay, EffectFade]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 2)}
            autoplay={true}
            loop={true}
            speed={2000}
            style={{textAlign:"center"}}
            // Add the slide effect for transition animation

            onSwiper={(swiper) => console.log(swiper)}
          >
            {images.map((res, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide" // Apply the custom animation class
                style={getStyle(index, activeIndex % images.length)}
              >
                <img alt="" key={index} src={res} className="img-fluid" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link
            to="/Specialities"
            className="btnviewhover"
            style={{
              paddingTop: "4px",
              color: "white",
              backgroundColor: "#50cada",
              boxShadow: " -1px 1px 10px 2px gray",
              padding: "10px 40px",
              borderRadius: "18px",
            }}
          >
            <b style={{ fontFamily: "sans-serif" }}>View All Specialities</b>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default SecFive;
