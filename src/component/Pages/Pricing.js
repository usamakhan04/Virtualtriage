import React from "react";
import { Link } from "react-router-dom";
import ContactHeader from "../Contact/ContactHeader";
import Footer from "../Footer/Footer";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <ContactHeader />
      {/* <!-- Hero Area============================================ --> */}
      <div
        className="fix p-5 bannermobi"
        style={{
          backgroundImage: "url('/assest/images/HomeImages/sevenSecDr.png')",
          backgroundColor: "rgb(9 181 205 / 82%)",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        id="Pricing"
      >
        <div className="container sec-7-cont">
          <h1
            style={{ textAlign: "start", color: "white", fontSize: "50px", fontFamily:"sans-serif" }}
            className="p-5"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            Unlimited Healthcare options at affordable <br className="mb-none"/> 
             prices
          </h1>
          <h5
            style={{ marginLeft: "50px", color: "white", fontFamily:"sans-serif" }}
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            Discover the power of Virtual Triage: Whether you're looking for a
            <br  className="mb-none"/>
            Single Visitor to Unlock Year-Round Virtual Health Care with Our
            <br   className="mb-none"/>
            Exclusive Membership Plans
          </h5>
          <br />
          <section className="pricings">
      
              <div className="row gx-0">
                <div className="col-lg-4" data-aos="flip-left">
                  <div className="card mb-lg-0">
                    <div className="card-body text-center mobiprice">
                      <img
                        src="/assest/images/Pricing/pricing1.png"
                        alt="log"
                        style={{marginTop:"-5px"}}
                      />
                      <h2 className="pt-3 text-white text-center" style={{fontFamily:'sans-serif'}}>$85/Month</h2>
                      <h2 className="pt-3 pb-3 text-white text-center" style={{fontFamily:'sans-serif'}}>
                        Basic
                      </h2>
                      <img
                        src="/assest/images/HomeImages/starsingle.png"
                        className="pb-3"
                        alt="log"
                        style={{ height: "18%" }}
                      />
                      <h3 className="pt-3 pb-3 text-white text-center" style={{fontFamily:'sans-serif'}}>
                        1 Practitioner
                      </h3>

                      <div style={{ textAlign: "center" }}>
                        <div className="button-group">
                          <Link
                            to="https://portal.virtualtriage.ca/doctor_register"
                            className="btn w-btn"
                            style={{
                              borderRadius: "10px",
                              width: "180px",
                              color: "#51cada",
                              paddingTop: "6px",
                              fontFamily: "sans-serif",
                              backgroundColor: "#fff",
                            }}
                          >
                            <b>Get Started</b>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" data-aos="flip-right">
                  <div className="card mb-lg-0">
                    <div className="card-body text-center mobiprice">
                      <div style={{ display: "contents" }}>
                        <img
                          src="/assest/images/Pricing/pricing2.png"
                          alt="log"
                        />
                     
                      </div>

                      <h2 className="pt-3 text-white text-center" style={{fontFamily:'sans-serif'}}>
                        $199/Month
                      </h2>
                      <h2 className="pt-3 pb-3 text-white text-center" style={{fontFamily:'sans-serif'}}>
                        Standard
                      </h2>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src="/assest/images/HomeImages/starsingle.png"
                          className="pb-3"
                          alt="log"
                          style={{ height: "4%" }}
                        />
                        <img
                          src="/assest/images/HomeImages/starsingle.png"
                          className="pb-3"
                          alt="log"
                          style={{ height: "4%" }}
                        />
                      </div>
                      {/* <br /> */}
                      <h3 className="pt-3 pb-3 text-white text-center" style={{fontFamily:'sans-serif'}}>
                        2-5 Practitioners
                      </h3>
                      <div style={{ textAlign: "center" }} className="">
                        <div className="button-group">
                          <Link
                            to="https://portal.virtualtriage.ca/doctor_register"
                            className="btn w-btn"
                            style={{
                              borderRadius: "10px",
                              width: "180px",
                              color: "#51cada",
                              paddingTop: "6px",
                              fontFamily: "sans-serif",
                              backgroundColor: "#fff",
                            }}
                          >
                            <b>Get Started</b>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" data-aos="flip-left">
                  <div className="card mb-lg-0">
                    <div className="card-body text-center mobiprice">
                      <div style={{ display: "contents" }}>
                        <img
                          src="/assest/images/Pricing/pricing3.png"
                          alt="log"
                            style={{marginTop:"-9px"}}
                        />
                       
                      </div>
                      <h2 className="pt-3 text-white text-center" style={{fontFamily:'sans-serif'}}>
                        $395/Month
                      </h2>
                      <h2 className="pt-3 pb-3 text-white text-center" style={{fontFamily:'sans-serif'}}>
                        Premium
                      </h2>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src="/assest/images/HomeImages/starsingle.png"
                          className="pb-3"
                          alt="log"
                          style={{ height: "5%" }}
                        />
                        <img
                          src="/assest/images/HomeImages/starsingle.png"
                          className="pb-3"
                          alt="log"
                          style={{ height: "5%" }}
                        />
                        <img
                          src="/assest/images/HomeImages/starsingle.png"
                          className="pb-3"
                          alt="log"
                          style={{ height: "5%" }}
                        />
                      </div>
                      <h3 className="pt-3 pb-3 text-white text-center" style={{fontFamily:'sans-serif'}}>
                        5-25 Practitioners
                      </h3>

                      <div style={{ textAlign: "center" }}>
                        <div className="button-group">
                          <Link
                            to="https://portal.virtualtriage.ca/doctor_register"
                            className="btn w-btn"
                            style={{
                              borderRadius: "10px",
                              width: "180px",
                              color: "#51cada",
                              paddingTop: "6px",
                              fontFamily: "sans-serif",
                              backgroundColor: "#fff",
                            }}
                          >
                            <b>Get Started</b>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
