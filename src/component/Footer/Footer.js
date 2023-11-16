import React, { useState } from "react";
import { Link } from "react-router-dom";
import tiktok from "../../assets/Images/HomeImages/Tiktok.png";
import axios from "axios";
import Swal from "sweetalert2";
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Define your API endpoint here
    const apiUrl = 'https://portal.virtualtriage.ca/contact_email';

    // Create a FormData object and append the form data to it
    const formData = new FormData();

    formData.append("email", email);
    formData.append("type", "news");

    // Send a POST request with the FormData
    axios
      .post(apiUrl, formData)
      .then((response) => {
        // Handle a successful response here (e.g., show a success message)
        console.log('Form submitted successfully', response);
        Swal.fire({
          icon: 'success',
          title: 'Form Submitted!',
          text: 'Your form has been submitted successfully.',
        });
        // You can display a success message or redirect the user
      })
      .catch((error) => {
        // Handle any errors here (e.g., show an error message)
        console.error('Error submitting form', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while submitting the form.',
        });
      });
  };


  return (
    <>
      <div
        id="contact-area"
        className="contact-area pt-20"
        style={{ background: "black" }}
      >
        <div className="container pb-30">
          {/* <!-- Section Title --> */}
          <div className="hero-slide-content heromobifooter">
            <div className="row">
              <div className="col-md-3">
                <h3
                  className="mb-gap fotercentermobi"
                  style={{
                    color: "#32c6da",
                    textDecoration: "auto",
                    textAlign: "left",
                    fontFamily: "sans-serif",
                  }}
                >
                  Features
                </h3>
                <div className="fotercentermobi" style={{ textAlign: "start" }}>
                  <Link
                    style={{
                      color: "gray",
                      textDecoration: "auto",
                      textAlign: "center",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Importable Patient History
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Remote Patient Monitoring
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    In-App Communication
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Real-time appointment
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    VIdeo Conference
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    E-Prescription
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Ai Chatbot
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <h3
                  className="mb-gap fotercentermobi"
                  style={{
                    color: "#32c6da",
                    textDecoration: "auto",
                    textAlign: "left",
                    fontFamily: "sans-serif",
                  }}
                >
                  Specialities
                </h3>
                <div className="fotercentermobi" style={{ textAlign: "start" }}>
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Hair Treatment
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Dermatology
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Aesthetic
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Eye care
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Fertility
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Dental
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <h3
                  className="mb-gap fotercentermobi"
                  style={{
                    color: "#32c6da",
                    textDecoration: "auto",
                    textAlign: "left",
                    fontFamily: "sans-serif",
                  }}
                >
                  Company
                </h3>
                <div
                  className="fotercentermobi"
                  style={{ textAlign: "start", fontFamily: "sans-serif" }}
                >
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Become a Provider
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Newsletter
                  </Link>
                  <br />
                  <Link
                    to="/Privacypolicy"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Privacy Policy
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    About Us
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Careers
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Security
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Partner
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <h3
                  className="mb-gap fotercentermobi"
                  style={{
                    color: "#32c6da",
                    textDecoration: "auto",
                    textAlign: "left",
                    fontFamily: "sans-serif",
                  }}
                >
                  Services
                </h3>
                <div className="fotercentermobi" style={{ textAlign: "start" }}>
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Treatable condition
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Online Prescription
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Meet our Practitioners
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    How it works
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Contact Us
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Pricing
                  </Link>
                  <br />
                  <Link
                    to="#"
                    style={{ color: "gray", textDecoration: "auto" }}
                  >
                    Clinics
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <h4
              className="fotertxtsubsmobi"
              style={{
                fontSize: "23px",
                color: "#32c6da",
                fontFamily: "sans-serif",
              }}
            >
              Subscribe for our Newsletter
            </h4>
            <div className="row">
              <div className="col-md-4">
                    <form
                      method="post"
                      onSubmit={handleSubmit}
                    >
                      <h6 style={{ color: "gray", fontFamily: "sans-serif" }}>
                        Email Address*
                      </h6>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter Email"
                          style={{
                            background: "#32c6da",
                            color: "black",
                            height: "38px",
                          }}
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          required
                          
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-success"
                            type="submit"
                            style={{
                              border: "solid 1px white",
                              height: "38px",
                              color: "black",
                              background: "#32c6da",
                            }}
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
              </div>

              <div className="dpmobifoter">
                <div className="col-md-2" style={{ marginTop: "12px" }}>
                  <Link
                    to={
                      "https://apps.apple.com/pk/app/virtual-triage/id1644720170"
                    }
                  >
                    <img
                      alt="baner1"
                      src="/assest/images/FooterImg/App.png"
                      style={{
                        border: "solid 1px white",
                        borderRadius: "10px",
                      }}
                      // data-aos="flip-left"
                      className="foterimgmobi"
                    />
                  </Link>
                </div>
                <div className="col-md-2" style={{ marginTop: "12px" }}>
                  <Link
                    to={
                      "https://play.google.com/store/apps/details?id=com.earcanada"
                    }
                  >
                    <img
                      alt="baner2"
                      src="/assest/images/FooterImg/google.png"
                      style={{
                        border: "solid 1px white",
                        borderRadius: "10px",
                      }}
                      // data-aos="flip-left"
                      className="foterimgmobi"
                    />
                  </Link>
                </div>
                <div className="col-md-2" style={{ marginTop: "12px" }}>
                  <Link to={"https://portal.virtualtriage.ca"}>
                    <img
                      alt="baner"
                      src="/assest/images/FooterImg/web.png"
                      style={{
                        border: "solid 1px white",
                        borderRadius: "10px",
                      }}
                      className="foterimgmobi"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#32c6da" }}>
          <div className="container">
            <div
              className="row iconinline"
              style={{ justifyContent: "center", flexDirection: "row" }}
            >
              <div className="mbrow">
                <div
                  className="col-md-5 col3mobi"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    alt="baner"
                    src="/assest/images/FooterImg/phone.png"
                    style={{ height: "25px", margin: "10px" }}
                    className="fotericonmob"
                  />
                  <h5
                    className="fotertextmob"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    <b style={{ fontSize: "20px" }} className="textfotermobi">
                      <a href="tel:+16476606700">+1 (647) 660 6700</a>
                    </b>
                  </h5>
                </div>

                <div className="col-md-3" style={{ display: "flex" }}>
                  <img
                    alt="baner"
                    src="/assest/images/FooterImg/envolape.png"
                    style={{ height: "25px", margin: "10px" }}
                    className="fotericonmob"
                  />
                  <h5
                    style={{
                      marginTop: "10px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                    className="fotertextmob"
                  >
                    <b style={{ fontSize: "20px" }} className="textfotermobi">
                      <a href="mailto:info@virtualtriage.ca">
                        info@virtualtriage.ca
                      </a>
                    </b>
                  </h5>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-3" style={{ display: "flex" }}>
                <Link to={"https://www.instagram.com/virtual_triage/"}>
                  <img
                    alt="baner"
                    src="/assest/images/FooterImg/intgram.png"
                    style={{
                      height: "35px",
                      border: "solid 2px black",
                      borderRadius: "10px",
                      padding: "5px",
                      margin: "5px",
                    }}
                  />
                </Link>
                <Link
                  to={
                    "https://www.tiktok.com/@virtualtriage?_t=8b0F8fMrecQ&_r=1"
                  }
                >
                  <img
                    alt="baner"
                    src={tiktok}
                    style={{
                      height: "35px",
                      border: "solid 2px black",
                      borderRadius: "10px",
                      padding: "5px",
                      margin: "5px",
                    }}
                  />
                </Link>
                <Link to={"https://pin.it/60RxxzP"}>
                  <img
                    alt="baner"
                    src="/assest/images/FooterImg/pinterest.png"
                    style={{
                      height: "35px",
                      border: "solid 2px black",
                      borderRadius: "10px",
                      padding: "5px",
                      margin: "5px",
                    }}
                  />
                </Link>
                <Link
                  to={"https://www.facebook.com/virtualtriage?mibextid=ZbWKwL"}
                >
                  <img
                    alt="baner"
                    src="/assest/images/FooterImg/fb.png"
                    style={{
                      height: "35px",
                      border: "solid 2px black",
                      borderRadius: "10px",
                      padding: "5px",
                      margin: "5px",
                    }}
                  />
                </Link>
                <Link to={"https://twitter.com/virtual_triage"}>
                  <img
                    alt="baner"
                    src="/assest/images/FooterImg/twitter.png"
                    style={{
                      height: "35px",
                      border: "solid 2px black",
                      borderRadius: "10px",
                      padding: "5px",
                      margin: "5px",
                    }}
                  />
                </Link>
                <Link to={"https://www.linkedin.com/company/virtualtriage/"}>
                  <img
                    alt="baner"
                    src="/assest/images/FooterImg/linkedin.png"
                    style={{
                      height: "35px",
                      border: "solid 2px black",
                      borderRadius: "10px",
                      padding: "5px",
                      margin: "5px",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
