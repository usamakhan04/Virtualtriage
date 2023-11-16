import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./SecFive.css";
import "swiper/css";
import "swiper/css/autoplay";
import { EffectFade } from "swiper/modules";

import "swiper/css";

import { Autoplay } from "swiper/modules";

import ContactHeader from "../Contact/ContactHeader";
import Footer from "../Footer/Footer";

function Specialities() {
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
      <ContactHeader />
      <div
        id="contact-area"
        className="contact-area"
        style={{
          backgroundImage: "url('/assest/images/HomeImages/SecEight.png')",
          backgroundColor: "#ffffffcc",
          overflow: "revert-layer",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container pb-30 pt-30">
          {/* <!-- Section Title --> */}
          <div className="text-center col-12">
            <h3
              className="heading"
              style={{ color: "#69cddd", marginLeft: "18px", fontWeight:"bolder", fontFamily:"sans-serif" }}
              data-aos="flip-left"
            >
              SPECIALITIES
            </h3>
          </div>

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
          {/* <SecFive /> */}
        </div>
      </div>
      {/* ------------ */}
      <div id="contact-area" className="contact-area">
        <div className="container pb-30 pt-30">
          {/* <!-- Section Title --> */}
          <div className="text-center col-12">
            <h3 className="heading" style={{ color: "#69cddd", fontWeight:"bolder", fontFamily:"sans-serif" }}>
              All Specialities
            </h3>
          </div>

          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Aesthetic.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Aesthetic</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Discover your best self with aesthetic experts at your
                fingertips. Our app connects you to top professionals for
                personalized beauty and skincare advice.
              </h6>
            </div>
          </div>
          {/* 2 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Audiologist.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Audiologist</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Conquer hearing issues with ease. Find renowned audiologists
                through our app and embark on a journey to enhanced auditory
                health.
              </h6>
            </div>
          </div>
          {/* 3 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Cannabis.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Cannabis</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Navigate the medical cannabis landscape with our app. Connect
                with experienced practitioners for tailored treatments to meet
                your unique needs.
              </h6>
            </div>
          </div>
          {/* 4 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Chiropractic.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Chiropractic</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Wave goodbye to musculoskeletal problems. Our app offers access
                to trusted chiropractors for advanced care and pain management.
              </h6>
            </div>
          </div>
          {/* 5 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Dental.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Dental</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Achieve a healthy smile with the help of leading dentists.
                Schedule online appointments, and manage oral health from the
                comfort of your home.
              </h6>
            </div>
          </div>
          {/* 6 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Dermatology.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Dermatology</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Skin health is a tap away with our app. Connect with top
                dermatologists for personalized skincare solutions.
              </h6>
            </div>
          </div>
          {/* 7 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Eye-Care.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Eye Care</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Keep your vision clear and health in check. Access eye care
                specialists anytime, manage appointments and prescriptions
                seamlessly.
              </h6>
            </div>
          </div>
          {/* 8 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Fertility.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Fertility</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Navigate your fertility journey with personalized support. Our
                app connects you with fertility specialists for comprehensive
                consultations.
              </h6>
            </div>
          </div>
          {/* 8 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/GP.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>General Physician</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Holistic health management is just a click away. Schedule
                appointments with general physicians for regular check-ups or
                immediate consultations.
              </h6>
            </div>
          </div>
          {/* 8 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Hair Treatment.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Hair Treatments</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Restore the health and vitality of your hair. Our app offers
                access to top trichologists and hair care experts.
              </h6>
            </div>
          </div>

          {/* 10 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Medical Therapy.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Medical Therapy</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Journey towards recovery with individualized medical therapy.
                Connect with specialists via our app for a tailored treatment
                plan.
              </h6>
            </div>
          </div>
          {/* 11 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Naturopathic.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Naturopathic</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Embrace natural healing methods with ease. Find certified
                naturopaths to guide your journey towards holistic wellness.
              </h6>
            </div>
          </div>
          {/* 11 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Neurologist.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Neurologist</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Managing neurological health is now simplified. Connect with
                leading neurologists for personalized neurological care.
              </h6>
            </div>
          </div>
          {/* 12 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Nutrition.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Nutrition</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Achieve your health goals with personalized nutrition advice.
                Our app connects you with certified nutritionists for diet plans
                and guidance.
              </h6>
            </div>
          </div>
          {/* 13 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Optometry.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Optometry</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Preserve your vision health effortlessly. Schedule online
                appointments with optometrists for comprehensive eye
                examinations and care.
              </h6>
            </div>
          </div>
          {/* 14 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Orthotics.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Orthotics</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Alleviate discomfort with personalized orthotics advice. Our app
                provides access to orthotic specialists for custom solutions.
              </h6>
            </div>
          </div>
          {/* 15 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Physiotherapy.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Physiotherapy</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Advance your recovery with the help of physiotherapy experts.
                Manage your appointments and treatment plans effortlessly
                through our app.
              </h6>
            </div>
          </div>
          {/* 16 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Plastic Surgery.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Plastic Surgery</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Realize your aesthetic goals with professional guidance. Connect
                with renowned plastic surgeons for personalized consultations
                and care.
              </h6>
            </div>
          </div>
          {/* 17 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Podiatry.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Podiatry</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Foot and ankle health is now at your fingertips. Our app allows
                easy access to experienced podiatrists for comprehensive care.
              </h6>
            </div>
          </div>
          {/* 18 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Psychology.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Psychology</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Mental health care is just a tap away. Find psychologists for
                online consultations and therapy sessions, tailored to your
                needs.
              </h6>
            </div>
          </div>
          {/* 19 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Radiologist.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Radiologist</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Harness the power of radiology without stepping out. Access
                radiologists for online consultations and discuss your reports
                without any hassle.
              </h6>
            </div>
          </div>
          {/* 20 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Sleep.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Sleep</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Conquer sleep issues with ease. Find sleep experts on our app
                for personalized solutions to enhance your sleep quality.
              </h6>
            </div>
          </div>
          {/* 21 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Sports Medicine.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Sports Medicine</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Achieve peak performance and swift recovery. Connect with sports
                medicine experts for personalized treatment and prevention
                strategies.
              </h6>
            </div>
          </div>
          {/* 22 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Veterinary.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Veterinary</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Your pet's health is our priority. Our app connects you with
                experienced veterinarians for comprehensive pet care.
              </h6>
            </div>
          </div>
          {/* 23 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Wellness.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Wellness</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Elevate your well-being with our holistic wellness support. Find
                wellness coaches and programs to guide your journey to optimal
                health.
              </h6>
            </div>
          </div>
          {/* 24 */}
          <br />
          <div className="row speicontextmobi" style={{display:"flex",alignItems:"center"}}>
            <div className="col-md-1">
              <img
                src="/assest/images/Spectilies/Icons/Women_s Health.png"
                alt="contact1"
                className="speimgmobi"
              />
            </div>
            <div className="col-md-11 pt-2">
              <h5 style={{fontFamily:"sans-serif"}}><b>Women's Health</b></h5>
              <h6 style={{fontFamily:"sans-serif"}}>
                Empowering women with health care at their fingertips. Our app
                provides access to women's health specialists for
                personalized care.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Specialities;
